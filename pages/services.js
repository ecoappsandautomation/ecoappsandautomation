import React from "react";
import styled from "styled-components";

import ServiceBox from "../components/ServiceBox";
import getServices from "../utils/getServices";

function services(props) {
	const services = getServices();
	return (
		<Container>
			{services.map((service) => (
				<ServiceBox
					key={service?.id}
					title={service.title}
					activityScope={service.activityScope}
					price={service.price}
					billingFrequency={service.billingFrequency}
					url={service.url}
				/>
			))}
		</Container>
	);
}
export default services;
const Container = styled.div`
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
