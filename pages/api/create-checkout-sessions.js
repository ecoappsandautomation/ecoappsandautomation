import { FormatAlignJustifyTwoTone } from "@material-ui/icons";
import { resolveHref } from "next/dist/next-server/lib/router/router";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async (req, res) => {
	const { items, type, contactDetails, shippingDetails } = req.body;

	const transformedItems = items.map((item) => ({
		description: item.description,
		quantity: item.quantity,

		price_data: {
			currency: "cad",
			unit_amount: item.price * 100,
			product_data: {
				name: item.name,
				images: [item.image],
			},
		},
	}));

	const session = await stripe.checkout.sessions.create({
		payment_method_types: ["card"],
		customer_email: contactDetails.email,
		line_items: transformedItems,
		mode: "payment",
		success_url: `${process.env.HOST}/thankyou?session_id={CHECKOUT_SESSION_ID}`,
		cancel_url: `${process.env.HOST}/checkout`,
		metadata: {
			customer: JSON.stringify({
				name: contactDetails.name,
				email: contactDetails.email,
				phone: contactDetails.phoneNumber,
				shipping: {
					address: {
						city: shippingDetails.city,
						country: "CA",
						state: "AB",
						postal_code: shippingDetails.postalCode,
						line1: shippingDetails.lineOne,
					},
				},
			}),
			type: type,
		},
	});
	res.status(200).json({ id: session.id });
};
