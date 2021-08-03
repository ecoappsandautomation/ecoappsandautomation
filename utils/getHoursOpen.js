export default function getHoursOpen(location, getSchedule, bookedSlots) {
	const locations = {
		edmonton: {
			monday: { start: "2:30 pm", end: "8:00 pm", open: false },
			tuesday: { start: "2:30 pm", end: "8:00 pm", open: true },
			wednesday: { start: "2:30 pm", end: "8:00 pm", open: true },
			thursday: { start: "2:30 pm", end: "8:00 pm", open: true },
			friday: { start: "2:30 pm", end: "8:30 pm", open: true },
			saturday: { start: "2:30 pm", end: "8:30 pm", open: false },
			sunday: { start: "-", end: "-", open: false },
		},
	};
	const schedule = [
		{
			day: "monday",
			start: locations.edmonton.monday.start,
			end: locations.edmonton.monday.end,
			open: locations.edmonton.monday.open,
			bookedSlots: bookedSlots?.monday,
		},
		{
			day: "tuesday",
			start: locations.edmonton.tuesday.start,
			end: locations.edmonton.tuesday.end,
			open: locations.edmonton.tuesday.open,
			bookedSlots: bookedSlots?.tuesday,
		},
		{
			day: "wednesday",
			start: locations.edmonton.wednesday.start,
			end: locations.edmonton.wednesday.end,
			open: locations.edmonton.wednesday.open,
			bookedSlots: bookedSlots?.wednesday,
		},
		{
			day: "thursday",
			start: locations.edmonton.thursday.start,
			end: locations.edmonton.thursday.end,
			open: locations.edmonton.thursday.open,
			bookedSlots: bookedSlots?.thursday,
		},
		{
			day: "friday",
			start: locations.edmonton.friday.start,
			end: locations.edmonton.friday.end,
			open: locations.edmonton.friday.open,
			bookedSlots: bookedSlots?.friday,
		},
		{
			day: "saturday",
			start: locations.edmonton.saturday.start,
			end: locations.edmonton.saturday.end,
			open: locations.edmonton.saturday.open,
			bookedSlots: bookedSlots?.saturday,
		},
		{
			day: "sunday",
			start: locations.edmonton.sunday.start,
			end: locations.edmonton.sunday.end,
			open: locations.edmonton.sunday.open,
			bookedSlots: bookedSlots?.sunday,
		},
	];
	if (getSchedule) {
		return schedule;
	}
	if (location === "edmonton" || location === "Edmonton") {
		return locations.edmonton;
	}
	if (location === "whitecourt" || location === "Whitecourt") {
		return locations.whitecourt;
	}
}
