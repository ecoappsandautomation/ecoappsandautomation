import React from "react";
import styled from "styled-components";

import ServiceBox from "../components/ServiceBox";
import getServices from "../utils/getServices";

import { motion, AnimateSharedLayout } from "framer-motion";
import { stagger, fadeInLeft } from "../utils/animations";
function services(props) {
	const services = getServices();
	return (
		<Container variants={stagger} animate='animate' initial='initial' layout>
			<AnimateSharedLayout>
				{services &&
					services.map((service) => (
						<ServiceBox
							key={service?.id}
							variants={fadeInLeft}
							title={service.title}
							activityScope={service.activityScope}
							price={service.price}
							billingFrequency={service.billingFrequency}
							url={service.url}
							callType={service.callType}
						/>
					))}
			</AnimateSharedLayout>
		</Container>
	);
}
export default services;
const Container = styled(motion.div)`
	display: flex;
	@media (min-width: 1208px) {
		width: 80vw;
	}
	@media (max-width: 600px) {
		width: 90vw;
	}
	width: 90vw;
	margin-left: auto;
	margin-right: auto;
	flex-wrap: wrap;
	justify-content: center;
`;
