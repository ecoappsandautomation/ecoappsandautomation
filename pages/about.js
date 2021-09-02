import VisibilityListener from "../components/VisibilityListener";
import styled from "styled-components";
function about(props) {
	return (
		<Container>
			<h2>{"Eco Apps's Story Coming Soon..."}</h2>
		</Container>
	);
}
export default about;
const Container = styled.div`
	width: 50vw;
	margin-left: auto;
	margin-right: auto;
	margin-top: 32px;
	> h2 {
		text-align: center;
		font-weight: 500;
	}
`;
