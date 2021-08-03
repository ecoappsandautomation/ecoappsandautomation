import React from "react";
import styled from "styled-components";
import { HiBadgeCheck } from "react-icons/hi";
import { useRouter } from "next/router";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../firebase";
import { BsFillCircleFill } from "react-icons/bs";
function thankyou(props) {
	// Grab URL Paramater of Session id to grab the order details
	// Add status of order to the page
	// In the future, give user / customer the ability to create an account for offers &
	// billing history
	const { query } = useRouter();
	const [orderSnapshot] = useCollection(
		db.collection("orders").doc(query.session_id)
	);

	const order = orderSnapshot?.data();
	console.log(order);
	return (
		<Container>
			<Body>
				<Box>
					<TitleContainer>
						<Check />
						<h1>Thank you, your order has been sent to the kitchen!</h1>
					</TitleContainer>
					<p>
						Thank you for choosing to eat with us. We'll update the status below
						as your food is prepared and on the way.
					</p>
					<Status>
						<Circle
							style={
								(order && order?.status === "received") ||
								order?.status === "preparing"
									? { color: "orange" }
									: order?.status === "completed"
									? { color: "lightgreen" }
									: order?.status === "ready for pickup" ||
									  order?.status === "ready for delivery"
									? { color: "blue" }
									: {}
							}
						/>
						<p>Status: {order && order.status}</p>
					</Status>
				</Box>
			</Body>
		</Container>
	);
}
export default thankyou;
const Container = styled.div`
	margin-top: 24px;
`;
const Body = styled.div`
	display: flex;
	justify-content: center;
	width: 80vw;
	margin: 0px auto;
`;
const Box = styled.div`
	display: flex;

	flex-direction: column;
	> p {
		@media (max-width: 600px) {
			margin-top: 16px;
		}
	}
`;
const TitleContainer = styled.div`
	display: flex;
	align-items: center;
	> h1 {
		font-size: x-large;
	}
	@media (max-width: 600px) {
		display: flex;
		flex-direction: column;
	}
`;
const Check = styled(HiBadgeCheck)`
	font-size: xx-large;
	margin-right: 16px;
	color: green;
`;

const Status = styled.div`
	display: flex;
	margin-top: 16px;
	flex-direction: row;
	> p {
		margin-left: 8px;
	}
`;

const Circle = styled(BsFillCircleFill)``;
