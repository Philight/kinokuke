import React, { useEffect, useState } from 'react';

import Icon from "./utility/Icon.js";

const ProcessStep = (props) => {
//	let { className, redirectUrl, socialFacebookUrl, socialInstagramUrl, title, subtitle, description, subdescription } = props;
	let { className, index, step, enableAutoHide, delay } = props;
	
	const [contentShown, setContentShown] = useState(false);
	const [isRevealed, setIsRevealed] = useState(false);

	const handleReveal = () => {
/*
		setContentShown(prevValue => !prevValue);
		setIsRevealed(true);

		//if (enableAutoHide) { setTimeout(() => { setContentShown(false) }, delay); }
*/
	}

	return (
		<div className={`process-step__container ${isRevealed ? 'revealed' :''} ${contentShown ? 'show-content' :''} s-${index}`} 
			onClick={handleReveal}
		>
			<div className={`process-step__content`}>
				<div className="process-step__background show-mobile" style={{ backgroundImage: `url(${step.imageSrc})` }}></div>
				<div className="process-step__background overlay" style={{ backgroundColor: step.color }}></div>
{/*				
				<div className="process-step__title">
					<Icon icon={step.icon} />
					<h3>{step.title}</h3>
					<Icon icon="tap-finger" />
				</div>
*/}				
				<div className="process-step__inner-content">
					<Icon icon={step.icon} />
					<h3>{step.title}</h3>
					<p>{step.text}</p>
				</div>
			</div>
			<div className={`process-step__picture show-desktop`}>
				<div className="process-step__background picture overlay" style={{ backgroundColor: step.color }}>
					<div className="gradient-circle">
						<span style={{ backgroundColor: '#000' }}/>
						<span style={{ backgroundColor: '#FFF' }}/>
					</div>
					<Icon icon="tap-finger" />
				</div>
				<img src={step.imageSrc} />
			</div>
		</div>
	)
}

export default ProcessStep;
