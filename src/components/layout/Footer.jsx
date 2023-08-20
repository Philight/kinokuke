import { Link } from 'react-router-dom';

import Layer from '@components/graphic/Layer';
import KinoKukeLogo from '@components/util/KinoKukeLogo';
import Icon from '@components/graphic/Icon';
import useDeviceDimensions from '@utils';

const INSTAGRAM_URL = 'https://www.instagram.com/kkprimetech/';

const Footer = (props) => {
  let { className } = props;
  const { DEVICE_WIDTH } = useDeviceDimensions();
  const IS_MOBILE = DEVICE_WIDTH <= 480;

  return (
    <section className={`footer__c f-col ${className}`}>
      <Layer className='footer__background' />

      <nav className='footer__navigation'>
        <div className='footer__navigation-container-section top f-full'>
          <ul className='footer__navigation-container left' data-level='1'>
            <li className='footer__navigation-item' data-level='1'>
              <Link to='/design/features'>DIZAJN</Link>
            </li>
            <li className='footer__navigation-item' data-level='1'>
              <Link to='/process'>PROCES</Link>
            </li>
            <li className='footer__navigation-item findyourhome' data-level='1'>
              <Link to='/findyourhome'>Nájdi svoj domov</Link>
            </li>
          </ul>
          <ul className='footer__navigation-container right' data-level='1'>
            <li className='footer__navigation-item' data-level='1'>
              <Link to='/about'>O NÁS</Link>
            </li>
            <li className='footer__navigation-item' data-level='1'>
              <Link to='/gallery'>GALÉRIA</Link>
            </li>
            <li className='footer__navigation-item' data-level='1'>
              <Link to='/contact'>KONTAKT</Link>
            </li>
          </ul>
        </div>

        <div className='footer__navigation-container-section bottom'>
          <ul className='footer__navigation-container bottom' data-level='1'>
            <li className='footer__navigation-item gdpr' data-level='1'>
              <Link to='/gdpr'>* Ochrana osobných údajov</Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className='footer__bottom'>
        <div className='footer__logo-slogan'>
          <KinoKukeLogo isWhite />
          {IS_MOBILE && (
            <span className='footer__logo-slogan-text'>
              Lepší Začiatok.
              <br />
              Lepší Domov.
              <br />
              <span>Lepší Život</span>
            </span>
          )}
          {!IS_MOBILE && (
            <span className='footer__logo-slogan-text'>
              Lepší Začiatok. Lepší Domov. <span>Lepší Život</span>
            </span>
          )}
        </div>
        <div className='footer__social'>
          <Icon icon='facebook' className='facebook' />
          <a
            className='footer__social--instagram'
            href={INSTAGRAM_URL}
            target='_blank'
            rel='noreferrer'
          >
            <Icon icon='instagram' className='instagram' />
          </a>
          <Icon icon='youtube' className='youtube' />
          <Icon icon='linkedin' className='linkedin' />
        </div>
      </div>
      <div className='footer-copyright'>
        Copyright © {new Date().getFullYear()} KK PrimeTech. All rights reserved.
      </div>
    </section>
  );
};

export default Footer;
