import { useState } from 'react';

import { Icon, Layer, Image } from '@components/graphic';
import { DEFAULT_SIZES_BREAKPOINTS } from '@data';
import { createArrayGroups, useDeviceDimensions } from '@utils';

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

const sizesBreakpoints = Object.keys(DEFAULT_SIZES_BREAKPOINTS).reduce(
  (acc, bp) => ({
    ...acc,
    [bp]: `calc(100vw / ${getGridDimensions(bp).cols})`
  }),
  {}
);

const ProcessStep = (props) => {
  let { className, step } = props;

  const [ isRevealed, setIsRevealed ] = useState(false);

  const handleReveal = () => () => {
    if (!isRevealed) {
      setIsRevealed(true);
    }
  };

  return (
    <div
      className={`process-step__c ${className}
				${isRevealed ? 'revealed' : ''}
			`}
      onClick={handleReveal}
      onMouseOver={handleReveal()}
    >
      {/*
      <Layer
        className={`process-step__background`}
        style={{ '--step-background': `url(${step.imageSrc})` }}
      />
*/}
      <Image
        className={`process-step__background abs-fill-parent`}
        src={step.imageSrc}
        sizesBreakpoints={sizesBreakpoints}
        withSizes
        largestSize='md'
        style={{ '--step-background': `url(${step.imageSrc})` }}
      />
      <Layer className={`process-step__overlay`} style={{ '--step-overlay-color': step.color }} />

      <div className='process-step__content absolute-center f-center f-col'>
        <Icon icon={step.icon} />
        <h3>{step.title}</h3>
        <p>{step.text}</p>
      </div>
    </div>
  );
};

const ProcessSteps = (props) => {
  let { className, steps } = props;

  const { DEVICE_TYPE, DEVICE_IS_TOUCH } = useDeviceDimensions();
  const COLUMNS = getGridDimensions(DEVICE_TYPE).cols;
  const ROWS = getGridDimensions(DEVICE_TYPE).rows;

  return (
    <div
      className={`
			process-steps__c f-grid cols-${COLUMNS} rows-${ROWS} ${className} 
			${!DEVICE_IS_TOUCH ? 'enable-hover' : ''}
		`}
    >
      {createArrayGroups(COLUMNS, steps).map((gridRow, rowIndex) => (
        <div key={`f-grid-row-${rowIndex}`} className='f-grid-row'>
          {gridRow.map((step, index) => (
            <div key={`f-grid-item-${index}`} className='f-grid-item'>
              <ProcessStep step={step} index={index} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ProcessSteps;
