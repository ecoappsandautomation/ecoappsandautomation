import Header from "../components/Header";
import "../styles/globals.css";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import store from "../store";
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;
function MyApp({ Component, pageProps }) {
	return (
		<>
			<Provider store={store}>
				<GlobalStyle />
				<Header />
				<Component {...pageProps} />
			</Provider>
		</>
	);
}

export default MyApp;
