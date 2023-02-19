import React from "react";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Main from "./layout/Main";

type Props = {};

const App = (props: Props) => {
	return (
		<React.Fragment>
			<Header />
			<Main />
			<Footer />
		</React.Fragment>
	);
};

export default App;
