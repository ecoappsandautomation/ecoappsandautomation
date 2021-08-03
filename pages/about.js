import React from "react";
import VisibilityListener from "../components/VisibilityListener";
import styled from "styled-components";
import getDetails from "../utils/getDetails";
function about(props) {
	const details = getDetails();
	return (
		<Container>
			<VisibilityListener defaultTitle={`About | ${details.browser_title}`} />
			<h2>{details.title}'s Story Coming Soon...</h2>
		</Container>
	);
}
export default about;
const Container = styled.div`
	width: 50vw;
	margin-left: auto;
	margin-right: auto;
	margin-top: 32px;
	> h2 {
		text-align: center;
		font-weight: 500;
	}
`;
