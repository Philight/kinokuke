import React from "react";

import Functions from "../utility/Functions.js";

import "../../assets/css/components/headingwithbackground.css";

const HeadingWithBackground = (props) => {
	let { className, heading, isHTML } = props;

	return (
		<div className={`heading-with-background__container ${className}`}>
			{heading && !isHTML && <h1>{Functions.strReplaceNewline(heading)}</h1>}
			{heading && isHTML && <h1 dangerouslySetInnerHTML={{ __html: heading }} />}
		</div>
	)
}

export default HeadingWithBackground;