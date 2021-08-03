import React, { useState } from "react";
import styled from "styled-components";
function OrderType({ setOrderType }) {
	const [input, setInput] = useState("");

	function check(name) {
		let inputs = document.getElementById(`${name}`);
		if (inputs.checked) {
			inputs.checked = false;
			setOrderType("");
		} else {
			inputs.checked = true;
			if (name === "delivery") {
				document.getElementById("pickup").checked = false;
			}
			if (name === "pickup") {
				document.getElementById("delivery").checked = false;
			}
			setOrderType(name);
		}
	}
	return (
		<Container>
			<CheckContainer name='delivery' onClick={() => check("delivery")}>
				<input
					type='checkbox'
					name='delivery'
					id='delivery'
					value={input}
					onClick={(e) => check(e.target.name)}
				/>
				<p>Delivery</p>
			</CheckContainer>
			<CheckContainer name='pickup' onClick={() => check("pickup")}>
				<input
					type='checkbox'
					name='pickup'
					id='pickup'
					value={input}
					onChange={(e) => check(e.target.name)}
				/>
				<p>Pickup</p>
			</CheckContainer>
		</Container>
	);
}
export default OrderType;
const Container = styled.div`
	display: flex;
	padding: 16px 0 0;
	justify-content: space-evenly;
	> div {
		display: flex;
		align-items: center;
		> input {
			margin-right: 8px;
		}
	}
`;

const CheckContainer = styled.div`
	cursor: pointer !important;
	> input {
		cursor: pointer !important;
	}
`;
