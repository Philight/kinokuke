import React, { useEffect, useState } from 'react';

import ProcessStep from "../components/ProcessStep.js";
import Icon from "../components/Icon.js";
//import "./../assets/css/components/googlemap.css";

const ProcessSteps = (props) => {
//	let { className, redirectUrl, socialFacebookUrl, socialInstagramUrl, title, subtitle, description, subdescription } = props;
	let { className, steps, delay } = props;
	
	//const [contentShown, setContentShown] = useState(false);

	return (
		<div className="process-steps__container">
			<div className="process-steps__steps-container">
				{ steps.map((step, index) => (
					<ProcessStep 
						step={step} 
						index={index}
						enableAutoHide
						delay="5000" 
					/>
				))}
			</div>
		</div>
	)
}

export default ProcessSteps;
