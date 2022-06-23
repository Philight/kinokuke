import React, { useEffect, useState } from 'react';

import Icon from "../components/Icon.js";
//import "./../assets/css/components/googlemap.css";

const ProcessStep = (props) => {
//	let { className, redirectUrl, socialFacebookUrl, socialInstagramUrl, title, subtitle, description, subdescription } = props;
	let { className, step } = props;
	
	const [contentShown, setContentShown] = useState(false);

	const handleReveal = () => {
		setContentShown(prevValue => !prevValue);

		setTimeout(() => { setContentShown(false) }, 4000);
	}

	return (
		<div className={`process-step__container ${contentShown ? 'show-content' :''}`} onClick={handleReveal}>
			<div className="process-step__background" style={{ backgroundColor: step.color }}></div>
			<div className="process-step__title">
				<Icon icon={step.icon} />
				<h3>{step.title}</h3>
				<Icon icon="tap-finger" />
			</div>
			<div className="process-step__content">
				<h3>{step.title}</h3>
				<p>{step.text}</p>
			</div>
		</div>
	)
}

export default ProcessStep;
