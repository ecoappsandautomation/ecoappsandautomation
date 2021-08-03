import React, { useState } from "react";
import styled from "styled-components";
const createNewDate = (now, hr) => {
	return new Date(
		now.getFullYear(),
		now.getMonth(),
		now.getDate(),
		hr,
		0,
		0,
		0
	);
};
function DeliveryEstimate({ nextAvailableSlot }) {
	const [deliveryTime, setDeliveryTime] = useState("9pm Tomorrow");
	// Here we get the next closest available appointment time and display the earliest delivery
	// time
	return <Container>Expect your order delivered by {deliveryTime}</Container>;
}
export default DeliveryEstimate;
const Container = styled.div``;
