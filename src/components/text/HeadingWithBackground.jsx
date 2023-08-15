import Functions from "@components/util/Functions";

//import "@css/components/headingwithbackground.css";

const HeadingWithBackground = (props) => {
	let { className, heading, isHTML } = props;

	return (
		<div className={`heading-with-background__c ${className}`}>
			{heading && !isHTML && <h1>{Functions.strReplaceNewline(heading)}</h1>}
			{heading && isHTML && <h1 dangerouslySetInnerHTML={{ __html: heading }} />}
		</div>
	)
}

export default HeadingWithBackground;