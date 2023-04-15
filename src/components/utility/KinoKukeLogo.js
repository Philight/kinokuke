import React from "react";

import Icon from "../utility/Icon.js";
//import LOGO from './../assets/images/kinokuke-logo.png';
import LOGO_BLACK from '../../assets/images/logo/kinokuke-logo-black-transparent-v2.png';
import LOGO_WHITE from '../../assets/images/logo/kinokuke-logo-white-transparent-v2.png';
import LOGO_PRIMETECH from '../../assets/images/logo/kk-primetech.png';

const KinoKukeLogo = (props) => {
	let { className, isWhite } = props;

	return (
		<div className={`kinokuke-logo__container ${isWhite ? 'white' : 'black'}`}>
			<figure className="logo-wrapper">
				{ !isWhite && <img src={LOGO_PRIMETECH} loading={"lazy"} /> }
				{ isWhite && <img src={LOGO_PRIMETECH} loading={"lazy"} /> }
			</figure>
{/*
			<Icon icon="kk-primetech" className="logo-wrapper" />
*/}
		</div>
	)
}

export default KinoKukeLogo;