import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { addBasketItem } from "../features/basketSlice";
import { selectTotal, selectBasket } from "../features/basketSlice";
import getItem from "../utils/getItem";
function PayItForwardRequestor(props) {
	const items = getItem("gift");
	const basket = useSelector(selectBasket);
	const total = useSelector(selectTotal);
	const dispatch = useDispatch();
	const [step, setStep] = useState(0);
	const [show, setShow] = useState({ giftOne: true, giftTwo: true });
	useEffect(() => {
		let showGiftOne = true;
		let showGiftTwo = true;
		console.log(basket.find((item) => item.id));
		if (basket.find((product) => product.id === 11)) {
			showGiftOne = false;
		}
		if (basket.find((product) => product.id === 12)) {
			showGiftTwo = false;
		}
		setShow({ giftOne: showGiftOne, giftTwo: showGiftTwo });
	}, [basket]);
	console.log(show);
	const getGift = (item) => {
		let itemName = item;
		if (itemName === 0) {
			itemName = "Gift Nutritious Meal";
		}
		if (itemName === 1) {
			itemName = "Gift a Tree";
		}

		let product = {
			name: items.Offerings[itemName].name,
			id: items.Offerings[itemName].id,
			description: items.Offerings[itemName].description,
			price: items.Offerings[itemName].price,
			rating: items.Offerings[itemName].rating,
			image: items.Offerings[itemName].image,
			availability: true,
			quantity: 1,
		};

		return product;
	};

	const addGiftToOrder = (gift, requestNum) => {
		let product;
		let selection;

		gift === "meal" ? (selection = 0) : {};
		gift === "tree" ? (selection = 1) : {};
		product = getGift(selection);

		dispatch(addBasketItem(product));
		if (requestNum === 0) {
			setStep(2);
		} else {
			setStep((step) => step + 1);
		}
	};
	const continueToOrderStatus = () => {
		setStep((step) => step + 1);
	};
	console.log(step);
	switch (step) {
		case 0:
			return (
				<>
					{total > 10 && show.giftOne ? (
						<Container>
							<p>
								Do you want to pay it forward and donate a meal for someone in
								need for $10?
							</p>
							<ButtonOne
								onClick={(e) => {
									e.preventDefault();
									addGiftToOrder("meal");
								}}
							>
								Yes, add a Gift Meal Contribution for $10 to my Order
							</ButtonOne>
							<ButtonTwo
								onClick={(e) => {
									e.preventDefault();
									continueToOrderStatus();
								}}
							>
								No, not right now
							</ButtonTwo>
							<Small>
								100% of your contribution goes towards feeding someone in need
								locally
							</Small>
						</Container>
					) : show.giftTwo ? (
						<Container>
							<p>Do you want to contribute $1 to plant a tree?</p>
							<ButtonOne
								onClick={(e) => {
									e.preventDefault();
									addGiftToOrder("tree", 0);
								}}
							>
								Yes, add a Gift Tree Contribution for $1 to my Order
							</ButtonOne>
							<ButtonTwo
								onClick={(e) => {
									e.preventDefault();
									continueToOrderStatus();
								}}
							>
								No, not right now
							</ButtonTwo>
							<Small>
								100% of your contribution goes towards planting a tree sapling
								through Cauvery Calling
							</Small>
						</Container>
					) : null}
				</>
			);
		case 1:
			return (
				<>
					{show.giftTwo ? (
						<Container>
							<p>Do you want to plant a tree for $1?</p>
							<ButtonOne
								onClick={(e) => {
									e.preventDefault();
									addGiftToOrder("tree", 1);
								}}
							>
								Yes, add a Gift Tree Contribution for $1 to my Order
							</ButtonOne>
							<ButtonTwo
								onClick={(e) => {
									e.preventDefault();
									continueToOrderStatus();
								}}
							>
								No, not right now
							</ButtonTwo>
							<Small>
								100% of your contribution goes towards planting a tree sapling
								through Cauvery Calling an initiative led by the Isha
								Foundation.
							</Small>
						</Container>
					) : null}
				</>
			);
		default:
			return <></>;
	}
}
export default PayItForwardRequestor;
const Container = styled.div`
	margin-top: 4px;
	font-weight: 600;
	color: var(--light-colour-2);
	width: 300px;
	@media (max-width: 600px) {
		width: 80%;
		margin-left: auto;
		margin-right: auto;
	}
`;
const ButtonOne = styled.button`
	width: 100%;
	background-color: var(--link-colour-2);
	border: 1px solid var(--light-colour-3);
	padding: 8px;
	font-weight: 700;
	font-size: 16px;
	color: #fff;
	cursor: pointer;
	margin-top: 8px;
	transition: 0.333s ease;
	border-radius: 4px;
	:hover {
		background-color: var(--dark-colour-1);
	}
`;
const ButtonTwo = styled(ButtonOne)`
	background-color: transparent;
	border: none;
	color: gray;
	:hover {
		color: var(--dark-colour-1);
		background-color: var(--light-colour-3);
	}
`;

const Small = styled.p`
	margin-top: 4px;
	font-size: 14px;
	text-align: center;
`;
