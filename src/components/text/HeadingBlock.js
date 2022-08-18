import React from "react";

import HeadingUnderline from "./HeadingUnderline.js";
import Functions from "../utility/Functions.js";

import "../../assets/css/components/headingblock.css";

const HeadingBlock = (props) => {
	let { className, heading1, heading2, isHTML } = props;

	return (
		<section className={`heading-block__container ${className}`}>
			{!isHTML && <h2>{Functions.strReplaceNewline(heading2)}</h2>}
			{isHTML && <h2 dangerouslySetInnerHTML={{ __html: heading2 }} />}
			{heading2 && <HeadingUnderline />}
			{heading1 && <h1>{Functions.strReplaceNewline(heading1)}</h1>}
		</section>
	)
}

export default HeadingBlock;