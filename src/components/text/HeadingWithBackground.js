import React from "react";

import "../../assets/css/components/headingwithbackground.css";

const HeadingWithBackground = (props) => {
	let { className, heading, isHTML } = props;

	const replaceNewline = (textWithoutBreaks) => {
		let textWithBreaks = textWithoutBreaks.split('<br/>').join('\n');
		return textWithBreaks;
	}

	return (
		<div className={`heading-with-background__container ${className}`}>
			{heading && !isHTML && <h1>{replaceNewline(heading)}</h1>}
			{heading && isHTML && <h1 dangerouslySetInnerHTML={{ __html: heading }} />}
		</div>
	)
}

export default HeadingWithBackground;