
const FullheightHeading = (props) => {
	let { heading1, heading2, className } = props;
	return (
		<h2 className={`fullheight-heading__c ${className}`}>
			<div className={`fullheight-heading__inner absolute-center`}>
				{heading1 && <h3 className="fullheight-heading__heading1">{heading1.replace('<br/>', '\n')}</h3>}
				<br/>
				{heading2 && <h3 className="fullheight-heading__heading2">{heading2.replace('<br/>', '\n')}</h3>}
			</div>
		</h2>
	)
}

export default FullheightHeading;