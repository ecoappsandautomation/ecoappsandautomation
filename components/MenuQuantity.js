import React, { useEffect } from "react";
import styled from "styled-components";
function MenuQuantity({ counter, setCounter, availability }) {
	useEffect(() => {
		if (isNaN(counter)) {
			counter = 0;
		}
	}, [counter]);
	return (
		<Container>
			{counter <= 0 ? (
				<DisabledQuantityButton
					onClick={() => {
						if (counter !== 0) {
							setCounter(counter - 1);
						}
					}}
				>
					-
				</DisabledQuantityButton>
			) : (
				<QuantityButton
					onClick={() => {
						if (counter > 0) {
							setCounter(counter - 1);
						}
					}}
				>
					-
				</QuantityButton>
			)}
			{availability ? (
				<QuantityInput
					value={counter}
					onInput={(e) => setCounter(parseInt(e.target.value))}
					placeholder={counter}
				/>
			) : (
				<p>{counter}</p>
			)}
			{availability ? (
				<QuantityButton
					onClick={() => {
						setCounter(counter + 1);
					}}
				>
					+
				</QuantityButton>
			) : (
				<DisabledQuantityButton>+</DisabledQuantityButton>
			)}
		</Container>
	);
}
export default MenuQuantity;
const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	> p {
		font-size: 16px;
		color: var(--link-colour-2);
		margin: 8px;
		font-family: roboto;
	}
`;
const QuantityButton = styled.button`
	background-color: var(--link-colour-1);
	border-radius: 50%;
	height: 25px;
	width: 25px;
	border: none;
	cursor: pointer !important;
	color: white;
	font-size: 21px;
	transition: 0.333s ease;
	:hover {
		background-color: var(--light-colour-2);
	}
`;
const DisabledQuantityButton = styled(QuantityButton)`
	background: var(--light-colour-3);
	:hover {
		background: var(--light-colour-3);
	}
`;
const QuantityInput = styled.input`
	background: transparent;
	border: none;
	width: 25%;
	text-align: center;
	font-size: 16px;
	font-weight: 400;
	color: var(--link-colour-2);
	outline: none;
	font-family: roboto;
	margin: 8px;
`;
