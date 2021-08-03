import React, { useEffect, useState } from "react";
import styled from "styled-components";
import JobCard from "../components/JobCard";
import getListings from "../utils/getListings";
function work(props) {
	const [location, setLocation] = useState("All");
	const [listings, setListings] = useState(getListings());
	const allListings = getListings();
	useEffect(() => {
		if (location === "Edmonton") {
			setListings(
				allListings.filter((listing) => listing.location === "Edmonton")
			);
		}

		if (location === "Whitecourt") {
			setListings(
				allListings.filter((listing) => listing.location === "Whitecourt")
			);
		}

		if (location === "All") {
			setListings(allListings);
		}
	}, [location]);
	return (
		<Container>
			<h1>Work With Us</h1>
			<LocationContainer>
				<p>Sort by location</p>
				<select value={location} onChange={(e) => setLocation(e.target.value)}>
					<option value={"All"}>All</option>
					<option value={"Edmonton"}>Edmonton</option>
					<option value={"Whitecourt"}>Whitecourt</option>
				</select>
			</LocationContainer>
			<ListingContainer>
				{listings.map(
					({
						id,
						location,
						description,
						wage,
						skills,
						experience,
						position,
						url,
						date,
						availability,
						duties,
					}) => (
						<JobCard
							id={id}
							location={location}
							description={description}
							wage={wage}
							skills={skills}
							experience={experience}
							position={position}
							url={url}
							date={date}
							availability={availability}
							duties={duties}
						/>
					)
				)}
			</ListingContainer>
		</Container>
	);
}
export default work;
const Container = styled.div`
	width: 70vw;
	margin: 16px auto 0;
`;

const LocationContainer = styled.div`
	display: flex;
	align-items: center;
	> p {
		margin-right: 8px;
	}
	> select {
		padding: 8px;
		border: none;
		margin-top: 4px;
		outline: none;
		background: var(--light-color);
		border-radius: 8px;
	}
`;

const ListingContainer = styled.div``;
