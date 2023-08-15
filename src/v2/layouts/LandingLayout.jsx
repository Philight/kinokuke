import React from "react";

import NavBar from "../components/NavBar.jsx";
//import Footer from "../components/Footer.jsx";

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