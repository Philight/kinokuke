import { useState } from 'react';

import Layer from "@components/graphic/Layer";
import Icon from "@components/graphic/Icon";
import useDeviceDimensions, { createArrayGroups } from "@utils";

const getGridDimensions = (DEVICE_TYPE) => {
  switch (DEVICE_TYPE) {
    case 'MOBILE_SM':
    case 'MOBILE_LG':
      return { rows: 8, cols: 1 };
    case 'TABLET_SM':
    case 'TABLET_MD':
    case 'TABLET_LG':
    case 'DESKTOP_SM':
    case 'DESKTOP_MD':
    case 'DESKTOP_LG':
    case 'DESKTOP_XL':
      return { rows: 4, cols: 2 };
    default:
      return { rows: 8, cols: 1 };
  }
};


const ProcessStep = (props) => {
	let { className, index, step, enableAutoHide, delay } = props;
	
	const [contentShown, setContentShown] = useState(false);
	const [isRevealed, setIsRevealed] = useState(false);

	const handleReveal = () => () => {
		if (!isRevealed) setIsRevealed(true);
	}

	return (
		<div 
			className={`process-step__c 
				${isRevealed ? 'revealed' :''}
			`} 
			onClick={handleReveal}
			onMouseOver={handleReveal()}
		>
			<Layer className={`process-step__background`} 
				style={{ '--step-background': `url(${step.imageSrc})` }}
			/>
			<Layer className={`process-step__overlay`} 
				style={{ '--step-overlay-color': step.color }} 
			/>

			<div className="process-step__content absolute-center f-center f-col">
				<Icon icon={step.icon} />
				<h3>{step.title}</h3>
				<p>{step.text}</p>
			</div>

		</div>
	)
}

const ProcessSteps = (props) => {
	let { className, steps, delay } = props;

  const { DEVICE_TYPE, DEVICE_IS_TOUCH } = useDeviceDimensions();
	const COLUMNS = getGridDimensions(DEVICE_TYPE).cols;
	const ROWS = getGridDimensions(DEVICE_TYPE).rows;

	return (
		<div className={`
			process-steps__c f-grid cols-${COLUMNS} rows-${ROWS} ${className} 
			${!DEVICE_IS_TOUCH? 'enable-hover' :''}
		`}>

			{ createArrayGroups(COLUMNS, steps).map((gridRow, rowIndex) => 
			<div className="f-grid-row">

				{ gridRow.map((step, index) => (
					<div className="f-grid-item">
						<ProcessStep 
							step={step} 
							index={index}
							enableAutoHide
							delay="5000" 
						/>
					</div>
				))}

			</div>
			) }


		</div>
	)
}

export default ProcessSteps;
