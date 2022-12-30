import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { stagger } from "../utils/animations";
import getProjects from "../utils/getProjects";
import ProjectCard from "../components/ProjectCard";
function projects(props) {
	const projects = getProjects();
	return (
		<Container variants={stagger} initial='initial' animate='animate'>
			<h1>Projects</h1>
			<CardContainer>
				{projects.map(
					({ url, logoUrl, utmSource, utmMedium, prefetch, siteTitle }) => (
						<>
							<ProjectCard
								key={siteTitle}
								url={url}
								logoUrl={logoUrl}
								utmSource={utmSource}
								utmMedium={utmMedium}
								prefetch={prefetch}
								siteTitle={siteTitle}
							/>
						</>
					)
				)}
			</CardContainer>
		</Container>
	);
}
export default projects;
const Container = styled(motion.div)`
	@media (min-width: 1208px) {
		width: 1200px;
		margin: 0 auto;
	}
	> h1 {
		margin-top: 32px;
		margin-left: 32px;
	}
`;

const CardContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
`;
