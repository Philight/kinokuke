import React from 'react';
// const LOGO_URL = './../assets/images/kinokuke-logo.png';

const ProcessSteps = (props) => {
  //	let { className, redirectUrl, socialFacebookUrl, socialInstagramUrl, title, subtitle, description, subdescription } = props;
  let { className, data, currentStage } = props;

  return (
    <div className={`process-steps__container ${className}`}>
      <div className='process-steps__inner-container'>
        <div className='process-steps__steps-wrapper'>
          {data.map((item, index) => (
            <div
              key={`item-${index}`}
              className={`step-wrapper ${currentStage >= index + 1 ? 'active' : ''}`}
            >
              <div className='step-description'>
                <h4>{item.title}</h4>
                <h4>{item.description}</h4>
              </div>
              <div className={`step-visual`}>
                {index === 0 ? '' : <div className='process-steps__progress' />}
                <div className='outer-dot'>
                  <div className='inner-dot' />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProcessSteps;
