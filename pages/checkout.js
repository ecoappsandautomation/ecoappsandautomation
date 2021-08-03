import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Item from "../components/MenuItem";
import Subtotal from "../components/Subtotal";
import { selectBasket } from "../features/basketSlice";
import Head from "next/head";
import PayItForwardRequestor from "../components/PayItForwardRequestor";
function checkout(props) {
	const basket = useSelector(selectBasket);
	return (
		<>
			{/* <Head>
				<script
					src={`https://maps.googleapis.com/maps/api/js?key=AIzaSyAaXHaWc3PsYBBCPaUYAwJ1x7tuFiK00Dc&libraries=places`}
				/>
			</Head> */}
			<Container>
				;
				{/* <CheckoutLeftContainer>
					{basket?.length === 0 ? (
						<div>
							<h2>Your order is empty</h2>
						</div>
					) : (
						<div>
							<h2>Your Order</h2>
							<ItemContainer>
								{basket?.map(
									({
										name,
										id,
										description,
										image,
										price,
										rating,
										availability,
									}) => (
										<Item
											id={id}
											name={name}
											description={description}
											image={image}
											price={price}
											rating={rating}
											availability={availability}
										/>
									)
								)}
							</ItemContainer>
						</div>
					)}
				</CheckoutLeftContainer>
				<CheckoutRightContainer>
					<Subtotal />
					<PayItForwardRequestor />
				</CheckoutRightContainer> */}
			</Container>
		</>
	);
}
export default checkout;
const Container = styled.div`
	display: flex;
	padding: 24px;
	max-height: max-content;
	min-height: 80vh;
	justify-content: space-evenly;
	width: 70vw;
	margin: 8px auto;
	border-radius: 8px;
	@media (max-width: 600px) {
		display: flex;
		flex-direction: column-reverse;
		width: 100vw;
	}
`;
const CheckoutLeftContainer = styled.div`
	display: flex;
	justify-content: flex-start;
	> div > h2 {
		font-size: 32px;
		margin-bottom: 16px;
		text-align: left;
		@media (max-width: 600px) {
			margin-top: 16px;
		}
	}
`;
const CheckoutRightContainer = styled.div``;

const ItemContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	width: 50vw;
	@media (max-width: 600px) {
		display: flex;
	}
`;
