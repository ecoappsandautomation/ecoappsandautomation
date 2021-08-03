export default function getLocation(location) {
	const locations = {
		edmonton: {
			title: "Prana Party",
			address: "7450 82 Ave NW",
			city: "Edmonton",
			province: "AB",
			phone: "+1-780-246-3275",
		},
		whitecourt: {
			title: "Soban Korean Japanese Cuisine",
			address: "5108 50 Ave #4",
			city: "Whitecourt",
			province: "AB",
			phone: "+1-780-778-5225",
		},
	};
	if (location === "edmonton" || location === "Edmonton") {
		return locations.edmonton;
	}
	if (location === "whitecourt" || location === "Whitecourt") {
		return locations.whitecourt;
	}
}
