
import LOGO_BLACK from '@images/logo/kinokuke-logo-black-transparent-v2.png';
import LOGO_WHITE from '@images/logo/kinokuke-logo-white-transparent-v2.png';
import LOGO_PRIMETECH from '@images/logo/kk-primetech.png';

const KinoKukeLogo = (props) => {
	let { className, isWhite } = props;

	return (
		<figure className={`logo__c ${isWhite ? 'white' : 'black'} ${className}`}>
			{ !isWhite && <img src={LOGO_PRIMETECH} loading={"lazy"} /> }
			{ isWhite && <img src={LOGO_PRIMETECH} loading={"lazy"} /> }
		</figure>
	)
}

export default KinoKukeLogo;