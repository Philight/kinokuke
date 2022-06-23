import React from "react";

//import "./../assets/css/components/headingblock.css";

const SectionSubheading = (props) => {
	let { subheading, className } = props;
	return (
		<h2 className={`section-subheading ${className}`}>{subheading}</h2>
	)
}

export default SectionSubheading;