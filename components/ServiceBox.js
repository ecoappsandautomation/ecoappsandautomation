import React from "react";
import styled from "styled-components";
import { ImCheckmark } from "react-icons/im";
import { useRouter } from "next/router";
import { Button } from "@material-ui/core";
function ServiceBox({ title, activityScope, price, billingFrequency, url }) {
	const router = useRouter();

	const handleClick = (url) => {
		router.push(url);
	};

	return (
		<Container>
			<Title>{title}</Title>
			<List>
				{activityScope.map((item) => (
					<BulletPoint>
						<Bullet />
						<p>{item}</p>
					</BulletPoint>
				))}
			</List>
			<PriceBox>
				<PriceText>Starting at: </PriceText>
				<Price>
					<Amount>${price}</Amount>
					<BillingFrequency> per {billingFrequency}</BillingFrequency>
				</Price>
			</PriceBox>
			<CTAButton
				onClick={() => {
					handleClick(url);
				}}
			>
				Book a Free Consultation
			</CTAButton>
		</Container>
	);
}
export default ServiceBox;
const Container = styled.div`
	width: 20vw;
	border: 1px solid var(--dark-colour-1);
	padding: 16px 16px 24px;
	border-radius: 8px;
	margin: 32px 16px;
	display: flex;
	flex-direction: column;
	transition: 0.444s ease;
	justify-content: space-between;
	:hover {
		background: var(--link-colour-2);
		color: #fff;
	}
	@media (max-width: 1208px) {
		width: 30vw;
	}
	@media (max-width: 600px) {
		width: 70vw;
	}
`;
const Top = styled.div``;
const Title = styled.h2`
	text-align: center;
	padding: 8px;
`;
const List = styled.ul`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
const BulletPoint = styled.div`
	display: flex;
	width: 100%;
	align-items: center;
	padding: 4px;
	margin-right: 40px;
`;
const Bullet = styled(ImCheckmark)`
	margin-right: 8px;
	font-size: 21px;
`;
const CTAButton = styled(Button)`
	width: 100%;
	color: #fff !important;
	background: var(--dark-colour-1) !important;
	margin-top: 16px !important;
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	justify-content: flex-end;
	:hover {
		background: var(--light-colour-2) !important;
	}
`;

const PriceBox = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 16px;
`;
const Amount = styled.p`
	font-size: 18px;
	margin-right: 4px;
	margin-top: 4px;
`;
const Price = styled.div`
	display: flex;
	align-items: center;
	margin-right: 8px;
	width: 100%;
	justify-content: center;
`;
const PriceText = styled.p`
	font-size: 12px;
`;
const BillingFrequency = styled.p`
	font-size: 21px;
	font-weight: 600;
`;
