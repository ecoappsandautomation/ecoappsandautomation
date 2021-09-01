import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Step from "../components/Step";
function coding4cauvery(props) {
	return (
		<Container>
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
				You'll learn how to make modern websites with technologies like Next.js,
				React.js, Supabase, Redux, Styled-components, Html, CSS, Javascript. and
				GitHub.
			</p>
			<p>
				After you've completed this course, you'll be able to turn your ideas
				into websites even if you've never written a single line of code before.
			</p>
			<TwoColumn>
				<Left>
					<p>
						Namaskaram, my name is Sajan and I'm making this course for my
						Guru's birthday. Vaisakh (
						<a href='https://instagram.com/vaisu90'>@vaisu90</a>), a meditator
						in India, has <br /> started a campaign to plant 64,000 trees on
						behalf of Sadhguru's birthday, and as an offering, I'm making this
						course available to anyone who donates 25 trees or more to the
						Cauvery Calling campaign.
					</p>
					<Step step={1} />
					<SmallTxt>(Scroll down to see steps 2 & 3)</SmallTxt>
				</Left>
				<Right>
					<p>
						I'm not an educator, or an advanced coding expert, I've been coding
						for 1 year now thanks to Clever Programmer (
						<a href='https://instagram.com/cleverprogrammer'>
							@cleverprogrammer
						</a>
						) and Sajan Sangha AKA Sonny AKA Papa React (
						<a href='https://instagram.com/ssssangha'>@ssssangha</a>) and built
						these projects:
					</p>
					<img src='https://i.postimg.cc/gjFS8HmC/projects-screenshot.png' />
					<p>
						If you want to learn how to make these projects, you can check out
						Clever Programmer's course or Sonny's course.
					</p>
				</Right>
			</TwoColumn>

			<p>
				In Coding 4 Cauvery, you'll learn how to make a website of your own and
				learn the fundamentals along the way.
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
					<i>Release Date September 17, 2021</i>
				</h4>
				<p>
					In this module, you'll learn how to set your environment up for
					coding, from your code editor to your mind to prepare you to write
					impactful code and how to approach challenges when troubleshooting
					coding bugs or errors.
				</p>
			</Module>
			<Module>
				<h4>
					<b>Module 2 -</b> How to Create Scope of Work / Software Requirements
					Documentation - <i>Release Date September 24, 2021</i>
				</h4>
				<p>
					In this module, you'll learn how to map out your app idea and identify
					the different kinds of users, actions, and end results for your app.
				</p>
			</Module>

			<Module>
				<h4>
					<b>Module 3 -</b> Introduction to Next.js -{" "}
					<i>Release Date October 1, 2021</i>
				</h4>
				<p>In this module, you'll learn the basics of Next.js websites.</p>
			</Module>

			<Module>
				<h4>
					<b>Module 4 -</b> Start Your Website (Project) -{" "}
					<i>Release Date October 8, 2021</i>
				</h4>
				<p>
					For this module, you'll make a website to share a skill, passion,
					message, or whatever with the world. We'll be making a website for a
					fictional restaurant called Prana Pizza. 🍕
				</p>
			</Module>

			<Module>
				<h4>
					<b>Module 5 -</b> Backend Setup (Project) -{" "}
					<i>Release Date October 15, 2021</i>
				</h4>
				<p>
					For this module, you'll learn how to connect your website to a
					database. We'll be using Supabase, a Backend as a Service NoSQL SQL
					scalable database.
				</p>
			</Module>

			<Module>
				<h4>
					<b>Module 6 -</b> User Login AKA Authentication (Project) -{" "}
					<i>Release Date October 22, 2021</i>
				</h4>
				<p>For this module, you'll learn how to login to your website.</p>
			</Module>

			<Module>
				<h4>
					<b>Module 7 -</b> User Backend by Role (Project) -{" "}
					<i>Release Date October 29, 2021</i>
				</h4>
				<p>
					For this module, you'll learn how to create an admin & user backend
					for logged-in users of your website.
				</p>
			</Module>

			<Module>
				<h4>
					<b>Module 8 -</b> Payment Processing (Project) -{" "}
					<i>Release Date November 5, 2021</i>
				</h4>
				<p>For this module, you'll learn how to create a checkout process.</p>
			</Module>

			<Module>
				<h4>
					<b>Module 9 -</b> Launch. (Project) -{" "}
					<i>Release Date November 12, 2021</i>
				</h4>
				<p>
					For this module, you'll learn how to launch (deploy) your website
					publicly.
				</p>
			</Module>

			<Module>
				<h4>
					<b>Module 10 -</b> Optimization & Maintenance -{" "}
					<i>Release Date November 19, 2021</i>
				</h4>
				<p>
					For this module, you'll learn how to improve your code and maintain
					your existing public repositories (websites).
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
	> p:nth-child(1) {
		color: #fff;
		margin: 0 0 16px 0;
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
