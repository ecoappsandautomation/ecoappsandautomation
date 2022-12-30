import React from "react";
import styled from "styled-components";
import getMenu from "../utils/getMenu";
function MenuNav({ section, setSection }) {
	const menu = getMenu();
	return (
		<Container>
			{menu.nav.map((item) => {
				let currentItemIndex = menu.nav.indexOf(item);
				if (section === currentItemIndex) {
					return <ActiveItem key={item}>{item}</ActiveItem>;
				} else {
					return (
						<p key={item} onClick={() => setSection(currentItemIndex)}>
							{item}
						</p>
					);
				}
			})}
		</Container>
	);
}
export default MenuNav;
const Container = styled.div`
	display: flex;
	justify-content: space-evenly;
	margin-bottom: 24px;
	flex-wrap: wrap;
	font-weight: 800;
	font-size: 17px;
	color: var(--link-colour-1);
	> p {
		@media (max-width: 1208px) {
			margin-top: 16px;
			margin-right: 16px;
		}
		cursor: pointer !important;
		transition: 0.333s ease;
		:hover {
			opacity: 50%;
		}
	}
	border-bottom: 2px solid var(--light-colour-3);
	padding-bottom: 24px;
`;

const ActiveItem = styled.p`
	cursor: default !important;
	color: var(--dark-colour-1);
`;
