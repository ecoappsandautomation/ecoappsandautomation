import React from "react";
import styled from "styled-components";
function MenuButton({
	counter,
	basket,
	handleBasketUpdate,
	updateButton,
	handleDelete,
	disabledText,
	index,
}) {
	return (
		<Container>
			{counter !== 0 && counter !== basket[index]?.quantity && counter > 0 ? (
				<BasketButton onClick={handleBasketUpdate}>
					{updateButton ? "Update Order" : "Add to Order"}
				</BasketButton>
			) : updateButton && counter === 0 ? (
				<BasketButton
					onClick={handleDelete}
					style={{ backgroundColor: "#D12B02" }}
				>
					Delete
				</BasketButton>
			) : (
				<DisabledBasketButton disabled={true}>
					{updateButton ? "Update Order" : `${disabledText}`}
				</DisabledBasketButton>
			)}
		</Container>
	);
}
export default MenuButton;
const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 8px 0px 16px;
`;
const BasketButton = styled.button`
	margin-top: 4px;
	background-color: var(--link-colour-1);
	color: white;
	transition: 0.444s ease;

	font-family: Roboto;
	border: none;
	padding: 12px;
	font-weight: 500;
	font-size: 14px;
	border-radius: 4px;
	cursor: pointer !important;
	text-transform: uppercase;
	width: 100%;
	:hover {
		background-color: var(--light-colour-2);
	}
`;
const DisabledBasketButton = styled(BasketButton)`
	background: var(--light-colour-3);
	cursor: default !important;
	:hover {
		background: var(--light-colour-3);
	}
`;
