import { forwardRef } from "react";
import SectionSubheading from "@components/text/SectionSubheading";
import Functions from "@components/util/Functions";

//import "@css/components/textblock.css";

const TextBlock = forwardRef((props, ref) => {
	let { className, children, heading, text, isHTML } = props;

	return (
		<section className={`text-block__c f-col ${className}`} ref={ref}>
			<div className="text-block__inner">
				{heading && <SectionSubheading subheading={Functions.strReplaceNewline(heading)} />}
				{!isHTML && <p className="newline-text">{Functions.strReplaceNewline(text)}</p>}
				{isHTML && <div dangerouslySetInnerHTML={{ __html: text }} />}
				{children}
			</div>
		</section>
	)
})

export default TextBlock;