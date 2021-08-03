import React from "react";
import getDate from "../utils/getDate";
import styled from "styled-components";
import getHoursOpen from "../utils/getHoursOpen";
function Schedule({ location }) {
	let today = getDate();
	let locationDetails = getHoursOpen(location);
	return (
		<Container>
			{today === 1 ? (
				<CurrentDay>
					👉 Monday{" "}
					{locationDetails.monday.open ? (
						<>
							{`${locationDetails.monday.start}`} to{" "}
							{locationDetails.monday.end}
						</>
					) : (
						<>{`closed`}</>
					)}
				</CurrentDay>
			) : (
				<Day>
					Monday{" "}
					{locationDetails.monday.open ? (
						<>
							{`${locationDetails.monday.start}`} to{" "}
							{locationDetails.monday.end}
						</>
					) : (
						<>{`closed`}</>
					)}
				</Day>
			)}
			{today === 2 ? (
				<CurrentDay>
					👉 Tuesday{" "}
					{locationDetails.tuesday.open ? (
						<>
							{`${locationDetails.tuesday.start}`} to{" "}
							{locationDetails.tuesday.end}
						</>
					) : (
						<>{`closed`}</>
					)}
				</CurrentDay>
			) : (
				<Day>
					Tuesday{" "}
					{locationDetails.tuesday.open ? (
						<>
							{`${locationDetails.tuesday.start}`} to{" "}
							{locationDetails.tuesday.end}
						</>
					) : (
						<>{`closed`}</>
					)}
				</Day>
			)}{" "}
			{today === 3 ? (
				<CurrentDay>
					👉 Wednesday{" "}
					{locationDetails.wednesday.open ? (
						<>
							{`${locationDetails.wednesday.start}`} to{" "}
							{locationDetails.wednesday.end}
						</>
					) : (
						<>{`closed`}</>
					)}
				</CurrentDay>
			) : (
				<Day>
					Wednesday{" "}
					{locationDetails.wednesday.open ? (
						<>
							{`${locationDetails.wednesday.start}`} to{" "}
							{locationDetails.wednesday.end}
						</>
					) : (
						<>{`closed`}</>
					)}
				</Day>
			)}{" "}
			{today === 4 ? (
				<CurrentDay>
					👉 Thursday{" "}
					{locationDetails.thursday.open ? (
						<>
							{`${locationDetails.thursday.start}`} to{" "}
							{locationDetails.thursday.end}
						</>
					) : (
						<>{`closed`}</>
					)}
				</CurrentDay>
			) : (
				<Day>
					Thursday{" "}
					{locationDetails.thursday.open ? (
						<>
							{`${locationDetails.thursday.start}`} to{" "}
							{locationDetails.thursday.end}
						</>
					) : (
						<>{`closed`}</>
					)}
				</Day>
			)}{" "}
			{today === 5 ? (
				<CurrentDay>
					👉 Friday{" "}
					{locationDetails.friday.open ? (
						<>
							{`${locationDetails.friday.start}`} to{" "}
							{locationDetails.friday.end}
						</>
					) : (
						<>{`closed`}</>
					)}
				</CurrentDay>
			) : (
				<Day>
					Friday{" "}
					{locationDetails.friday.open ? (
						<>
							{`${locationDetails.friday.start}`} to{" "}
							{locationDetails.friday.end}
						</>
					) : (
						<>{`closed`}</>
					)}
				</Day>
			)}{" "}
			{today === 6 ? (
				<CurrentDay>
					👉 Saturday{" "}
					{locationDetails.saturday.open ? (
						<>
							{`${locationDetails.saturday.start}`} to{" "}
							{locationDetails.saturday.end}
						</>
					) : (
						<>{`closed`}</>
					)}
				</CurrentDay>
			) : (
				<Day>
					Saturday{" "}
					{locationDetails.saturday.open ? (
						<>
							{`${locationDetails.saturday.start}`} to{" "}
							{locationDetails.saturday.end}
						</>
					) : (
						<>{`closed`}</>
					)}
				</Day>
			)}{" "}
			{today === 0 ? (
				<CurrentDay>
					👉 Sunday{" "}
					{locationDetails.sunday.open ? (
						<>
							{`${locationDetails.sunday.start}`} to{" "}
							{locationDetails.sunday.end}
						</>
					) : (
						<>{`closed`}</>
					)}
				</CurrentDay>
			) : (
				<Day>
					Sunday{" "}
					{locationDetails.sunday.open ? (
						<>
							{`${locationDetails.sunday.start}`} to{" "}
							{locationDetails.sunday.end}
						</>
					) : (
						<>{`closed`}</>
					)}
				</Day>
			)}
		</Container>
	);
}
export default Schedule;
const Container = styled.div``;
const Day = styled.p``;
const CurrentDay = styled.p``;
