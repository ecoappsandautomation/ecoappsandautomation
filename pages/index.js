import styled from "styled-components";

import VisibilityListener from "../components/VisibilityListener";
import getDetails from "../utils/getdetails";

import LocationSection from "../components/LocationSection";
import ServicesSection from "../components/ServicesSection";
export default function Home() {
	const site_details = getDetails();
	return (
		<Container>
			<VisibilityListener
				defaultTitle={`Home | ${site_details?.browser_title}'`}
			/>
			<Img alt='' src={`${site_details?.banner_url}`} />
			<TopHr />
			{/* <LocationSection /> */}
			<ServicesSection />
		</Container>
	);
}
const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 70vw;
	margin-left: auto;
	margin-right: auto;
	@media (max-width: 1208px) {
		margin-top: 24px;
	}
`;
const Img = styled.img`
	height: 50vh;
	object-fit: cover;
	margin-top: 32px;
`;

const LocationContainer = styled.div``;

const TopHr = styled.hr`
	margin-top: 32px;
	border: 1px solid var(--light-colour-3);
`;
