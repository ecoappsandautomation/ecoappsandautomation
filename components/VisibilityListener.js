import React, { useEffect, useState } from "react";
import Head from "next/head";
import styled from "styled-components";
function VisibilityListener({
	defaultTitle,
	awayTitleOne = "🥺 do you still want food? 🥺",
	awayTitleTwo = `We're ready when you are :)`,
	timeout = 2300,
	interval = 2500,
}) {
	const [title, setTitle] = useState(defaultTitle);
	function docListener() {
		if (document.hasFocus() === false && awayTitleOne) {
			setTitle(awayTitleOne);

			if (awayTitleTwo) {
				setTimeout(() => {
					setTitle(awayTitleTwo);
				}, timeout);
			}
		}
		if (document.hasFocus() === true) {
			setTitle(defaultTitle);
		}
	}
	useEffect(() => {
		const i = setInterval(() => {
			docListener();
		}, interval);
		return () => clearInterval(i);
	}, [setTitle, docListener]);
	return (
		<Container>
			<Head>
				<title>{title}</title>
			</Head>
		</Container>
	);
}
export default VisibilityListener;
const Container = styled.div``;
