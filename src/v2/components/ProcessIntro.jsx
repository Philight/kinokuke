import React from 'react';

// const LOGO_URL = './../assets/images/kinokuke-logo.png';

const ProcessIntro = React.forwardRef((props, ref) => {
  //	let { className, redirectUrl, socialFacebookUrl, socialInstagramUrl, title, subtitle, description, subdescription } = props;
  let { className, imageSrc, heading1, heading2, btnText, btnClick, showOverlay } = props;

  return (
    <section className={`process-intro__container ${className}`} ref={ref}>
      <div className='process-intro__inner-container'>
        <div className='process-intro__content'>
          <h1>{heading1}</h1>
          <h2>{heading2}</h2>
          {btnText && (
            <div className='btn-wrapper'>
              <button className='cta-btn' onClick={btnClick}>
                {btnText}
              </button>
            </div>
          )}
        </div>
        {showOverlay && <div className='image-overlay absolute-overlay' />}
        <div className='image-wrapper'>
          <img src={imageSrc} />
        </div>
      </div>
    </section>
  );
});

export default ProcessIntro;
