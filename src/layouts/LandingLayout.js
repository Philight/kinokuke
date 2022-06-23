import React from "react";

import NavigationBar from "../components/NavigationBar.js";
import Footer from "../components/Footer.js";

const LandingLayout = ({children}) => {
//	let { className, description } = props;

	return (
		<div>
			<NavigationBar />
			{children}
			<Footer />
		</div>
	)
}

export default LandingLayout;