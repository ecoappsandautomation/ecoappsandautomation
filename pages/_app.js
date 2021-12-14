import Header from "../components/Header";
import "../styles/globals.css";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import store from "../store";
import { AnimatePresence } from "framer-motion";
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
			<AnimatePresence>
				<Provider store={store}>
					<GlobalStyle />
					<Header />
					<Component {...pageProps} />
				</Provider>
			</AnimatePresence>
		</>
	);
}

export default MyApp;
