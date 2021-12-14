import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInLeft, stagger, hover, tap } from "../utils/animations";
import hrefSettings from "../utils/hrefSettings";
import { StyledDivider } from "../styles/styledComponents";
import Image from "next/image";
function projects(props) {
	const url = "https://yogasiddhi.ca";
	const logoUrl =
		"https://i.postimg.cc/v8SN6bWc/Yoga-siddhi-logo-modified-02.png";

	return (
		<Container variants={stagger} initial='initial' animate='animate'>
			<h1>Projects</h1>
			<Link
				href={hrefSettings(
					"eco-apps-projects",
					"referral",
					"project-card",
					url
				)}
				prefetch={false}
			>
				<ProjectCard
					key={url}
					variants={fadeInLeft}
					whileHover={hover}
					whiteTap={tap}
				>
					<Image src={logoUrl} alt='Yoga siddhi logo' />
					<StyledDivider />
					<h2>Yoga Siddhi</h2>
					<Link
						href={hrefSettings(
							"eco-apps-projects",
							"referral",
							"project-card-sub-link",
							url
						)}
						prefetch={false}
					>
						<SubLink>{url}</SubLink>
					</Link>
					<Link
						href={hrefSettings(
							"eco-apps-projects",
							"referral",
							"project-card-cta-link",
							url
						)}
						prefetch={false}
					>
						<CTALink>Visit Website</CTALink>
					</Link>
				</ProjectCard>
			</Link>
		</Container>
	);
}
export default projects;
const Container = styled(motion.div)`
	width: 1200px;
	margin: 0 auto;
	> h1 {
		margin-top: 32px;
	}
`;
const ProjectCard = styled(motion.div)`
	width: 300px;
	background: white;
	border-radius: 7px;
	margin: 32px;
	padding: 24px;
	cursor: pointer;

	> img {
		width: 100%;
		margin-bottom: 8px;
	}
`;

const CTALink = styled.p`
	margin-top: 32px;
	transition: 0.333s ease;
	color: var(--link-colour-1);

	:hover {
		color: var(--link-colour-2);
	}
`;

const SubLink = styled(CTALink)`
	margin-top: 4px;
	color: var(--link-colour-2);
	:hover {
		color: var(--link-colour-1);
	}
`;
