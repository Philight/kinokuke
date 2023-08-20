import React from 'react';

// const LOGO_URL = './../assets/images/kinokuke-logo.png';

const LandingCount = (props) => {
  //	let { className, redirectUrl, socialFacebookUrl, socialInstagramUrl, title, subtitle, description, subdescription } = props;
  let { number, max } = props;

  return (
    <div className='landing-count__container'>
      <div className='landing-count__wrapper'>
        <span className='number'>{number}</span>
        <span className='slash'>/</span>
        <span className='number'>{max}</span>
      </div>
    </div>
  );
};

export default LandingCount;
