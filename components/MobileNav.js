import React from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import getUrls from "../utils/getUrls";
import { motion, AnimateSharedLayout } from "framer-motion";
import { fadeIn, fastStagger } from "../utils/animations";
function MobileNav({ setShowNav, showNav }) {
	const router = useRouter();
	const visitUrl = (url) => {
		router.push(url);
		setShowNav(!showNav);
	};
	const urls = getUrls("mobileUrls");

	return (
		<AnimateSharedLayout>
			<Container variants={fastStagger} animate='animate' initial='initial'>
				{urls.map(({ name, url }) => (
					<>
						{router.pathname === url ? (
							<ActiveLink key={name} variants={fadeIn}>
								{name}
							</ActiveLink>
						) : (
							<Link
								onClick={() => {
									visitUrl(url);
								}}
								key={name}
								variants={fadeIn}
							>
								{name}
							</Link>
						)}
					</>
				))}
			</Container>
		</AnimateSharedLayout>
	);
}
export default MobileNav;
const Container = styled(motion.div)`
	display: flex;
	font-size: 21px;
	margin-right: auto;
	margin-left: auto;
	flex-direction: column;
	align-items: center;
	font-weight: 500;
	width: 100%;
`;

const Link = styled(motion.p)`
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
	color: var(--light-colour-2) !important;
	:hover {
		opacity: 100 !important;
		cursor: default !important;
	}
`;
