import React from "react";

const HeadingUnderline = (props) => {
	let { color } = props;
	return (
		<div className="underline__container" style={{backgroundColor: color}}></div>
	)
}

export default HeadingUnderline;