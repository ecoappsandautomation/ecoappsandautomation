import { buffer } from "micro";
import * as admin from "firebase-admin";

// Secure a connection to Firebase from the backend
const serviceAccount = require("../../permissions.json");
const app = !admin.apps.length
	? admin.initializeApp({
			credential: admin.credential.cert(serviceAccount),
	  })
	: admin.app();

// Establish a connection to Stripe
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const endpointSecret = process.env.STRIPE_SIGNING_SECRET;

const items = (customerId) => {
	return new Promise((resolve, reject) => {
		stripe.checkout.sessions.listLineItems(customerId, (err, lineItems) => {
			if (err) {
				return reject(e);
			}
			resolve(lineItems);
		});
	});
};

const updatePaymentIntent = async (session) => {
	const paymentIntent = await stripe.paymentIntents
		.retrieve(session.payment_intent)
		.then((res) => {
			console.log("PAYMENT INTENT UPDATED", res);
		});
};
const fulfillOrder = async (session) => {
	const lineItems = await items(session.id);
	console.log("Fulfilling order", session);

	return app
		.firestore()
		.collection("orders")
		.doc(session.id)
		.set({
			amount: session.amount_total / 100,
			timestamp: admin.firestore.FieldValue.serverTimestamp(),
			status: "received",
			items: lineItems,
			customer: JSON.parse(session.metadata.customer),
			type: session.metadata.type,
		})
		.then(() => {
			// New order email notification can go here...
			// Send Order Confirmation to user / customer
			// Send Order On the Way email to user / customer ( this will be in admin platform )

			console.log(`SUCCESS: Order ${session.id} has been added to the DB`);
			updatePaymentIntent(session);
		})
		.catch((err) => {
			console.log(err.message);
		});
};

export default async (req, res) => {
	if (req.method === "POST") {
		const requestBuffer = await buffer(req);
		const payload = requestBuffer.toString();
		const sig = req.headers["stripe-signature"];

		let event;
		// Verify that the EVENT posted came from Stripe
		try {
			event = stripe.webhooks.constructEvent(payload, sig, endpointSecret);
		} catch (err) {
			console.log("ERROR >>> ", err.message);
			return res.status(400).send(`Webhook error: ${err.message}`);
		}

		// Handle the checkout.session.completed event
		if (event.type === "checkout.session.completed") {
			const session = event.data.object;

			// Fulfill the order...
			return fulfillOrder(session)
				.then(() => res.status(200))
				.catch((err) => res.status(400).send(`Webhook Error: ${err.message}`));
		}
	}
};

export const config = {
	api: {
		bodyParser: false,
		externalResolver: true,
	},
};
