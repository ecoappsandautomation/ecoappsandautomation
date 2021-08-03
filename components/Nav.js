import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import getUrls from "../utils/getUrls";
function Nav(props) {
	const router = useRouter();
	const visitUrl = (url) => {
		router.push(url);
	};
	const urls = getUrls();
	return (
		<Container>
			{urls.map(({ name, url }) => (
				<>
					{router.pathname === url ? (
						<ActiveLink>{name}</ActiveLink>
					) : (
						<Link
							onClick={() => {
								visitUrl(url);
							}}
						>
							{name}
						</Link>
					)}
				</>
			))}

			<CallToAction
				onClick={() => {
					visitUrl("/services");
				}}
			>
				Hire Us
			</CallToAction>
		</Container>
	);
}
export default Nav;
const Container = styled.div`
	display: flex;
	font-size: 21px;
	margin-right: auto;
	margin-left: auto;
	@media (max-width: 1440px) {
		width: 40vw;
	}
	@media (max-width: 1024px) {
		width: 50vw;
	}
	width: 30vw;
	justify-content: space-evenly;
	align-items: center;
	font-weight: 500;
`;
const Link = styled.p`
	cursor: pointer !important;
	transition: 0.333s ease;
	color: var(--link-colour-1);
	:hover {
		opacity: 50%;
	}
	@media (max-width: 600px) {
		margin-right: 8px;
	}
`;

const CallToAction = styled.p`
	border: 2px solid var(--link-colour-1);
	padding: 4px 20px 8px 20px;
	margin-top: 4px;
	transition: 0.333s ease;
	border-radius: 4px;
	font-weight: 600;
	color: var(--header-colour-1) !important;
	background-color: var(--link-colour-1);
	cursor: pointer !important;
	:hover {
		border: 2px solid var(--light-colour-1);
		background-color: var(--light-colour-2);
		color: red;
		opacity: 100% !important;
	}
`;

const ActiveLink = styled.p`
	color: var(--dark-colour-1) !important;
	:hover {
		opacity: 100 !important;
		cursor: default !important;
	}
`;
