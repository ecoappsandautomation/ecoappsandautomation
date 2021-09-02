import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Nav from "./Nav";
import LocationDropdown from "./LocationDropdown";
import MobileNav from "./MobileNav";
import { useRouter } from "next/router";
import Media from "react-media";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdEmail } from "react-icons/md";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { selectCurrentLocation } from "../features/appSlice";
import getLocation from "../utils/getLocation";
import { useSelector } from "react-redux";
import PhoneIcon from "@material-ui/icons/Phone";
import { selectBasket } from "../features/basketSlice";
import { FaShoppingBag } from "react-icons/fa";
import EmailIcon from "@material-ui/icons/Email";
function Header(props) {
	const [hideHeader, setHideHeader] = useState(false);
	const [showNav, setShowNav] = useState(false);
	const [open, setOpen] = React.useState(false);
	const [locationDetails, setLocationDetails] = useState(null);
	const router = useRouter();
	const basket = useSelector(selectBasket);
	const visitUrl = (url) => {
		router.push(url);
	};
	const location = useSelector(selectCurrentLocation);
	const anchorRef = React.useRef(null);
	const handleToggle = () => {
		setOpen((prevOpen) => !prevOpen);
	};
	useEffect(() => {
		setLocationDetails(getLocation(location));
	}, [location, getLocation]);
	useEffect(() => {
		if (router.pathname === "/coding4cauvery") {
			setHideHeader(true);
		} else {
			setHideHeader(false);
		}
	}, []);
	return (
		<Media query='(min-width: 768px)'>
			{(matches) => {
				return matches ? (
					<>
						<TopBar>
							<TopContent>
								<Phone>
									<PhoneNumber>
										<PhoneIcon />
										<a href={`tel:${locationDetails?.phone}`}>
											{locationDetails?.phone}
										</a>
									</PhoneNumber>
									<Email>
										<EmailIcon />
										<a href={`mailto:support@ecoappsandautomation.com`}>
											support@ecoappsandautomation.com
										</a>
									</Email>
								</Phone>
								<Location
								// onClick={() => {
								// 	handleToggle();
								// }}
								>
									<LocationOnIcon />
									<span ref={anchorRef}>{location}</span>
									{locationDetails?.length >= 2 ? <ExpandMoreIcon /> : null}
									{/* <LocationDropdown
										open={open}
										setOpen={setOpen}
										anchorRef={anchorRef}
									/> */}
								</Location>
							</TopContent>
						</TopBar>
						{hideHeader ? null : (
							<Container>
								{true ? (
									<LogoImg
										src={`https://i.postimg.cc/0NjQHytC/logo-august-20-2020-icon-left-side-square-800x186.png`}
										onClick={() => {
											visitUrl(`/`);
										}}
									/>
								) : (
									<h1
										onClick={() => {
											visitUrl(`/`);
										}}
									>
										{`Eco Apps and Automation`}
									</h1>
								)}

								<Nav />

								<HeaderRight>
									<BasketContainer
										onClick={() => {
											visitUrl(`/checkout`);
										}}
									>
										{/* <CartIcon />
									<BasketItemCount>{basket?.length}</BasketItemCount> */}
									</BasketContainer>
								</HeaderRight>
							</Container>
						)}
					</>
				) : (
					<>
						<TopBar>
							<TopContent>
								<Phone>
									<PhoneNumber>
										<PhoneIcon />
										<a href={`tel:${locationDetails?.phone}`}>
											{locationDetails?.phone}
										</a>
									</PhoneNumber>
									<Email>
										<EmailIcon />
										<a href={`mailto:${details?.email}`}>{details?.email}</a>
									</Email>
								</Phone>
								<Location
									onClick={() => {
										handleToggle();
									}}
								>
									<LocationOnIcon />
									<span ref={anchorRef}>{location}</span>
								</Location>
							</TopContent>
						</TopBar>
						{hideHeader ? null : (
							<Container>
								{details.logoUrl ? (
									<MobileLogoImg
										src={details.logoUrl}
										onClick={() => {
											visitUrl(`/`);
										}}
									/>
								) : (
									<h1
										onClick={() => {
											visitUrl(`/`);
										}}
									>
										{details.title}
									</h1>
								)}

								<Deliver
									onClick={() => {
										visitUrl("/services");
									}}
								>
									Hire Us
								</Deliver>
								<HamburgerMenu onClick={() => setShowNav(!showNav)} />
							</Container>
						)}
						{showNav ? (
							<MobileLinks>
								<MobileNav />
							</MobileLinks>
						) : null}
					</>
				);
			}}
		</Media>
	);
}
export default Header;
const Container = styled.div`
	display: flex;
	justify-content: space-between;
	@media (max-width: 768px) {
		padding: 16px;
	}
	align-items: center;
	border-bottom: 1px solid var(--light-colour-3);
	position: sticky;
	top: 2.1rem;
	padding: 16px 24px;
	transition: 0.333s ease;
	background-color: var(--header-colour-1);
	z-index: 1000;
	> h1 {
		cursor: pointer !important;
	}
`;
const Deliver = styled.p`
	border: 2px solid var(--link-colour-1);
	padding: 4px 8px 8px 8px;
	margin-top: 4px;
	transition: 0.333s ease;
	border-radius: 4px;
	font-weight: 600;
	color: var(--header-colour-1) !important;
	background-color: var(--link-colour-1);
	:hover {
		background-color: var(--light-colour-2);
		border: 2px solid var(--light-colour-1);

		opacity: 100% !important;
	}
`;

const MobileLinks = styled.div`
	padding: 16px 0px 0px;
	background-color: var(--header-colour-2);
	position: sticky !important;
	top: 6.8rem !important;
	z-index: 999;
	width: 100%;
`;

const HamburgerMenu = styled(GiHamburgerMenu)`
	font-size: x-large;
`;

const TopBar = styled.div`
	background-color: var(--header-colour-2);
	z-index: 1008;
	position: sticky;
	top: 0;
	color: white;
	width: 100%;
	padding: 2px 0 4px;
`;
const TopContent = styled.div`
	width: 70vw;
	margin-left: auto;
	display: flex;
	margin-right: auto;
	@media (max-width: 768px) {
		flex-direction: column;
		display: flex;
		justify-items: space-evenly;
		width: 100vw;
		padding: 0 16px;
	}
`;
const LogoImg = styled.img`
	max-height: 64px;
`;
const MobileLogoImg = styled.img`
	max-height: 56px;
`;
const Location = styled.div`
	display: flex;
	align-items: center;
	z-index: 1111;
	flex: 1;
	cursor: default !important;
	color: var(--dark-colour-1);
	transition: 0.333s ease;
	:hover {
		color: var(--link-colour-2);
	}
	font-weight: 500;
	@media (min-width: 768px) {
		justify-content: flex-end;
	}
	@media (max-width: 768px) {
		font-size: 14px;
		margin-top: 8px;
	}
	> .MuiSvgIcon-root:nth-child(3) {
		margin-top: 4px;
		@media (max-width: 768px) {
			font-size: 24px;
		}
	}
`;
const Phone = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	color: var(--dark-colour-1);

	font-weight: 500;
	> a {
		margin-left: 4px;

		@media (max-width: 768px) {
			font-size: 14px;
		}
	}
	> .MuiSvgIcon-root {
		margin-top: 4px;
		@media (max-width: 768px) {
			font-size: 24px;
		}
	}
`;
const PhoneNumber = styled.div`
	margin-right: 32px;
	display: flex;
	transition: 0.333s ease;
	align-items: center;
	:hover {
		color: var(--link-colour-2);
	}
	> .MuiSvgIcon-root {
		margin-top: 4px;
		margin-right: 4px;
	}
`;
const Email = styled.div`
	display: flex;
	transition: 0.333s ease;
	align-items: center;
	:hover {
		color: var(--link-colour-2);
	}
	> .MuiSvgIcon-root {
		margin-top: 4px;
		margin-right: 4px;
	}
`;
const HeaderRight = styled.div`
	display: flex;
	align-items: center;
	flex: 0.11;
	& .MuiSvgIcon-root {
		font-size: xx-large;
	}
`;
const BasketContainer = styled.div`
	cursor: pointer !important;
	display: flex;
	align-items: center;
	color: var(--link-colour-1);
	transition: 0.333s ease;
	:hover {
		color: var(--light-colour-2);
	}
`;
const MobileBasketContainer = styled(BasketContainer)`
	color: var(--dark-colour-1);
	flex: 1;
	justify-content: center;
	:hover {
		color: var(--link-colour-2);
	}
`;
const BasketItemCount = styled.p`
	margin-left: 4px;
	font-weight: 500;
	font-size: large;
	margin-right: 16px;
`;
const CartIcon = styled(FaShoppingBag)`
	font-size: x-large;
`;
