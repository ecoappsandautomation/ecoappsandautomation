import { motion } from "framer-motion";
import styled from "styled-components";
import Popup from "reactjs-popup";

const CTABtn = styled.button`
	padding: 8px 16px;
	border: none;
	border-radius: 4px;
	background-color: var(--main-link-color);
	color: white;
	font-weight: 700;
	font-size: 18px;
	width: 100%;
	transition: 0.333s ease;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: 8px;
	:hover {
		background-color: var(--dark-color);
		color: var(--light-color);
	}
`;
const CTABtnTwo = styled(CTABtn)`
	background-color: var(--light-color) !important;
	color: var(--dark-color) !important;
	:hover {
		background-color: var(--dark-color) !important;
		color: var(--light-color) !important;
	}
`;
const ExitPopupBtn = styled.button`
	cursor: pointer;
	position: absolute;
	display: block;
	padding: 2px 5px;
	line-height: 20px;
	right: 0px;
	top: 0px;
	font-size: 24px;
	background: #ffffff;
	border-radius: 18px;
	border: 1px solid #cfcece;
	margin: 16px;
`;
const PopupTextCtnr = styled.div`
	padding: 16px 48px;
	display: flex;
	flex-direction: column;
	align-items: center;
	background: white;
	> p {
		margin: 24px 0;
	}
	> h2 {
		margin-bottom: 16px;
		font-size: 28px;
		font-weight: 500;
	}
`;

const PopupTopDetails = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	margin-bottom: 32px;
`;
const StyledPopup = styled(Popup)`
	&-overlay {
		margin-top: 64px;
	}
	&-content {
		width: 80%;
		height: 70vh;
		overflow-y: auto;
		overflow-x: hidden;
		padding-bottom: 32px;
	}
`;

const StyledDivider = styled.hr`
	border: 1px solid whitesmoke;
	margin: 12px 0;
	margin-top: ${({ marginTop }) => marginTop};
	margin-bottom: ${({ marginBottom }) => marginBottom};
`;
export {
	CTABtn,
	CTABtnTwo,
	ExitPopupBtn,
	PopupTextCtnr,
	PopupTopDetails,
	StyledPopup,
	StyledDivider,
};
