import React from "react";

import SectionSubheading from "./SectionSubheading.js";

import "./../assets/css/components/textblock.css";

const TextBlock = (props) => {
	let { className, heading, text, isHTML } = props;

	const replaceNewline = (textWithoutBreaks) => {
		let textWithBreaks = textWithoutBreaks.split('<br/>').join('\n');

		//textWithBreaks = textWithoutBreaks.split('<br/>').join('');
//console.log(textWithBreaks);
		return textWithBreaks;
	}

	return (
		<div className={`text-block__container section ${className}`}>
			<div className="text-block__inner-section">
				{heading && <SectionSubheading subheading={replaceNewline(heading)} />}
				{!isHTML && <p className="newline-text">{replaceNewline(text)}</p>}
				{isHTML && <div dangerouslySetInnerHTML={{ __html: text }} />}
			</div>
		</div>
	)
}

export default TextBlock;