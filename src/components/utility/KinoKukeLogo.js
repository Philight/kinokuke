import React from "react";

//import LOGO from './../assets/images/kinokuke-logo.png';
import LOGO_BLACK from '../../assets/images/kinokuke-logo-black-transparent-v2.png';
import LOGO_WHITE from '../../assets/images/kinokuke-logo-white-transparent-v2.png';

const KinoKukeLogo = (props) => {
	let { className, isWhite } = props;

	return (
		<div className={`kinokuke-logo__container ${isWhite ? 'white' : 'black'}`}>
			<div className="logo-wrapper">
			{/*<img src={require('./../assets/images/kinokuke-logo.png').default} />*/}
				{ !isWhite && <img src={LOGO_BLACK} /> }
				{ isWhite && <img src={LOGO_WHITE} /> }
			</div>
		</div>
	)
}

export default KinoKukeLogo;