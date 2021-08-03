import React, { useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import { Button } from "@material-ui/core";
function JobCard({
	position,
	location,
	url,
	description,
	wage,
	skills,
	experience,
	date,
	availability,
	duties,
}) {
	const router = useRouter();
	const visitUrl = (url) => {
		router.push(url);
	};
	const [showMore, setShowMore] = useState(false);
	return (
		<>
			{!showMore ? (
				<Container>
					<Top>
						<div>
							<h2>{position}</h2>
							<p>${wage}/hr</p>
							<p>{location}</p>
						</div>
						<p>Posted on: {date}</p>
					</Top>
					<h4>Description:</h4>
					<p>{description}</p>
					<BtnContainer>
						<p
							onClick={() => {
								setShowMore(!showMore);
							}}
						>
							Show More
						</p>
						<CTAButton
							onClick={() => {
								visitUrl(url);
							}}
						>
							Apply Today
						</CTAButton>
					</BtnContainer>
				</Container>
			) : (
				<Container>
					<Top>
						<div>
							<h2>{position}</h2>
							<p>${wage}/hr</p>
							<p>{location}</p>
						</div>
						<p>Posted on: {date}</p>
					</Top>
					<h4>Description:</h4>
					<p>{description}</p>
					<h4>Duties:</h4>
					<p>{duties && duties.map((duty) => <p>- {duty}</p>)}</p>
					<h4>Requirements / Skills:</h4>
					<p>{skills && skills.map((skill) => <p>- {skill}</p>)}</p>
					<h4>Experience:</h4>
					<p>{experience && experience.map((exp) => <p>- {exp}</p>)}</p>
					<h4>Availability:</h4>
					<p>{availability}</p>
					<BtnContainer>
						<p
							onClick={() => {
								setShowMore(!showMore);
							}}
						>
							Show Less
						</p>
						<CTAButton
							onClick={() => {
								visitUrl(url);
							}}
						>
							Apply Today
						</CTAButton>
					</BtnContainer>
				</Container>
			)}
		</>
	);
}
export default JobCard;
const Container = styled.div`
	border: 1px solid whitesmoke;
	border-radius: 8px;
	padding: 24px;
	margin: 16px 0;
	transition: 0.333s ease;
	:hover {
		box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.108);
	}
	> h4 {
		color: gray;
		margin-top: 8px;
	}
`;
const BtnContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-top: 16px;
	> p {
		color: var(--main-link-color);
		cursor: pointer !important;
		font-weight: 500;
	}
`;
const CTAButton = styled(Button)`
	&&& {
		background-color: var(--main-link-color);
		color: white;
		padding: 8px 32px;
	}
`;
const Top = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;
	> p {
		color: lightgray;
	}
	> div {
		display: flex;
		align-items: center;
		> p {
			margin-left: 8px;
			font-size: 14px;
		}
	}
`;
