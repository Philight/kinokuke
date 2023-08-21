import { useLayoutEffect, useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';

import { Icon, Layer, Logo } from '@components/graphic';

const NavigationBar = (props) => {
  let { className } = props;

  const [ scrollOffset, setScrollOffset ] = useState(0);

  const [ scrollDown, setScrollDown ] = useState(false);

  const navRef = useRef(null);

  const [ hideNavigation, setHideNavigation ] = useState(false);
  const [ menuShown, setMenuShown ] = useState(false);
  const [ submenuShown, setSubmenuShown ] = useState(false);

  useEffect(() => {
    const closeNav = (e) => {
      if (
        !e.target.closest('.navigation-bar__wrapper ') ||
        e.target.closest('.navigation-bar__link')
      ) {
        setMenuShown(false);
        setSubmenuShown(false);
      }
    };

    window.addEventListener('click', closeNav, { passive: true });

    return () => window.removeEventListener('click', closeNav);
  }, []);

  useEffect(() => {
    window.addEventListener('hidenavigation', (e) => {
      setHideNavigation(e.detail);
    });

    return () => window.removeEventListener('hidenavigation', null);
  }, []);

  useEffect(() => {
    if (scrollOffset > 100) {
      setScrollDown(true);
    } else {
      setScrollDown(false);
    }
  }, [ scrollOffset ]);

  useLayoutEffect(() => {
    const onScroll = () => {
      setScrollOffset(window.pageYOffset);
    };

    // clean up code
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleBurgerShow = () => {
    if (menuShown) {
      setMenuShown(false);
      setSubmenuShown(false);
    } else {
      setMenuShown(true);
    }
  };

  return (
    <div
      className={`
			navigation-bar__c ${className}
      ${menuShown ? 'menu-shown' : ''}
			${submenuShown ? 'submenu-shown' : ''}
			${hideNavigation ? 'hidden' : ''} 
			${scrollDown ? 'scrolling' : ''}
		`}
    >
      <Layer className='navigation-bar__background' />
      <div className={`navigation-bar__wrapper `} ref={navRef}>
        <Link to='/' className='navigation-bar__logo' role='button'>
          <Logo />
        </Link>

        <div className='navigation-bar__findyourhome show-mobile'>
          <Link to='/findyourhome' className='navigation-bar__findyourhome-button' role='button'>
            NÁJDI SVOJ DOMOV
          </Link>
        </div>

        <div className='navigation-bar__burger'>
          <Icon
            className='burger-control open show-mobile'
            icon='menu-medium'
            onClick={handleBurgerShow}
          />
          <Icon
            className='burger-control close show-mobile'
            icon='x-mark-oval'
            onClick={handleBurgerShow}
          />
        </div>

        <nav className='navigation-bar__navigation'>
          <ul className='navigation-bar__navigation-container left' data-level='1'>
            <li
              className={`navigation-bar__navigation-item has-child ${
                submenuShown ? 'selected' : ''
              }`}
              data-level='1'
            >
              <Link to='/design/features' className={`navigation-bar__link`}>
                <span className='navigation-bar__navigation-item-label'>dizajn</span>
              </Link>
            </li>
            <li className='navigation-bar__navigation-item' data-level='1'>
              <Link to='/process' className='navigation-bar__link'>
                <span className='navigation-bar__navigation-item-label'>proces</span>
              </Link>
            </li>
            <li
              className='navigation-bar__navigation-item navigation-bar__findyourhome show-desktop'
              data-level='1'
            >
              <Link
                to='/findyourhome'
                className='navigation-bar__findyourhome-button'
                role='button'
              >
                NÁJDI SVOJ DOMOV
              </Link>
            </li>
          </ul>
          <ul className='navigation-bar__navigation-container right' data-level='1'>
            <li className='navigation-bar__navigation-item' data-level='1'>
              <Link to='/about' className='navigation-bar__link'>
                <span className='navigation-bar__navigation-item-label'>o nás</span>
              </Link>
            </li>
            <li className='navigation-bar__navigation-item' data-level='1'>
              <Link to='/gallery' className='navigation-bar__link'>
                <span className='navigation-bar__navigation-item-label'>galéria</span>
              </Link>
            </li>
            <li className='navigation-bar__navigation-item' data-level='1'>
              <Link to='/contact' className='navigation-bar__link'>
                <span className='navigation-bar__navigation-item-label'>kontakt</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavigationBar;
