import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PlacesAutocomplete from "react-places-autocomplete";

function GoogleAddressForm({
	lineOne,
	setLineOne,
	city,
	setCity,
	province,
	setProvince,
	country,
	setCountry,
	postalCode,
	setPostalCode,
}) {
	const [input, setInput] = useState("");
	const [place, setPlace] = useState({});

	useEffect(() => {
		if (
			lineOne !== "" &&
			city !== "" &&
			province !== "" &&
			country !== "" &&
			postalCode !== ""
		) {
			if (city.toLocaleLowerCase() !== "edmonton") {
				alert(
					"Please enter an address in Edmonton. We are only serving Edmonton & Area right now."
				);
			}
		}
	}, [lineOne, city, province, country, postalCode]);
	// Importing react-hook-form functions

	// Setting the autocomplete location restriction to Edmonton
	const bounds = {
		lat: 53.5559165,
		lng: -113.6328038,
	};

	// Setting the input value to the address
	const handleSelect = async (address) => {
		setInput(address);
	};

	// List of imported CSS variables
	const lightColour = getComputedStyle(
		document.documentElement
	).getPropertyValue("--light-colour");

	const darkColour = getComputedStyle(
		document.documentElement
	).getPropertyValue("--light-colour-2");

	// Styling of autocomplete input
	const style = {
		width: "100%",
		padding: "8px",
		marginTop: "8px",
		border: `2px solid ${darkColour}`,
		borderRadius: "4px",
	};

	// Autocomplete settings
	const searchOptions = {
		location: new google.maps.LatLng(bounds.lat, bounds.lng),
		radius: 1000,
		types: ["address"],
	};

	// useEffect for setting address inputs from autocomplete results
	useEffect(() => {
		if (place[0]?.value) {
			if (place[4]?.value) {
				setLineOne(place[0]?.value + " " + place[1]?.value);
				setCity(place[2].value);
				setProvince(place[3].value);
				setCountry(place[4].value);
			} else {
				setLineOne(place[0]?.value);
				setCity(place[1].value);
				setProvince(place[2].value);
				setCountry(place[3].value);
			}
		}
	}, [place]);
	return (
		<Container>
			<hr />
			<h4>Shipping Details</h4>
			<hr />
			<PlacesAutocomplete
				value={input}
				onChange={setInput}
				onSelect={handleSelect}
				searchOptions={searchOptions}
			>
				{({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
					<div>
						<input
							{...getInputProps({
								placeholder: "Type an address in Edmonton",
								autoFocus: true,
								style,
							})}
						/>
						<div>
							{loading ? <p>...loading</p> : null}
							{suggestions.map((suggestion) => {
								const style = {
									backgroundColor: suggestion.active
										? `${lightColour}`
										: "#fff",
									cursor: "pointer",
									padding: "8px",
									borderRadius: "4px",
									margin: "8px 0px",
									transition: "0.333s ease",
								};
								return (
									<div
										key={suggestion}
										{...getSuggestionItemProps(suggestion, { style })}
										onClick={() => {
											setPlace(suggestion.terms);
											handleSelect(suggestion.description);
										}}
									>
										{suggestion.description}
									</div>
								);
							})}
							<GoogleLogo>Powered by Google</GoogleLogo>
						</div>
					</div>
				)}
			</PlacesAutocomplete>
			<AddressInput
				name='address'
				placeholder='Address'
				value={lineOne}
				required
				onChange={(e) => setLineOne(e.target.value)}
			/>
			<AddressInput
				name='city'
				placeholder='City'
				value={city}
				required
				onChange={(e) => setCity(e.target.value)}
			/>
			<AddressInput
				name='province'
				placeholder='Province'
				value={province}
				required
				onChange={(e) => setProvince(e.target.value)}
			/>
			<AddressInput
				name='country'
				placeholder='Country'
				value={country}
				required
				onChange={(e) => setCountry(e.target.value)}
			/>
			<AddressInput
				name='postal code'
				placeholder='Postal Code'
				value={postalCode}
				required
				onChange={(e) => setPostalCode(e.target.value)}
			/>
		</Container>
	);
}
export default GoogleAddressForm;
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
const AddressInput = styled.input`
	width: 100%;
	padding: 8px;
	margin-top: 8px;
	border: 2px solid var(--light-colour-2);
	border-radius: 4px;
`;
const GoogleLogo = styled.p`
	font-size: 12px;
	text-align: right;
`;
