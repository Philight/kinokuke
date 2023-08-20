import LOGO_PRIMETECH from '@images/logo/kk-primetech.png';

const KinoKukeLogo = (props) => {
  let { className, isWhite } = props;

  return (
    <figure className={`logo__c ${isWhite ? 'white' : 'black'} ${className}`}>
      { !isWhite && <img src={LOGO_PRIMETECH} loading={'lazy'} /> }
      { isWhite && <img src={LOGO_PRIMETECH} loading={'lazy'} /> }
    </figure>
  );
};

export default KinoKukeLogo;
