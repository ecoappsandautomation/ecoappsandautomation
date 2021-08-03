import React from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import getUrls from "../utils/getUrls";
function MobileNav(props) {
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
		</Container>
	);
}
export default MobileNav;
const Container = styled.div`
	display: flex;
	font-size: 21px;
	margin-right: auto;
	margin-left: auto;
	flex-direction: column;
	align-items: center;
	font-weight: 500;
	width: 100%;
`;

const Link = styled.p`
	cursor: pointer !important;
	transition: 0.333s ease;
	color: var(--main-link-color);
	border-bottom: 1px solid whitesmoke;
	margin-bottom: 8px;
	padding-bottom: 8px;
	width: 100%;
	text-align: center;
	:hover {
		opacity: 50%;
	}
`;
const ActiveLink = styled(Link)`
	color: var(--dark-color) !important;
	:hover {
		opacity: 100 !important;
		cursor: default !important;
	}
`;
