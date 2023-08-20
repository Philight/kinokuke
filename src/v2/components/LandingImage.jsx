import React from 'react';
import { Link } from 'react-router-dom';

// const LOGO_URL = './../assets/images/kinokuke-logo.png';

const LandingImage = (props) => {
  let { className, imageSrc, showOverlay, heading1, heading2, btnText, btnSrc } = props;

  return (
    <div className={`landing-image__container ${className}`}>
      <div className='image-wrapper'>
        <img src={imageSrc} />
      </div>
      {showOverlay && <div className='image-overlay absolute-overlay' />}
      <div className='landing-image__content absolute-overlay'>
        <h1>{heading1}</h1>
        <h2>{heading2}</h2>

        {btnText && !btnSrc && (
          <div className='btn-wrapper'>
            <button className='cta-btn'>{btnText}</button>
          </div>
        )}
        {btnText && btnSrc && (
          <div className='btn-wrapper'>
            <Link to={btnSrc}>
              <button className='cta-btn'>{btnText}</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default LandingImage;
