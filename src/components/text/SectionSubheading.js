import React from "react";

import Functions from "../utility/Functions.js";
//import "./../assets/css/components/headingblock.css";

const SectionSubheading = (props) => {
	let { subheading, className } = props;

	return (
		<h2 className={`section-subheading newline-text ${className}`}>{Functions.strReplaceNewline(subheading)}</h2>
	)
}

export default SectionSubheading;