import React from "react";

import HeadingUnderline from "./HeadingUnderline.js";

import "./../assets/css/components/headingblock.css";

const HeadingBlock = (props) => {
	let { className, heading1, heading2, isHTML } = props;

	const replaceNewline = (textWithoutBreaks) => {
		let textWithBreaks = textWithoutBreaks.split('<br/>').join('\n');
		return textWithBreaks;
	}

	return (
		<div className={`heading-block__container ${className}`}>
			{!isHTML && <h2>{replaceNewline(heading2)}</h2>}
			{isHTML && <h2 dangerouslySetInnerHTML={{ __html: heading2 }} />}
			{heading2 && <HeadingUnderline />}
			{heading1 && <h1>{replaceNewline(heading1)}</h1>}
		</div>
	)
}

export default HeadingBlock;