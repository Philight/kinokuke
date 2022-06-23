import React from "react";

import NavBar from "../components/NavBar.js";
//import Footer from "../components/Footer.js";

const LandingLayout = ({children}) => {
//	let { className, description } = props;

	return (
		<div className="v2 landing-layout__container">
			<NavBar />
			{children}
		
		</div>
	)
}

export default LandingLayout;