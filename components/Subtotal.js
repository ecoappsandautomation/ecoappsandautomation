import { Button } from "@material-ui/core";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { selectBasket, selectTotal } from "../features/basketSlice";
import ContactDetails from "./ContactDetails";
import GoogleAddressForm from "./GoogleAddressForm";
import OrderType from "./OrderType";
import { BiTimer } from "react-icons/bi";
import DeliveryEstimate from "./DeliveryEstimate";
import SubtotalAmount from "./SubtotalAmount";
import DeliveryTimePicker from "./DeliveryTimePicker";
const stripePromise = loadStripe(process.env.stripe_public_key);

function Subtotal(props) {
	const basket = useSelector(selectBasket);
	const total = useSelector(selectTotal);
	const [step, setStep] = useState(0);
	const [orderType, setOrderType] = useState("");

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");

	const [lineOne, setLineOne] = useState("");
	const [city, setCity] = useState("");
	const [province, setProvince] = useState("");
	const [country, setCountry] = useState("");
	const [postalCode, setPostalCode] = useState("");

	const [loading, setLoading] = useState(false);

	const createCheckoutSession = async (e) => {
		e.preventDefault();
		const stripe = await stripePromise;
		const contactDetails = {
			name: name,
			email: email,
			phoneNumber: phoneNumber,
		};
		const shippingDetails = {
			lineOne: lineOne,
			city: city,
			province: province,
			country: country,
			postalCode: postalCode,
		};
		// Call the backend to create a checkout session...
		const checkoutSession = await axios.post("/api/create-checkout-sessions", {
			items: basket,
			type: orderType,
			contactDetails: contactDetails,
			shippingDetails: shippingDetails,
		});

		// Redirect user/customer to STripe Checkout
		const result = await stripe.redirectToCheckout({
			sessionId: checkoutSession.data.id,
		});

		if (result.error) alert(result.error.message);
	};

	switch (step) {
		case 0:
			return (
				<>
					{basket.length !== 0 ? (
						<Container>
							<SubtotalAmount basket={basket} total={total} />
							<DeliveryTimePicker />
							<CheckoutButton
								role='link'
								onClick={() => {
									setStep(1);
								}}
								type='submit'
							>
								Continue to Billing Info
							</CheckoutButton>
						</Container>
					) : null}
				</>
			);
		case 1:
			return (
				<>
					<Container>
						<SubtotalAmount basket={basket} total={total} />
						<ContactDetails
							name={name}
							setName={setName}
							email={email}
							setEmail={setEmail}
							phoneNumber={phoneNumber}
							setPhoneNumber={setPhoneNumber}
						/>
						<OrderType orderType={orderType} setOrderType={setOrderType} />
						{orderType === "delivery" ? (
							<GoogleAddressForm
								lineOne={lineOne}
								setLineOne={setLineOne}
								city={city}
								setCity={setCity}
								province={province}
								setProvince={setProvince}
								country={country}
								setCountry={setCountry}
								postalCode={postalCode}
								setPostalCode={setPostalCode}
							/>
						) : null}

						<CheckoutButton
							role='link'
							onClick={() => {
								setStep(2);
							}}
							type='submit'
						>
							Continue to Delivery Time
						</CheckoutButton>
					</Container>
					{orderType === "" ? (
						<Under>
							<Timer />
							<DeliveryEstimate />
						</Under>
					) : null}
				</>
			);
		case 2:
			return (
				<>
					<Container onSubmit={(e) => createCheckoutSession(e)}>
						<CheckoutButton type='submit' role='link'>
							Continue to Payment Info
						</CheckoutButton>
					</Container>
				</>
			);
	}
}
export default Subtotal;
const Under = styled.div`
	display: flex;
	align-items: center;
	margin-top: 8px;
	color: var(--light-colour-2);
	> p {
		text-align: center;
	}
`;
const Timer = styled(BiTimer)`
	font-size: 21px;
	margin: 0px 8px 0px -4px;
`;
const Container = styled.form`
	display: flex;
	flex-direction: column;
	width: 300px;
	margin: 0 auto;
	padding: 20px;
	background: var(--bg-colour-2);
	border: 1px solid var(--light-colour-3);
	border-radius: 3px;
	position: sticky;
	top: 6.555rem;
	@media (max-width: 600px) {
		width: 80%;
	}
`;
const CheckoutButton = styled(Button)`
	&&& {
		background-color: var(--link-colour-1);
		padding: 8px 16px;
		border-radius: 2px;
		width: 100%;
		margin-top: 16px;
		color: white;
		:hover {
			background-color: var(--light-colour-2);
		}
	}
`;
