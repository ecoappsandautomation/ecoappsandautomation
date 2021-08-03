import React from "react";
import styled from "styled-components";
import { HiLocationMarker } from "react-icons/hi";
import { AiOutlineFieldTime } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import Schedule from "./Schedule";
import {
	selectCurrentLocation,
	setCurrentLocation,
} from "../features/appSlice";
import Address from "./Address";
function LocationSection(props) {
	const location = useSelector(selectCurrentLocation);
	const dispatch = useDispatch();
	return (
		<Container>
			<Map>
				<MapTitle>
					<LocationMarker />
					<MapTitleDetails>
						<SelectedLocation>Location: </SelectedLocation>
						{location}
					</MapTitleDetails>
				</MapTitle>

				<Iframe
					src={
						location === "Edmonton"
							? "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9488.828869274039!2d-113.44218!3d53.518356!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xdfafac7ff22ce0ef!2sThe%20Soban%20Restaurant!5e0!3m2!1sen!2sca!4v1623661212943!5m2!1sen!2sca"
							: location === "Whitecourt"
							? "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4674.506305876096!2d-115.69084637987929!3d54.14016201439928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x539ed352d11e0451%3A0xd1c7379065cfff96!2sSoban%20Korean%20Japanese%20Cuisine!5e0!3m2!1sen!2sca!4v1623713102732!5m2!1sen!2sca"
							: null
					}
					allowfullscreen=''
					loading='lazy'
				></Iframe>
			</Map>
			<LocationAndHours>
				<LocationAndHoursTitle>
					<TimeIcon />
					<LocationAndHoursTitleDetails>
						<LAHTDTop>Location &</LAHTDTop> Hours
					</LocationAndHoursTitleDetails>
				</LocationAndHoursTitle>
				{location === "Edmonton" ? (
					<ActiveDetails
						onClick={() => dispatch(setCurrentLocation("Edmonton"))}
					>
						<DetailsLeft>
							<Address location={"Edmonton"} />
						</DetailsLeft>
						<DetailsRight>
							<Schedule location={location} />
						</DetailsRight>
					</ActiveDetails>
				) : (
					<Details onClick={() => dispatch(setCurrentLocation("Edmonton"))}>
						<DetailsLeft>
							<Address location={"Edmonton"} />
						</DetailsLeft>
						<DetailsRight>
							<Schedule
								monday={"Closed"}
								tuesday={"3:30 – 8:00p.m."}
								wednesday={"3:30 – 8:00p.m."}
								thursday={"3:30 – 8:00p.m."}
								friday={"3:30 – 8:30p.m."}
								saturday={"3:30 – 8:30p.m."}
								sunday={"4:00 – 8:00p.m."}
							/>
						</DetailsRight>
					</Details>
				)}
			</LocationAndHours>
		</Container>
	);
}
export default LocationSection;
const Container = styled.div`
	@media (min-width: 1208px) {
		display: flex;
		justify-content: space-evenly;
		margin: 24px 0px;
	}
	@media (max-width: 1208px) {
		display: flex;
		flex-direction: column-reverse;
		margin: 16px 0px;
	}
`;
const DetailsRight = styled.div`
	display: flex;
	flex-direction: column;
	@media (min-width: 1208px) {
		margin-left: 32px;
	}
	@media (max-width: 1208px) {
		margin-top: 16px;
	}
`;
const DetailsLeft = styled.div`
	> h3 {
		font-weight: 500;
	}
`;
const Details = styled.div`
	@media (min-width: 1208px) {
		display: flex;
	}
	margin-bottom: 32px;
	cursor: pointer !important;
	border: none;
	padding: 24px;
	border-radius: 8px;
	transition: 0.333s ease;
	opacity: 50%;
	:hover {
		opacity: 100%;
		box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.208);
	}
`;
const ActiveDetails = styled(Details)`
	opacity: 100%;
	background: var(--bg-colour-2);
	border: 1px solid var(--light-colour-3);
`;
const LocationAndHours = styled.div`
	> h2 {
		@media (max-width: 1208px) {
			margin-top: 16px;
		}
		margin-bottom: 16px;
	}
`;

const LocationAndHoursTitle = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 8px;
`;
const TimeIcon = styled(AiOutlineFieldTime)`
	margin-right: 4px;
	font-size: 24px;
	color: var(--light-colour-2);
`;
const LocationAndHoursTitleDetails = styled.h2`
	display: flex;
	flex-direction: column;
	font-size: 16px;
	color: var(--light-colour-2);
`;
const LAHTDTop = styled.span`
	margin-bottom: -4px;
`;
const SelectedLocation = styled.span`
	font-size: 12px;
	color: var(--light-colour-2);
	font-weight: 400;
	margin-bottom: -2px;
`;
const LocationMarker = styled(HiLocationMarker)`
	font-size: 24px;
	color: var(--light-colour-2);
	margin-right: 4px;
`;
const Map = styled.div``;
const MapTitle = styled.p`
	font-size: 18px;
	font-weight: 500;
	color: #4d4d4d;
	margin-bottom: 8px;
	display: flex;
	align-items: center;
`;
const MapTitleDetails = styled.div`
	display: flex;
	flex-direction: column;
	color: var(--light-colour-2);
`;
const MapSubtitle = styled(MapTitle)`
	font-size: 14px;
	color: #808080;
	margin-bottom: 8px;
`;
const Iframe = styled.iframe`
	@media (min-width: 1208px) {
		width: 30vw;
	}
	width: 70vw;
	height: 400px;
	border: 1px solid whitesmoke;
	border-radius: 8px;
`;
