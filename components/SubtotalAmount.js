import React from "react";
import styled from "styled-components";
function SubtotalAmount({ basket, total }) {
	return (
		<Container>
			<p>
				Subtotal ({basket.length} {basket.length === 1 ? "item" : "items"}
				): <strong>${`${total.toFixed(2)}`}</strong>
			</p>
		</Container>
	);
}
export default SubtotalAmount;
const Container = styled.div``;
