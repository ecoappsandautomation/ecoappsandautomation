import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Image from "next/image";
import {
	addBasketItem,
	removeBasketItem,
	selectBasket,
	updateBasketItem,
} from "../features/basketSlice";
import MenuButton from "./MenuButton";
import MenuQuantity from "./MenuQuantity";
function MenuItem({
	title,
	name,
	id,
	description,
	price,
	rating,
	image,
	options,
	availability,
}) {
	const [counter, setCounter] = useState(0);
	const [updateButton, setUpdateButton] = useState(false);
	const dispatch = useDispatch();
	const basket = useSelector(selectBasket);

	const [productPrice, setProductPrice] = useState(0);
	let product = {
		name: name,
		id: id,
		description: description,
		price: parseInt(productPrice),
		rating: rating,
		image: image,
		quantity: counter,
		availability: availability,
	};
	useEffect(() => {
		setProductPrice(price);
	}, [price]);
	console.log("MENU PRODUCT >>> ", product);
	// Here we set the counter of the individual item to the quantity found in redux cart
	// Might need to update this to db quantity value.
	let index = basket.findIndex((basketItem) => basketItem.id === id);
	useEffect(() => {
		if (index >= 0) {
			setCounter(basket[index].quantity);
			setUpdateButton(true);
		} else {
			setUpdateButton(false);
		}
	}, [basket]);

	const handleBasketUpdate = () => {
		if (counter > 0) {
			console.log(`FOUND THIS INDEX >>> ${index}`);
			if (index >= 0) {
				dispatch(
					updateBasketItem({
						id: id,
						quantity: counter,
					})
				);
			} else {
				dispatch(addBasketItem(product));
			}
		}
	};

	const handleDelete = () => {
		let index = basket.findIndex((basketItem) => basketItem?.id === id);
		console.log(`FOUND THIS INDEX >>> ${index}`);
		if (index >= 0) {
			dispatch(removeBasketItem(product));
		}
	};
	return (
		<Container>
			<ImgContainer>
				<Image
					src={
						image
							? image
							: "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
					}
				/>
			</ImgContainer>
			<ItemContent>
				<div>
					<div>
						<ItemTitle>
							<p>{title ? title : name}</p>
							<Price>{productPrice}</Price>
						</ItemTitle>
						<Description>{description && description}</Description>
					</div>
				</div>
				{options && (
					<OptionsSelect
						value={productPrice}
						onChange={(e) => setProductPrice(e.target.value)}
					>
						{options.map(({ value, price }) => (
							<option key={value} value={price}>
								{value}
							</option>
						))}
					</OptionsSelect>
				)}
				<Divider />

				{availability ? (
					<MenuQuantity
						counter={counter}
						setCounter={setCounter}
						availability={availability}
					/>
				) : (
					<MenuQuantity
						counter={counter}
						setCounter={setCounter}
						availability={availability}
					/>
				)}

				<Divider />
				{availability ? (
					<MenuButton
						counter={counter}
						basket={basket}
						handleBasketUpdate={handleBasketUpdate}
						updateButton={updateButton}
						handleDelete={handleDelete}
						index={index}
						disabledText='Add to Order'
					/>
				) : (
					<MenuButton
						counter={counter}
						basket={basket}
						handleBasketUpdate={handleBasketUpdate}
						updateButton={updateButton}
						index={index}
						handleDelete={handleDelete}
						disabledText='Item unavailable'
					/>
				)}
			</ItemContent>
		</Container>
	);
}
export default MenuItem;
const Container = styled.div`
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	transition: 0.222s ease;
	border-radius: 4px;
	border: none;
	width: 11vw;
	height: fit-content;
	margin-bottom: 16px;
	margin-right: 16px;
	background: var(--bg-colour-2);
	border: 1px solid var(--light-colour-3);
	:hover {
		box-shadow: 0px 0px 8px rgb(0, 0, 0, 0.2);
	}
	@media (max-width: 1208px) {
		width: 22vw;
		margin-right: 0;
	}
	@media (max-width: 768px) {
		width: 33vw;
		margin-right: 0;
	}
	@media (max-width: 600px) {
		width: 43vw;
		margin-right: 0;
	}
`;
const ItemContent = styled.div`
	margin: 0px 16px;
`;
const Price = styled.p`
	font-weight: 500;
	font-size: 17px;
`;
const Description = styled.pre`
	font-size: 14px;
	color: var(--light-colour-2);
	white-space: pre-line;
	margin-bottom: 12px;
	font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
		Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;
const ImgContainer = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
	> img {
		border-radius: 4px 4px 0 0;
		height: 92px;
		width: 100%;
		display: flex;
		justify-content: center;
		object-fit: cover;
	}
`;
const ItemTitle = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 8px 0px;
	align-items: center;
	> p:nth-child(1) {
		font-size: 18px;
		font-weight: 500;
	}
	> p:nth-child(2) {
		font-size: 14px;
	}
`;
const OptionsSelect = styled.select`
	width: 100%;
	padding: 6px 4px;
	border: none;
	margin-bottom: 8px;
	border-radius: 4px;
	color: #fff;
	font-weight: 500;
	font-size: 16px;
	background: var(--link-colour-1);
	transition: 0.333s ease;
	:hover {
		background: var(--light-colour-2);
	}
`;

const Divider = styled.hr`
	border: 1px solid var(--light-colour-2);
	margin: 4px;
`;
