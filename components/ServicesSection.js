import React from "react";
import styled from "styled-components";
import { CgWebsite } from "react-icons/cg";
import { BiSupport } from "react-icons/bi";
import { RiPlantLine } from "react-icons/ri";
import { useRouter } from "next/router";
function ServicesSection(props) {
	const router = useRouter();
	const visitUrl = (url) => {
		router.push(url);
	};
	return (
		<Container>
			<h1>Check out our services</h1>
			<BoxContainer>
				<Box
					onClick={() => {
						visitUrl("/services");
					}}
				>
					<MgmtIcon /> Project Management
				</Box>
				<Box
					onClick={() => {
						visitUrl("/services");
					}}
				>
					<WebIcon /> Web Development
				</Box>
				{/* <Box>
					<SupportIcon />
					IT Support
				</Box> */}
			</BoxContainer>
		</Container>
	);
}
export default ServicesSection;
const Container = styled.div`
	@media (min-width: 1208px) {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 24px 0px;
	}
	@media (max-width: 1208px) {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 16px 0px;
	}
`;
const BoxContainer = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-evenly;
	margin-top: 32px;
	@media (min-width: 1208px) {
		margin-right: 64px;
	}
	@media (max-width: 1208px) {
		display: flex;
		flex-direction: column;
		margin: 16px 0px;
	}
`;

const Box = styled.div`
	padding: 24px;
	border: 1px solid var(--dark-colour-1);
	border-radius: 8px;
	cursor: pointer;
	transition: 0.333s ease;
	display: flex;
	align-items: center;
	font-size: 21px;
	@media (max-width: 1208px) {
		margin: 8px 0px;
	}
	:hover {
		background: var(--link-colour-2);
		color: #fff;
	}
`;

const WebIcon = styled(CgWebsite)`
	margin-top: 4px;
	margin-right: 8px;
`;

const SupportIcon = styled(BiSupport)`
	margin-top: 4px;
	margin-right: 8px;
`;

const MgmtIcon = styled(RiPlantLine)`
	margin-top: 4px;
	margin-right: 8px;
`;
