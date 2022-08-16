import React from "react";

//import "./../assets/css/components/headingblock.css";

const SectionSubheading = (props) => {
	let { subheading, className } = props;

	const replaceNewline = (textWithoutBreaks) => {
		let textWithBreaks = textWithoutBreaks.split('<br/>').join('\n').split('<br />').join('\n');

		return textWithBreaks;
	}

	return (
		<h2 className={`section-subheading newline-text ${className}`}>{replaceNewline(subheading)}</h2>
	)
}

export default SectionSubheading;