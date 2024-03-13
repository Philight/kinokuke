import React, { useState, useEffect, useRef } from 'react';

import LandingCount from './../components/LandingCount';
import LandingVideo from './../components/LandingVideo';
import LandingImage from './../components/LandingImage';

import './../assets/css/pages/landingpage.css';

import introBkg1 from '../assets/images/intro_01.png';
import introBkg2 from '../assets/images/intro_02.png';
import introBkg3 from '../assets/images/intro_03.png';

import introVideo from '../assets/videos/moving_in.mp4';

import model1 from './../assets/images/landing_models/home-model1.png';
import model2 from './../assets/images/landing_models/home-model2.png';
import model3 from './../assets/images/landing_models/home-model3.png';

const LandingPage = (props) => {
  let { className } = props;

  const [ touchStart, setTouchStart ] = useState(null);
  const [ touchEnd, setTouchEnd ] = useState(null);

  const [ windowHeight, setWindowHeight ] = useState(0);
  const [ isMobile, setIsMobile ] = useState(false);

  const [ stage, setStage ] = useState(1);
  const [ mobStage, setMobStage ] = useState(1);

  const pageRef = useRef();
  //  const sectionRefs = useRef([]);
  const wheelTimeout = useRef();
  const [ ts, setTs ] = useState(performance.now());
  const [ changingStage, setChangingStage ] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    if (window.innerWidth < 768) {
      setIsMobile(true);
    }
    setWindowHeight(window.innerHeight);
  }, []);

  useEffect(() => {
    // sectionRefs.current[stage].scrollIntoView({ behavior: 'smooth', block: 'start' });
    // console.log(sectionRefs);
    setTimeout(() => {
      setChangingStage(false);
    }, 1500);
  }, [ ts ]);

  const handleWheel = (e) => {
    //    console.log('onWheel');
    //    console.log(parseInt(e.deltaY));
    //    setWheelDown(parseInt(e.deltaY, 10) > 0 ? true : false);

    wheelTimeout.current = true;
    if (changingStage === false) {
      setChangingStage(true);
      if (parseInt(e.deltaY, 10) > 0) {
        const newStage = stage + 1 > 5 ? 5 : stage + 1;
        setStage(newStage);
        setTs(performance.now());
      } else {
        const newStage = stage - 1 < 1 ? 1 : stage - 1;
        setStage(newStage);
        setTs(performance.now());
      }
    }

    // while wheel is moving, do not release the lock
    clearTimeout(wheelTimeout.current);

    // flag indicating to lock page scrolling (setTimeout returns a number)
    wheelTimeout.current = setTimeout(() => {
      wheelTimeout.current = false;
    }, 300);
  };

  /*
  const onWheel = (e) => {
    // ... some code I needed ...
    wheelTimeout.current = true;
	    // while wheel is moving, do not release the lock
	    clearTimeout(wheelTimeout.current)

	    // flag indicating to lock page scrolling (setTimeout returns a number)
	    wheelTimeout.current = setTimeout(() => {
	      wheelTimeout.current = false
	    }, 300)
  };
*/
  /*
  const evaluateStage = (offsetTop) => {
    if (offsetTop > -(windowHeight * 0.5)) {
      // 60 vh
      setMobStage(1);
    } else if (offsetTop <= -(windowHeight * 0.5) && offsetTop > -(windowHeight * (0.6 + 0.5))) {
      setMobStage(2);
    } else if (
      offsetTop <= -(windowHeight * (0.6 + 0.5)) &&
      offsetTop > -(windowHeight * (0.6 + 0.6 + 0.6))
    ) {
      setMobStage(3);
    } else {
      setMobStage(4);
    }
  };
*/
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    console.log('onTouchStart');
    setTouchEnd(null); // otherwise the swipe is fired even with usual touch events
    setTouchStart(e.targetTouches[0].clientY);
  };

  const onTouchMove = (e) => {
    console.log('onTouchMove');
    setTouchEnd(e.targetTouches[0].clientY);

    //    setMovePageYOffset(pageRef.current.getBoundingClientRect().top);

    // evaluateStage(pageRef.current.getBoundingClientRect().top);
  };

  const onTouchEnd = () => {
    console.log('onTouchEnd');

    if (!touchStart || !touchEnd) {
      return;
    }

    const distance = touchStart - touchEnd;
    console.log('touchStart');
    console.log(touchStart);
    console.log('touchEnd');
    console.log(touchEnd);
    const isUpSwipe = distance > minSwipeDistance;
    const isDownSwipe = distance < -minSwipeDistance;

    if (isUpSwipe) {
      console.log('swipe', isUpSwipe ? 'up' : 'down');
      let newStage = mobStage + 1 > 4 ? 4 : mobStage + 1;
      setMobStage(newStage);
      // setSwipeDown(false);
      //      setSwipeT(performance.now());
    } else if (isDownSwipe) {
      console.log('swipe', isUpSwipe ? 'up' : 'down');
      let newStage = mobStage - 1 < 1 ? 1 : mobStage - 1;
      setMobStage(newStage);
      // setSwipeDown(true);
      //      setSwipeT(performance.now());
    }

    //    setEndPageYOffset(pageRef.current.getBoundingClientRect().top);
  };

  useEffect(() => {
    //      const cancelWheel = (e) => wheelTimeout.current && e.preventDefault();
    //      document.body.addEventListener('wheel', cancelWheel, {passive:false});

    const handleScrollTest = () => {
      console.log('window.scrollY', window.scrollY);
    };
    document.body.addEventListener('scroll', handleScrollTest, { passive: false });

    return () => {
      // document.body.removeEventListener('wheel', cancelWheel)
      document.body.removeEventListener('scroll', handleScrollTest);
    };
  }, []);

  useEffect(() => {
    console.log('mobStage ueffect');

    let scrollBy = windowHeight * 0.6 * (mobStage - 1);
    if (mobStage === 4) {
      scrollBy = windowHeight * 0.6 * (mobStage - 1) + windowHeight * 0.4;
    }
    document.querySelector('.v2.landing-layout__container').scrollTo(0, scrollBy);
  }, [ mobStage ]);
  /*
	const handleScroll = (e) => {
console.log('handleScroll');
		const currentScrollY = e.target.scrollTop;
		if (prevScrollY.current < currentScrollY && goingUp) {
		  setGoingUp(false);
		}
		if (prevScrollY.current > currentScrollY && !goingUp) {
		  setGoingUp(true);
		}
		prevScrollY.current = currentScrollY;
		console.log(goingUp, currentScrollY);
	};
*/
  return (
    <main
      className={`landing-page__container ${className} ${
        isMobile ? 'is-mobile' : ''
      } mobile-stage-${mobStage}`}
      onWheel={(e) => handleWheel(e)}
      ref={pageRef}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      //			onScroll={handleScroll}
    >
      <section className={`intro-section section-1 ${stage >= 2 ? 'stage-2' : ''}`}>
        <div className='flex-row-2'>
          <LandingImage
            className='model model-1'
            //						imageSrc="https://connect-homes.com/wp-content/themes/default/library/img/home-model1-0x0-c-center.jpg"
            imageSrc={model1}
          />
          <LandingCount number='1' max='3' />
        </div>
        <LandingImage
          className='picture-1'
          //          imageSrc='https://connect-homes.com/wp-content/uploads/2020/02/ConnectShowcaseMarVista_12-1600x1600-c-center.jpg'
          imageSrc={introBkg1}
          showOverlay
          heading1='Vyberte si svoj Kino Kuke Domov'
          heading2='Vyberte si z 11 Kino Kuke Domovov a vybudujte si svoj dom snov za cenu ktorú si možete dovoliť.'
          btnText='Nájdi svoj Kino Kuke Domov'
          btnSrc='/v2/models'
        />
      </section>

      <section
        className={`intro-section section-2 ${stage >= 2 ? 'stage-2' : ''} ${
          stage >= 3 ? 'stage-3' : ''
        }`}
      >
        <LandingImage
          className='model model-2'
          //					showOverlay
          //					imageSrc="https://connect-homes.com/wp-content/themes/default/library/img/home-model2-0x0-c-center.jpg"
          imageSrc={model2}
          heading1='My ho postavíme'
          heading2='Vybudujeme Váš Kino Kuke Domov v našej prefab továrňi v Rakúsku. Myslíme, že všetky domy by mali byť takto budované.'
          btnText='Pozri si ako to funguje'
          btnSrc='/v2/process'
        />
        <div className='flex-row-2'>
          <LandingImage
            className='picture-2'
            //            imageSrc='https://connect-homes.com/wp-content/uploads/2022/01/Fac-1-1600x1600-c-center.jpg'
            imageSrc={introBkg2}
            showOverlay
            heading1='My ho postavíme'
            heading2='My vybudujeme Váš Kino Kuke Domov v našej prefab továrňi v Rakúsku. Myslíme, že všetky domy by mali byť takto budované.'
            btnText='Pozri ako to funguje'
            btnSrc='/v2/process'
          />
          <LandingCount number='2' max='3' />
        </div>
      </section>

      <section className={`intro-section section-3 ${stage >= 3 ? 'stage-3' : ''}`}>
        <div className='flex-row-2'>
          <LandingImage
            className='model model-3'
            //						imageSrc="https://connect-homes.com/wp-content/themes/default/library/img/home-model3-0x0-c-center.jpg"
            imageSrc={model3}
          />
          <LandingCount number='3' max='3' />
        </div>
        <LandingImage
          className='picture-3'
          //          imageSrc='https://connect-homes.com/wp-content/uploads/2020/01/home_install-1-1600x1600-c-center.jpg'
          imageSrc={introBkg3}
          showOverlay
          heading1='My ho doručíme a nainštalujeme'
          heading2='Náš tým sa postará o kompletnú donášku a inštaláciu. Nemusíte pohnúť ani prstom.'
          btnText='Prečo Kino Kuke?'
          btnSrc='/v2/process'
        />
      </section>
      <section className={`intro-section section-4 ${stage >= 4 ? 'stage-4' : ''}`}>
        <LandingVideo
          videoSrc={introVideo}
          heading1='Vy sa iba nasťahujete'
          heading2='Nové susedstvo - nie je treba.'
          btnText='Prezri si Kino Kuke Domovy'
          btnSrc='/v2/models'
        />
      </section>
    </main>
  );
};

export default LandingPage;
