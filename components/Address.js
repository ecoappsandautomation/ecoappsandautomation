import React, { useEffect } from "react";
import styled from "styled-components";
import getLocation from "../utils/getLocation";
// import { PrismaClient } from "@prisma/client";
import { useState } from "react";

export async function getServerSideProps() {
	// const prisma = new PrismaClient();
	// const restaurants = await prisma.restaurant.findMany();
	// return {
	// 	props: {
	// 		restaurants: restaurants,
	// 	},
	// };
}

function Address({ location, restaurants }) {
	let currentLocation = getLocation(location);
	// const [initialRestaurants, setInitialRestaurants] = useState(restaurants);
	// useEffect(() => {
	// 	fetch("http://localhost:3000/api/restaurants", {
	// 		method: "GET",
	// 	}).then((res) => console.log("RESPONSE >>> ", res));
	// 	console.log("INIT RESTAURANTS >>> ", initialRestaurants);
	// }, [initialRestaurants]);
	return (
		<Container>
			<h3>{currentLocation.title}</h3>
			<p>{currentLocation.address}</p>
			<p>
				{currentLocation.city}, {currentLocation.province}
			</p>
			<br />
			<a href={`tel:${currentLocation.phone}`}>📞 {currentLocation.phone}</a>
			<br />
		</Container>
	);
}
export default Address;

const Container = styled.div`
	> h3 {
		width: 200px;
	}
	> a {
		font-weight: 500;
		transition: 0.333s ease;
		color: var(--link-colour-1);
		cursor: pointer;
		font-weight: 700;
		:hover {
			color: var(--link-colour-2);
		}
	}
`;
