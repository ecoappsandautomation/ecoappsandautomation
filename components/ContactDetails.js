import React, { useEffect, useState } from "react";
import styled from "styled-components";
import * as EmailValidator from "email-validator";
function ContactDetails({
	setContactDetails,
	name,
	setName,
	email,
	setEmail,
	phoneNumber,
	setPhoneNumber,
}) {
	useEffect(() => {
		if (name !== "" && email !== "" && phoneNumber !== "") {
			if (!EmailValidator.validate(email)) {
				alert("Please enter a valid email address.");
			}
		}
	}, [EmailValidator, name, email, phoneNumber]);

	useEffect(() => {}, [email]);
	return (
		<Container>
			<hr />
			<h4>Contact Details</h4>
			<hr />
			<Input
				type='text'
				placeholder='Name'
				name='name'
				value={name}
				onChange={(e) => setName(e.target.value)}
				required
				autoFocus={true}
			/>
			<Input
				name='email'
				type='text'
				placeholder='Email'
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				required
			/>
			<Input
				name='phone number'
				type='text'
				placeholder='Phone Number'
				value={phoneNumber}
				onChange={(e) => setPhoneNumber(e.target.value)}
				required
			/>
		</Container>
	);
}
export default ContactDetails;
const Container = styled.div`
	> h4 {
		margin: 8px 0;
		color: gray;
	}
	> hr:nth-child(1) {
		margin-top: 8px;
		border: 1px solid var(--light-colour-1);
	}
	> hr:nth-child(3) {
		margin-bottom: 8px;
		border: 1px solid var(--light-colour-1);
	}
`;
const Input = styled.input`
	width: 100%;
	padding: 8px;
	margin-top: 8px;
	border: 2px solid var(--light-colour-2);
	border-radius: 4px;
`;
