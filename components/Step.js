import { useRouter } from "next/dist/client/router";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Widget as TypeForm } from "@typeform/embed-react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import Image from "next/image";
import emailScreenshot from "../images/Cauvery Calling Email.PNG";
import certificatePic from "../images/Cauvery-calling-certificate.jpg";
import { symbolName } from "typescript";
function Step({ step }) {
	const router = useRouter();
	const visitUrl = (url) => {
		router.push(url);
	};
	const [certificateWidth, setCertificateWidth] = useState(150);
	const [certificateHeight, setCertificateHeight] = useState(150);
	const [certificateDimensions, setCertificateDimensions] = useState(false);

	useEffect(() => {
		if (certificateDimensions) {
			setCertificateWidth(1200);
			setCertificateHeight(1600);
		} else {
			setCertificateWidth(150);
			setCertificateHeight(250);
		}
	}, [certificateDimensions]);
	if (step === 1) {
		return (
			<StepOne>
				<StepNum>
					🌳 1 - Contribute 25 or more trees to Vaisakh&apos;s campaign for
					Cauvery Calling
				</StepNum>
				<p>
					You will be redirected to an Isha Foundation page to process the
					donation to the Cauvery Calling Campaign.
				</p>
				<a
					target='_blank'
					rel='noreferrer'
					href='https://www.ishaoutreach.org/en/cauvery-calling/campaigns/donate-tree-for-sadhgurus-birthday'
				>
					<button>Contribute to Vaisakh&apos;s Campaign</button>
				</a>
			</StepOne>
		);
	}
	if (step === 2) {
		return (
			<StepTwo>
				<StepNum>
					📸 2 - Take a screenshot of the certificate you recieve after
					contributing
				</StepNum>

				<p>
					You&apos;ll find it in your email and the subject line will look like
					this:
				</p>
				<StyledImage
					src={emailScreenshot}
					// height={10} width={800}
				/>
				<p>The certificate looks like this:</p>
				{certificateWidth === 150 ? (
					<StyledImagePointer
						src={certificatePic}
						height={certificateHeight}
						width={certificateWidth}
						onClick={() => {
							setCertificateDimensions(!certificateDimensions);
						}}
					/>
				) : (
					<Image
						src={certificatePic}
						height={certificateHeight}
						width={certificateWidth}
						onClick={() => {
							setCertificateDimensions(!certificateDimensions);
						}}
					/>
				)}
			</StepTwo>
		);
	}
	if (step === 3) {
		return (
			<StepThree>
				<StepNum>
					✍️ 3 - Fill & Submit this form with the screenshot to recieve access
					to the course
				</StepNum>
				<p>
					<b>Note:</b> this course is not complete yet - refer to the following
					course outline & release schedule below.
				</p>

				<StyledPopup
					trigger={
						<button>
							Fill this form to Register for Coding 4 Cauvery Course
						</button>
					}
					modal
				>
					<TypeForm id='wAZqrTR8' style={{ height: "60vh" }} />
				</StyledPopup>
			</StepThree>
		);
	}
}
export default Step;
const Container = styled.div`
	background: #fff;
	padding: 16px;
	border-radius: 8px;

	margin-bottom: 16px;
	> button,
	> a > button {
		padding: 8px 32px;
		background-color: var(--link-colour-1);
		border: none;
		border-radius: 4px;
		font-size: 18px;
		transition: 0.333s ease;
		cursor: pointer;
		:hover {
			background-color: var(--link-colour-2);
			color: #fff;
		}
	}

	> img:nth-child(5) {
		cursor: pointer;
	}
	transition: 0.333s ease;
	:hover {
		box-shadow: 0px 0 15px rgba(255, 255, 255, 0.708);
	}
`;
const StyledImage = styled(Image)`
	width: 100%;
	transition: 0.333s ease;
	margin-top: 16px;

	:hover {
		transform: scale(1.08);
	}
`;
const StyledImagePointer = styled(StyledImage)`
	cursor: pointer;
`;
const StepNum = styled.p`
	font-size: 21px;
`;
const StepOne = styled(Container)`
	padding: 16px 32px;
	> p {
		margin-top: 8px;
	}
	> a > button,
	button {
		width: 100%;
		margin-top: 16px;
	}
`;
const StepTwo = styled(StepOne)``;
const StepThree = styled(StepOne)`
	> p:nth-child(2) {
		flex: 1;
	}
	> p:nth-child(1) {
		flex: 0.2;
	}
`;

const StyledPopup = styled(Popup)`
	&-content {
		@media (max-width: 1024px) {
			width: 80vw;
		}
	}
`;
