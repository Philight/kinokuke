import React from 'react';

// const LOGO_URL = './../assets/images/kinokuke-logo.png';
// import LOGO from './../assets/images/kinokuke-logo-bw.png';
import LOGOWHITE from './../assets/images/kinokuke-logo-white-transparent.png';
import LOGOBLACK from './../assets/images/kinokuke-logo-black-transparent.png';

const KinoKukeLogo = (props) => {
  let { className, blackFill } = props;

  return (
    <div className={`kinokuke-logo__container ${className}`}>
      <div className='logo-wrapper'>
        {/* <img src={require('./../assets/images/kinokuke-logo.png').default} />*/}
        <img src={!blackFill ? LOGOWHITE : LOGOBLACK} />
      </div>
    </div>
  );
};

export default KinoKukeLogo;
