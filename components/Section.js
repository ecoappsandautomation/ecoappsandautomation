import React from "react";
import styled from "styled-components";
import MenuItem from "./MenuItem";
function Section({ items }) {
	return (
		<Container>
			{items &&
				Object.entries(items).map(([key, value]) => (
					<SectionContainer key={key}>
						<ItemHeader>{key}</ItemHeader>
						<ItemsContainer>
							{Object.entries(value).map(([key, value]) => {
								return (
									<MenuItem
										title={key}
										key={value.id}
										id={value.id}
										description={value.description}
										price={value.price}
										rating={value.rating}
										image={value.image}
										name={value.name}
										options={value.options}
										availability={value.availability}
									/>
								);
							})}
						</ItemsContainer>
					</SectionContainer>
				))}
		</Container>
	);
}
export default Section;
const Container = styled.div``;

const ItemHeader = styled.h4`
	margin-bottom: 16px;
	font-size: 28px;
	font-weight: 800;
`;

const SectionContainer = styled.div`
	margin-bottom: 16px;
	border-bottom: 1px solid var(--light-colour-3);
	padding-bottom: 16px;
`;

const ItemsContainer = styled.div`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;

	@media (max-width: 600px) {
		display: flex;
		flex-direction: row;
	}
`;
