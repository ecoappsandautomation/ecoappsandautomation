export default function getBookedSlots(location) {
	// Here we are creating the whole delivieries array with a higher level for loop
	// that runs through the days of the week.

	//TODO: Grab array of booked slots from db and enter that into
	// scheduledDeliveries
	const deliveriesArr = [
		{ monday: [] },
		{ tuesday: [] },
		{ wednesday: [] },
		{ thursday: [] },
		{ friday: [] },
		{ saturday: [] },
		{ sunday: [] },
	];
	const daysOfTheWeek = [
		"monday",
		"tuesday",
		"wednesday",
		"thursday",
		"friday",
		"saturday",
		"sunday",
	];
	for (let i = 0; i < daysOfTheWeek.length; i++) {
		let today = i;
		for (let i = 0; i < 47; i++) {
			deliveriesArr[today][daysOfTheWeek[today]].push({
				hour: i,
				scheduledDeliveries: [],
			});
		}
	}
	const locations = {
		edmonton: {
			bookedDeliveries: deliveriesArr,
		},
	};
	if (location === "edmonton" || location === "Edmonton") {
		return locations.edmonton;
	}
	if (location === "whitecourt" || location === "Whitecourt") {
		return locations.whitecourt;
	}
}
