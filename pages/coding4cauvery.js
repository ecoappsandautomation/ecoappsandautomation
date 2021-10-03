import Image from "next/image";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Step from "../components/Step";
import Head from "next/head";
import projectsScreenshot from "../images/projects-screenshot.PNG";
import cauveryCallingPoster from "../images/sadhguru-cc-poster.png";
function coding4cauvery(props) {
	return (
		<Container>
			<Head>
				<title>Coding 4 Cauvery | Eco Apps and Automation</title>
			</Head>
			<Header>
				<Logo src='https://i.postimg.cc/0NjQHytC/logo-august-20-2020-icon-left-side-square-800x186.png' />
				<h1>Coding 4 Cauvery</h1>
			</Header>
			<h2>Learn how to code and help restore Cauvery river. 💧</h2>
			<br />
			<h3>
				🌳 Donate 25 trees or more to the Cauvery campaign to unlock the Coding
				4 Cauvery beginners coding course. (Steps and links below)
			</h3>
			<br />
			<p>
				You&apos;ll learn how to make modern web apps with technologies like
				Next.js, React.js, Supabase, Redux, Styled-components, Html, CSS,
				Javascript. and GitHub.
			</p>
			<p>
				After you&apos;ve completed this course, you&apos;ll be able to turn
				your ideas into web apps even if you&apos;ve never written a single line
				of code before.
			</p>
			<TwoColumn>
				<Left>
					<Image src={cauveryCallingPoster} alt='' />
					<p>
						Namaskaram, my name is Sajan and I&apos;m making this course for my
						Guru&apos;s birthday. Vaisakh (
						<a href='https://instagram.com/vaisu90'>@vaisu90</a>), a meditator
						in India, has <br /> started a campaign to plant 64,000 trees on
						behalf of Sadhguru&apos;s birthday, and as an offering, I&apos;m
						making this course available to anyone who donates 25 trees or more
						to the Cauvery Calling campaign.
					</p>
					<SmallTxt>(Scroll down to see the steps)</SmallTxt>
				</Left>
				<Right>
					<p>
						I&apos;m not an educator, or an advanced coding expert, I&apos;ve
						been coding for 1 year now thanks to Clever Programmer (
						<a href='https://instagram.com/cleverprogrammer'>
							@cleverprogrammer
						</a>
						) and Sajan Sangha AKA Sonny AKA Papa React (
						<a href='https://instagram.com/ssssangha'>@ssssangha</a>) and built
						these projects:
					</p>
					<Image src={projectsScreenshot} alt='' />
					<p>
						If you want to learn how to make these projects, you can check out
						Clever Programmer&apos;s course or Sonny&apos;s course.
					</p>
				</Right>
			</TwoColumn>

			<p>
				In Coding 4 Cauvery, you&apos;ll learn how to make a web app of your own
				and learn the fundamentals along the way.
			</p>
			<h2>
				If you want to unlock this beginners course, there are three steps to
				follow:
			</h2>
			<Step step={1} />
			<Step step={2} />
			<Step step={3} />
			<h2>Course Outline & Release Schedule</h2>
			<hr />
			<Module>
				<h4>
					<b>Module 1 -</b> Creating a Conducive Environment for Coding -{" "}
					<i>Released</i>
				</h4>
				<p>
					In this module, you&apos;ll learn how to set your environment up for
					coding, from your code editor to your mind to prepare you to write
					impactful code and how to approach challenges when troubleshooting
					coding bugs or errors.
				</p>
			</Module>
			<Module>
				<h4>
					<b>Module 2 -</b> How to Create Scope of Work / Software Requirements
					Documentation - <i>Release Date October 8, 2021</i>
				</h4>
				<p>
					In this module, you&apos;ll learn how to map out your app idea and
					identify the different kinds of users, actions, and end results for
					your app.
				</p>
			</Module>

			<Module>
				<h4>
					<b>Module 3 -</b> Introduction to Core Programming Skills -{" "}
					<i>Tentative Release Date October 22, 2021</i>
				</h4>
				<p>In this module, you&apos;ll learn the basics of Programming.</p>
			</Module>

			<Module>
				<h4>
					<b>Module 4 -</b> Start Your Web app (Project) -{" "}
					<i>Tentative Release Date November 5, 2021</i>
				</h4>
				<p>
					For this module, you&apos;ll make a web app to share a skill, passion,
					message, or whatever with the world. We&apos;ll be making a hatha yoga
					studio web app based on a real yoga studio in the course, but you can
					make whatever kind of website you want.
				</p>
			</Module>

			<Module>
				<h4>
					<b>Module 5 -</b> Backend Setup (Project) -{" "}
					<i>Tentative Release Date November 19, 2021</i>
				</h4>
				<p>
					For this module, you&apos;ll learn how to connect your web app to a
					database. We&apos;ll be using Supabase, a Backend as a Service NoSQL
					SQL scalable database.
				</p>
			</Module>

			<Module>
				<h4>
					<b>Module 6 -</b> User Login AKA Authentication (Project) -{" "}
					<i>Tentative Release Date December 3, 2021</i>
				</h4>
				<p>
					For this module, you&apos;ll learn how to enable user login for your
					web app.
				</p>
			</Module>

			<Module>
				<h4>
					<b>Module 7 -</b> User Backend by Role (Project) -{" "}
					<i>Tentative Release Date December 17, 2021</i>
				</h4>
				<p>
					For this module, you&apos;ll learn how to create an admin & user
					backend for anyone who logs in successfully to your web app.
				</p>
			</Module>

			<Module>
				<h4>
					<b>Module 8 -</b> Payment Processing (Project) -{" "}
					<i>Tentative Release Date December 31, 2021</i>
				</h4>
				<p>
					For this module, you&apos;ll learn how to create a checkout process.
				</p>
			</Module>

			<Module>
				<h4>
					<b>Module 9 -</b> Launch. (Project) -{" "}
					<i>Tentative Release Date January 14, 2021</i>
				</h4>
				<p>
					For this module, you&apos;ll learn how to launch (deploy) your web app
					publicly.
				</p>
			</Module>

			<Module>
				<h4>
					<b>Module 10 -</b> Optimization & Maintenance -{" "}
					<i>Tentative Release Date November 19, 2021</i>
				</h4>
				<p>
					For this module, you&apos;ll learn how to improve your code and
					maintain your existing public repositories (web apps).
				</p>
			</Module>
		</Container>
	);
}
export default coding4cauvery;
const Container = styled.div`
	margin: 16px auto;
	width: 80vw;
	@media (min-width: 1024px) {
		width: 60vw;
		padding: 24px;
	}
	> p {
		margin-bottom: 16px;
	}
	> h2 {
		margin-top: 16px;
		margin-bottom: 16px;
	}
	> h4 {
		font-size: 18px;
		font-weight: 500;
	}
`;

const Module = styled.div`
	background: #fff;
	padding: 24px 48px;
	border-radius: 8px;
	margin: 16px 0;
	transition: 0.333s ease;
	:hover {
		box-shadow: 0px 0 15px rgba(0, 0, 0, 0.308);
	}
	> h4 {
		font-size: 18px;
	}
`;

const Left = styled.div`
	padding: 24px;
	background: var(--dark-colour-1);

	border-radius: 8px;
	height: max-content;
	flex: 1.5;
	@media (min-width: 1024px) {
		margin-right: 32px;
	}
	> p:nth-child(2) {
		color: #fff;
		margin: 16px 0;
	}
`;
const Right = styled.div`
	padding: 24px;
	background: #fff;
	margin-right: 32px;
	border-radius: 8px;
	height: max-content;
	flex: 1;
	@media (max-width: 1024px) {
		margin: 16px 0;
	}
	> p {
		margin: 16px 0;
	}
	> img {
		width: 100%;
	}
`;
const TwoColumn = styled.div`
	@media (min-width: 1024px) {
		display: flex;
		margin: 16px 0;
	}
`;
const Logo = styled.img`
	width: 300px;
	margin-bottom: 16px;
`;
const Header = styled.div`
	@media (min-width: 1024px) {
		display: flex;
		align-items: center;
		justify-content: space-evenly;
	}
`;

const SmallTxt = styled.p`
	color: #fff;
	font-size: 14px;
	text-align: center;
`;

const Screenshot = styled.img``;
