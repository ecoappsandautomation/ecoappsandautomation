import React from "react";
import styled from "styled-components";
import { fadeInLeft, hover, tap } from "../utils/animations";
import hrefSettings from "../utils/hrefSettings";
import { StyledDivider } from "../styles/styledComponents";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
function ProjectCard({
	url,
	logoUrl,
	utmSource,
	utmMedium,
	prefetch,
	siteTitle,
}) {
	const myLoader = ({ width, quality }) => {
		return `${logoUrl}?w=${width}&q=${quality || 75}`;
	};

	return (
		<Link
			href={hrefSettings(utmSource, utmMedium, "project-card", url)}
			prefetch={prefetch}
		>
			<Container
				key={url}
				variants={fadeInLeft}
				whileHover={hover}
				whiteTap={tap}
			>
				<NextImage
					src={logoUrl}
					alt={`${siteTitle} logo`}
					width={300}
					height={100}
					loader={myLoader}
				/>
				<StyledDivider />
				<h2>{siteTitle}</h2>
				<Link
					href={hrefSettings(
						utmSource,
						utmMedium,
						"project-card-sub-link",
						url
					)}
					prefetch={prefetch}
				>
					<SubLink>{url}</SubLink>
				</Link>
				<Link
					href={hrefSettings(
						utmSource,
						utmMedium,
						"project-card-cta-link",
						url
					)}
					prefetch={prefetch}
				>
					<CTALink>Visit Website</CTALink>
				</Link>
			</Container>
		</Link>
	);
}
export default ProjectCard;
const Container = styled(motion.div)`
	width: 300px;
	background: white;
	border-radius: 7px;
	margin: 32px 0 32px 32px;
	padding: 24px;
	cursor: pointer;
	@media (max-width: 1208px) {
		margin-left: 0px;
	}
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

const NextImage = styled(Image)`
	object-fit: contain;
`;
