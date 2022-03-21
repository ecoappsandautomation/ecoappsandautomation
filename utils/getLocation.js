export default function getLocation(location) {
	const locations = {
		edmonton: {
			title: "Eco Apps",
			address: "7450 82 Ave NW",
			city: "Edmonton",
			province: "AB",
			phone: "+(587) 804-0608",
		},
	};
	if (location === "edmonton" || location === "Edmonton") {
		return locations.edmonton;
	}
}
