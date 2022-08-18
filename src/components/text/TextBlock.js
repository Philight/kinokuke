import React from "react";

import SectionSubheading from "./SectionSubheading.js";
import Functions from "../utility/Functions.js";

import "../../assets/css/components/textblock.css";

const TextBlock = (props) => {
	let { className, children, heading, text, isHTML } = props;

	return (
		<section className={`text-block__container section ${className}`}>
			<div className="text-block__inner-section">
				{heading && <SectionSubheading subheading={Functions.strReplaceNewline(heading)} />}
				{!isHTML && <p className="newline-text">{Functions.strReplaceNewline(text)}</p>}
				{isHTML && <div dangerouslySetInnerHTML={{ __html: text }} />}
				{children}
			</div>
		</section>
	)
}

export default TextBlock;