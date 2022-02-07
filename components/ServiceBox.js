import React, { useState } from "react";
import styled from "styled-components";
import { ImCheckmark } from "react-icons/im";
import { useRouter } from "next/router";
import { Button } from "@material-ui/core";
import { motion, AnimateSharedLayout } from "framer-motion";
import { stagger, fadeIn, fadeInLeft } from "../utils/animations";
function ServiceBox({
	title,
	activityScope,
	price,
	billingFrequency,
	url,
	callType,
}) {
	const router = useRouter();

	const handleClick = (url) => {
		router.push(url);
	};
	function commaSeparateNumber(val) {
		while (/(\d+)(\d{3})/.test(val.toString())) {
			val = val.toString().replace(/(\d+)(\d{3})/, "$1" + "," + "$2");
		}
		return val;
	}
	const shortActivityScope = activityScope.slice(0, 1);
	const [showMore, setShowMore] = useState(false);
	return (
		<AnimateSharedLayout>
			<Container>
				<Title>{title}</Title>
				<List key='serviceFeaturesAndBenefits'>
					{!showMore
						? shortActivityScope.map((item) => (
								<BulletPoint key={item}>
									<Bullet />
									<p>{item}</p>
								</BulletPoint>
						  ))
						: activityScope.map((item) => (
								<BulletPoint key={item} variants={fadeIn}>
									<Bullet />
									<p>{item}</p>
								</BulletPoint>
						  ))}
					<DisplayToggleContainer>
						{!showMore ? (
							<DisplayToggle onClick={() => setShowMore(true)}>
								+{activityScope.length - 1} more
							</DisplayToggle>
						) : (
							<DisplayToggle onClick={() => setShowMore(false)}>
								show less
							</DisplayToggle>
						)}
					</DisplayToggleContainer>
				</List>

				<CTAButton
					onClick={() => {
						handleClick(url);
					}}
					variants={fadeInLeft}
				>
					Book a free {callType} call
				</CTAButton>
			</Container>
		</AnimateSharedLayout>
	);
}
export default ServiceBox;
const Container = styled(motion.div)`
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
const Title = styled.h2`
	text-align: center;
	padding: 8px;
`;
const List = styled(motion.ul)`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
const BulletPoint = styled(motion.div)`
	display: flex;
	width: 100%;
	align-items: center;
	justify-content: flex-start;
	padding: 4px;
	margin-right: 40px;
`;
const Bullet = styled(ImCheckmark)`
	margin-right: 8px;
	width: 50px;
	font-size: 21px;
`;
const CTAButton = styled(motion.button)`
	width: 100%;
	color: #fff !important;
	background: var(--dark-colour-1) !important;
	margin-top: 16px !important;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 16px;
	text-align: center;
	justify-content: center;
	border-radius: 8px;
	border: none;
	font-size: 21px;
	letter-spacing: 1.1px;
	cursor: pointer;
	transition: 0.333s ease;
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

const DisplayToggle = styled(motion.p)`
	text-align: right;
	color: var(--link-colour-1);
	transition: 0.333s ease;
	cursor: pointer;
	font-weight: 555;
	:hover {
		color: var(--light-colour-2);
	}
`;

const DisplayToggleContainer = styled(motion.div)`
	display: flex;
	width: 100%;
	margin: 8px 0;
	justify-content: flex-end;
`;
