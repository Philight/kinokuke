import React from "react";

//import "./../assets/css/components/headingblock.css";

const FullwidthHeading = (props) => {
	let { heading1, heading2, className } = props;
	return (
		<h1 className={`fullwidth-heading ${className}`}>
			{heading1.replace('<br/>', '\n')} <span>{heading2.replace('<br/>', '\n')}</span>
		</h1>
	)
}

export default FullwidthHeading;