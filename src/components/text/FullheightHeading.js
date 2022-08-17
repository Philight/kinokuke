import React from "react";

//import "./../assets/css/components/headingblock.css";

const FullheightHeading = (props) => {
	let { heading1, heading2, className } = props;
	return (
		<h1 className={`fullheight-heading ${className}`}>
			<span className="heading1">{heading1.replace('<br/>', '\n')}</span>
			<br/>
			<span className="heading2">{heading2.replace('<br/>', '\n')}</span>
		</h1>
	)
}

export default FullheightHeading;