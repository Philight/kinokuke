import { useState, useEffect, useLayoutEffect, useRef } from 'react';

import ImageBanner from '@components/media/ImageBanner';
import HeadingWithBackground from '@components/text/HeadingWithBackground';

import { GDPR_BASIC, GDPR_COOKIES } from '@data';

const PAGE_TITLES = {
  0: 'Zásady ochrany osobných údajov',
  1: 'Pravidlá cookies'
};

const images = [
  {
    src: 'https://static.vecteezy.com/system/resources/previews/002/822/354/non_2x/abstract-geometric-lines-connection-and-social-network-concept-with-lines-and-dots-minimalistic-design-vector.jpg'
  }
];

const GDPRPage = (props) => {
  let { className } = props;

  const [ currentPage, setCurrentPage ] = useState(0);
  const [ navHeight, setNavHeight ] = useState(0);
  const [ sidebarOffSet, setSidebarOffSet ] = useState(0);
  const [ sidebarIsFixed, setSidebarIsFixed ] = useState(false);

  const sidebarRef = useRef(null);

  useLayoutEffect(() => {
    const rootElement = document.documentElement;
    let nodeStyle = window.getComputedStyle(rootElement);

    setNavHeight(parseInt(nodeStyle.getPropertyValue('--navigation-height').replace('px', ''), 10));

    const onScroll = () => {
      setSidebarOffSet(sidebarRef.current.getBoundingClientRect().top);
    };

    // clean up code
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setSidebarIsFixed(sidebarOffSet - navHeight + 1 > 0 ? false : true);
  }, [ sidebarOffSet, navHeight ]);

  return (
    <div className={`gdpr-page__c ${className}`}>
      <ImageBanner className='gdpr-page__intro-image' images={images} isBkg />

      <div className='gdpr-page__page-content f-col'>
        <HeadingWithBackground heading={PAGE_TITLES[currentPage]} />

        <div className={`gdpr-page__sidebar-wrapper `} ref={sidebarRef}>
          <div className={`gdpr-page__sidebar ${sidebarIsFixed ? 'fixed' : ''}`}>
            <ul className='gdpr-page__navigation'>
              <li
                className={`gdpr-page__navigation-item ${currentPage === 0 ? 'selected' : ''}`}
                onClick={() => setCurrentPage(0)}
              >
                Ochrana osobných údajov
              </li>
              <li
                className={`gdpr-page__navigation-item ${currentPage === 1 ? 'selected' : ''}`}
                onClick={() => setCurrentPage(1)}
              >
                Pravidlá cookies
              </li>
            </ul>
          </div>
          <div
            className={`gdpr-page__sidebar placeholder`}
            style={{ display: `${sidebarIsFixed ? 'block' : 'none'}` }}
          >
            <ul className='gdpr-page__navigation'>
              <li className='gdpr-page__navigation-item'>Ochrana osobných údajov</li>
              <li className='gdpr-page__navigation-item'>Pravidlá cookies</li>
            </ul>
          </div>
        </div>

        <div className='gdpr-page__inner-content'>
          {currentPage === 0 && (
            <div
              className='gdpr-page__content main'
              dangerouslySetInnerHTML={{ __html: GDPR_BASIC }}
            />
          )}
          {currentPage === 1 && (
            <div
              className='gdpr-page__content cookies'
              dangerouslySetInnerHTML={{ __html: GDPR_COOKIES }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default GDPRPage;
