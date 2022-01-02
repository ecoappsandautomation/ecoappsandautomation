import styled from "styled-components";

import ServicesSection from "../components/ServicesSection";
import Image from "next/image";
import Link from "next/link";
import { CTABtn } from "../styles/styledComponents";
export default function Home() {
	const imgUrl = `https://i.postimg.cc/15TfQ5GZ/nail-gilfanov-Tuyneo-Fac-Jg-unsplash.jpg`;

	const appUrl =
		"https://1lzc663dj0j.typeform.com/to/LKYTNsVm?type=Scalable%20Web%20App%20Development";
	return (
		<Container>
			<BannerImgContainer bg={imgUrl}>
				<div>
					<h1>
						Ready to build a fast scalable webapp for $1000 + $1 per user /
						month?
					</h1>
					<p>Book a strategy call today (takes 3 min)</p>
					<Link href={appUrl}>
						<CTABtn>Book strategy call</CTABtn>
					</Link>
				</div>
			</BannerImgContainer>
			<TopHr />
			{/* <LocationSection /> */}
			<ServicesSection />
		</Container>
	);
}
const Container = styled.div`
	display: flex;
	flex-direction: column;
	margin-left: auto;
	margin-right: auto;
	padding-bottom: 64px;
	@media (max-width: 1208px) {
		/* margin-top: 24px; */
		width: 100vw;
	}
`;

const BannerImgContainer = styled.div.attrs((props) => ({
	className: props.className,
}))`
	@media (max-width: 1208px) {
		margin-top: 0px;
	}
	background-image: url(${({ bg }) => bg});
	width: 100%;
	height: 88vh;
	background-size: cover;
	background-position: bottom left -108px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	& .bannerImg {
		border-radius: 12px;
	}
	> div > h1,
	div > p {
		color: white;
		text-align: right;
	}
	> div > p {
		text-align: right;
		margin-bottom: 32px;
	}
	> div {
		width: 80%;
		@media (max-width: 1208px) {
			width: 90%;
			margin-top: 0px;
		}
		display: flex;
		justify-content: flex-end;
		flex-direction: column;
		align-items: flex-end;
	}
`;

const TopHr = styled.hr`
	margin-top: 64px;
	margin-bottom: 32px;
	border: 1px solid var(--light-colour-3);
`;
