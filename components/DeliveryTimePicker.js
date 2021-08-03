import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { selectCurrentLocation } from "../features/appSlice";
import getHoursOpen from "../utils/getHoursOpen";
import getBookedDeliverySlots from "../utils/getBookedSlots";
import { useSelector } from "react-redux";

function DeliveryTimePicker(props) {
	const location = useSelector(selectCurrentLocation);

	//TODO: call admin API to set maxBookingsPerTimeslot
	const maxDeliveriesPerTimeslot = 4;

	//TODO: call admin API to set bufferTimeInHrsBetweenBookings
	const bufferTimeInHrsBetweenBookings = 1;

	let bookedTimeslots = {};
	const [selectedDeliveryTime, setSelectedDeliveryTime] = useState(null);
	const now = new Date();
	const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

	// Here we use for loop array to:
	// 1 - create a new date with date.getDate plus the
	// current index of the loop and get the maxNumberOfRollingDays (set by admin) and set it
	// to the length of the loop.

	// 2 - push the new date into rollingAvailabilityWindow.

	//TODO: call admin API to set max Number of Rolling Days
	const maxNumberOfRollingDays = 3;
	const rollingAvailabilityWindow = [];
	for (let i = 0; i < maxNumberOfRollingDays; i++) {
		const newDay = new Date(
			now.getFullYear(),
			now.getMonth(),
			now.getDate() + i
		);
		rollingAvailabilityWindow.push(newDay);
	}
	const tmr = new Date(
		today.getFullYear(),
		today.getMonth(),
		today.getDate() + 1
	);
	const bookedDeliveryTimes = getBookedDeliverySlots(location);
	const lastTimeSlot = 15;

	// Here we create an array with a for loop to have a value for each hour and half hour
	// increment from 0 to 47
	const timeslots = [];
	for (let i = 0; i < 47; i++) {
		timeslots.push(i);
	}

	const availableDeliveryTimes = (
		date,
		open,
		orderStart,
		orderEnd,
		bookedDeliveryTimes,
		bufferTimeInHrsBetweenBookings,
		maxDeliveriesPerTimeslot,
		startAfterXHrs
	) => {
		let availableTimes = {
			fullyBooked: false,
			openTimeslots: [],
		};
		let availableTimeSlots = timeslots;
		let scheduledDeliveryTimes = bookedDeliveryTimes.scheduledDeliveries;
		availableTimeSlots.slice(orderStart, orderEnd);
		//TODO: Use api to grab the bookedDeliveryTimes from the specific day being called according to
		// user selection in selectedDate.

		// Here we check if the length / number of orders in booked delivery times is equal to
		// the max deliveries per timeslot and determine whether to remove the timeslot from the
		// picker or not.
		for (let c = 0; c < bookedDeliveryTimes.length; c++) {
			if (scheduledDeliveryTimes[c]?.length === maxDeliveriesPerTimeslot) {
				availableTimeSlots.slice(
					scheduledDeliveryTimes[c].start,
					scheduledDeliveryTimes[c].end + bufferTimeInHrsBetweenBookings
				);
			}
		}

		// Here we create a buffer between the current time and the number of hours the business
		// owner wants to delay orders from being scheduled for delivered for.

		// Example: The time is 13:00 && startAfter = 3.  New customers will only be able to schedule
		// a delivery after 16:00 according to the remaining available timeslots between then and
		// last online order call.
		if (startAfterXHrs) {
			availableTimeSlots.slice(0, startAfterXHrs);
		}

		// If the business is open, push the remaining available timeslots into availableTimes.
		// If there are no available timeslots, then set the status of fullyBooked to true so that we
		// can let the user know there are no available time slots for the day chosen.
		if (open) {
			availableTimes.openTimeslots.push(availableTimeSlots);
			if (availableTimes.openTimeslots.length === 0) {
				availableTimes.fullyBooked = true;
			}
		} else {
			availableTimes.fullyBooked = true;
		}
		// TODO: Add rule to get bookingLengthInHrs to eliminate any tight
		// booking windows
		return availableTimes;
	};
	const [availableDaysOfTheWeek, setAvailableDaysOfTheWeek] = useState([]);
	const [availableRollingDays, setAvailableRollingDays] = useState([]);
	const [selectedDate, setSelectedDate] = useState(null);
	const [time, setTime] = useState(null);
	const [selectedTime, setSelectedTime] = useState(null);
	useEffect(() => {
		// console.log(today.getHours());
	}, [rollingAvailabilityWindow, today]);
	useEffect(() => {
		setAvailableDaysOfTheWeek(location);
	}, [location]);
	return (
		<Container>
			{rollingAvailabilityWindow &&
				rollingAvailabilityWindow.map((day) => {
					// Here we get the index of the current day in rolling availability window array
					let currentItemIndex = rollingAvailabilityWindow.indexOf(day);
					const tomorrow = day.getDate() - today.getDate();

					// Here we get the name of the day for the days after tomorrow.
					const currentDay = {
						0: "Sunday",
						1: "Monday",
						2: "Tuesday",
						3: "Wednesday",
						4: "Thursday",
						5: "Friday",
						6: "Saturday",
					};
					const nameOfTheDay = currentDay[day.getDay()];

					// Here we use a helper function 'getButtonText' to determine the text displayed
					// on each button to select the delivery date.
					const getButtonText = () => {
						if (
							day.getDate() === today.getDate() &&
							day.getHours() < lastTimeSlot
						) {
							return `Today ${day.toLocaleDateString()}`;
						} else if (tomorrow === 1) {
							return `Tomorrow ${day.toLocaleDateString()}`;
						} else {
							return `${nameOfTheDay} ${day.toLocaleDateString()}`;
						}
					};

					// If the current new Date day's string value in the array is equal to string date set
					// by the buttons options, then show the active button
					if (
						rollingAvailabilityWindow[currentItemIndex].toString() ===
						selectedDate
					) {
						return (
							<ActiveDateButton value={day}>{getButtonText()}</ActiveDateButton>
						);

						// Else show a clickable button.
					} else {
						return (
							<DateButton
								value={day}
								onClick={(e) => {
									e.preventDefault();
									setSelectedDate(e.target.value);
								}}
							>
								{getButtonText()}
							</DateButton>
						);
					}
				})}

			{/* Here we get the current selected date, then display 2 columns of
				buttons of the available delivery time slots that the user can choose
				to set selectedDeliveryTime and unlock the next part of the form */}
			{selectedDate && (
				<TimeButtonContainer>
					<p>Select a time to deliver your order:</p>
					{selectedTime === time ? (
						<ActiveTimeButton
							value={13}
							onClick={(e) => {
								e.preventDefault();
								setSelectedTime(e.target.value);
							}}
						>
							{/* {time} */}1:00 PM
						</ActiveTimeButton>
					) : (
						<TimeButton
							value={13}
							onClick={(e) => {
								e.preventDefault();
								setSelectedTime(e.target.value);
							}}
						>
							{/* {time} */}1:00 PM
						</TimeButton>
					)}
				</TimeButtonContainer>
			)}
		</Container>
	);
}
export default DeliveryTimePicker;
const Container = styled.div`
	display: flex;
	flex-direction: column;
	> button {
		margin: 8px 0 0;
	}
`;

const DateButton = styled.button`
	background: transparent;
	border: 2px solid var(--link-colour-1);
	padding: 8px;
	border-radius: 4px;
	cursor: pointer;
	transition: 0.333s ease;
	:hover {
		background: var(--light-colour-3);
	}
`;

const ActiveDateButton = styled(DateButton)`
	background: var(--light-colour-3) !important;
`;
const TimeButton = styled.button`
	background: transparent;
	border: 2px solid var(--link-colour-1);
	padding: 8px;
	border-radius: 4px;
	cursor: pointer;
	transition: 0.333s ease;
	width: 48%;
	margin-bottom: 8px;
	:hover {
		background: var(--light-colour-3);
	}
`;

const ActiveTimeButton = styled(TimeButton)`
	background: var(--light-colour-3) !important;
`;
const TimeButtonContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	flex-direction: row;
	flex-wrap: wrap;
	margin-top: 16px;
	> p {
		margin-bottom: 8px;
	}

	> button:nth-child(1) {
		margin-right: 8px;
	}
`;
