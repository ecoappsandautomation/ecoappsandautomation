import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MenuNav from "../components/MenuNav";
import Section from "../components/Section";
import VisibilityListener from "../components/VisibilityListener";
import getItem from "../utils/getItem";
import getMenu from "../utils/getMenu";
import getDetails from "../utils/getDetails";
function menu(props) {
	// const [section, setSection] = useState(0);
	// const [items, setItems] = useState({});
	// const menu = getMenu();
	// const details = getDetails();
	// useEffect(() => {
	// 	menu.nav.map((item) => {
	// 		if (section === menu.nav.indexOf(item)) {
	// 			setItems(getItem(item.toLocaleLowerCase()));
	// 		}
	// 	});
	// }, [section, getItem]);
	return (
		<Body>
			{/* <VisibilityListener defaultTitle={`Menu | ${details.title}`} /> */}
			<Container>
				{/* <MenuNav section={section} setSection={setSection} />
				<Section items={items} section={section} /> */}
			</Container>
		</Body>
	);
}
export default menu;
const Container = styled.div`
	@media (min-width: 1208px) {
		width: 50vw;
	}
	@media (max-width: 600px) {
		width: 90vw;
	}
	width: 70vw;
	margin-left: auto;
	margin-right: auto;
`;

const Body = styled.div`
	padding-top: 24px;
`;
