import React, { useState, useEffect, useLayoutEffect, useRef } from "react";

import LandingCount from "./../components/LandingCount";
import LandingVideo from "./../components/LandingVideo";
import LandingImage from "./../components/LandingImage";

//import HeadingBlock from "./HeadingBlock.jsx";
//import DescriptionWithImage from "./DescriptionWithImage.jsx";
//import HousesShowcase from "./HousesShowcase.jsx";
//import DesignAndArchitecture from "./DesignAndArchitecture.jsx";
//import SocialGrid from "./SocialGrid.jsx";
//import NewsletterSection from "./NewsletterSection.jsx";

import "./../assets/css/pages/landingpage.css";

import model1 from "./../assets/images/landing_models/home-model1.png";
import model2 from "./../assets/images/landing_models/home-model2.png";
import model3 from "./../assets/images/landing_models/home-model3.png";


const LandingPage = (props) => {
//	let { className, redirectUrl, socialFacebookUrl, socialInstagramUrl, title, subtitle, description, subdescription } = props;

    const [scrollOffset, setScrollOffset] = useState(0);
	const [scrollDown, setScrollDown] = useState(null);


	//const prevScrollY = useRef(0);
	//const [goingUp, setGoingUp] = useState(false);

const [touchStart, setTouchStart] = useState(null)
const [touchEnd, setTouchEnd] = useState(null)




	const [wheelDown, setWheelDown] = useState(null);
	const [swipeDown, setSwipeDown] = useState(null);

	const [windowHeight, setWindowHeight] = useState(0);
	const [isMobile, setIsMobile] = useState(false);

	const [movePageYOffset, setMovePageYOffset] = useState(0);
	const [endPageYOffset, setEndPageYOffset] = useState(0);

	const [stage, setStage] = useState(1);
	const [mobStage, setMobStage] = useState(1);

	const pageRef = useRef();
	const sectionRefs = useRef([]);
	const wheelTimeout = useRef();
	const [swipeT, setSwipeT] = useState(null);
	const [ts, setTs] = useState(performance.now());
	const [changingStage, setChangingStage] = useState(false);

	useEffect(() => {
		window.scrollTo(0, 0);

		if(window.innerWidth < 768) {
			setIsMobile(true);
		}
		setWindowHeight(window.innerHeight);
	}, [])

	useEffect(() => {
		//sectionRefs.current[stage].scrollIntoView({ behavior: 'smooth', block: 'start' });
//console.log(sectionRefs);
		setTimeout(() => {  
			setChangingStage(false); 
		}, 1500);
	}, [ts])

	const handleWheel = (e) => {
console.log('onWheel');
console.log(parseInt(e.deltaY));
		parseInt(e.deltaY) > 0 ? setWheelDown(true) : setWheelDown(false);

	    wheelTimeout.current = true;
		if (changingStage == false) {
			setChangingStage(true);
			if (parseInt(e.deltaY) > 0) {
				const newStage = (stage+1) > 5 ? 5 : (stage+1);
				setStage(newStage); setTs(performance.now());
			} else {
				const newStage = (stage-1) < 1 ? 1 : (stage-1);
				setStage(newStage); setTs(performance.now());
			}
		}

	    // while wheel is moving, do not release the lock
	    clearTimeout(wheelTimeout.current)

	    // flag indicating to lock page scrolling (setTimeout returns a number)
	    wheelTimeout.current = setTimeout(() => {
	      wheelTimeout.current = false;
	    }, 300)
	}

	const onWheel = e => {
	    // ... some code I needed ...
	    wheelTimeout.current = true;
/*
	    // while wheel is moving, do not release the lock
	    clearTimeout(wheelTimeout.current)

	    // flag indicating to lock page scrolling (setTimeout returns a number)
	    wheelTimeout.current = setTimeout(() => {
	      wheelTimeout.current = false
	    }, 300)
*/
	}

	const evaluateStage = (offsetTop) => {
		if (offsetTop > -(windowHeight*0.5)) { // 60 vh
			setMobStage(1);
		
		} else if ( offsetTop <= -(windowHeight*0.5) && offsetTop > -(windowHeight*(0.6+0.5)) ) {
			setMobStage(2);

		} else if ( offsetTop <= -(windowHeight*(0.6+0.5)) && offsetTop > -(windowHeight*(0.6+0.6+0.6)) ) {
			setMobStage(3);

		} else {
			setMobStage(4);
		}
	}

	const minSwipeDistance = 50; 

	const onTouchStart = (e) => {
console.log('onTouchStart');
	  setTouchEnd(null) // otherwise the swipe is fired even with usual touch events
	  setTouchStart(e.targetTouches[0].clientY)
	}
	
	const onTouchMove = (e) => {
console.log('onTouchMove');
		setTouchEnd(e.targetTouches[0].clientY)

		setMovePageYOffset(pageRef.current.getBoundingClientRect().top); 

		//evaluateStage(pageRef.current.getBoundingClientRect().top);
	}

	const onTouchEnd = (e) => {
console.log('onTouchEnd');

  		if (!touchStart || !touchEnd) return

		const distance = touchStart - touchEnd;
console.log('touchStart');
console.log(touchStart);
console.log('touchEnd');
console.log(touchEnd);
		const isUpSwipe = distance > minSwipeDistance;
		const isDownSwipe = distance < -minSwipeDistance;

		if (isUpSwipe) {
console.log('swipe', isUpSwipe ? 'up' : 'down');
			let newStage = mobStage+1 > 4 ? 4 : mobStage+1;
			setMobStage(newStage);
			//setSwipeDown(false); 
			setSwipeT(performance.now());
	
		} else if (isDownSwipe) {
console.log('swipe', isUpSwipe ? 'up' : 'down')
			let newStage = mobStage-1 < 1 ? 1 : mobStage-1;
			setMobStage(newStage);
			//setSwipeDown(true); 
			setSwipeT(performance.now());
		}

		setEndPageYOffset(pageRef.current.getBoundingClientRect().top); 
	}

	useEffect(() => {
	    const cancelWheel = e => wheelTimeout.current && e.preventDefault()
	    //document.body.addEventListener('wheel', cancelWheel, {passive:false});

	    const handleScrollTest = event => {
	      console.log('window.scrollY', window.scrollY);
	    };
	    document.body.addEventListener('scroll', handleScrollTest, { passive: false });

	    return () => {
	    	//document.body.removeEventListener('wheel', cancelWheel)
	    	document.body.removeEventListener('scroll', handleScrollTest);
	    }
	}, [])

	useEffect(() => {
console.log('mobStage ueffect')	;	

		let scrollBy = windowHeight*0.6 *(mobStage-1);
		if (mobStage == 4) {
			scrollBy = windowHeight*0.6 *(mobStage-1) + windowHeight*0.4;
		} 
		document.querySelector(".v2.landing-layout__container").scrollTo(0, scrollBy);

	}, [mobStage])
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
	const testScroll = e => {
		//window.scroll(0,0);
		//window.scrollTo(0,0);
		//document.querySelector("body").scrollTo(0, 300);
		const scrollBy = windowHeight *0.6;
		document.querySelector(".v2.landing-layout__container").scrollBy(0, scrollBy);

		//window.scrollBy(0, 100);
		const element = document.querySelector('.v2 .section-2');

		//element.scrollIntoView();
		//element.scrollTo(0,300);
		//element.scroll(0,300);
		//element.scrollBy(0, 100);
	}

	return (
		<div 
			className={`landing-page__container ${isMobile ? 'is-mobile' :''} mobile-stage-${mobStage}`} 
			onWheel={(e) => handleWheel(e)} 
			ref={pageRef}
			onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}
//			onScroll={handleScroll}
		>
{/*

			<div style={{color: '#fff', position: 'fixed', zIndex: '100', top: 0, background: '#000'}}>
				S:{stage},MS:{mobStage}, {wheelDown ? 'DOWN' : 'UP'}, H:{windowHeight}, isMob:{isMobile ? 'Y' : 'N'}, MoveTop:{movePageYOffset}, EndTop:{endPageYOffset} 
				<button onClick={testScroll}>SCROLL</button>
			</div>
*/}
			<section className={`intro-section section-1 ${stage>=2 ? 'stage-2' :''}`}>			
				<div className="flex-row-2">
					<LandingImage
						className="model model-1"
//						imageSrc="https://connect-homes.com/wp-content/themes/default/library/img/home-model1-0x0-c-center.jpg" 
						imageSrc={model1} 
					/>
					<LandingCount number="1" max="3" />
				</div>
				<LandingImage 
					className="picture-1"
					imageSrc="https://connect-homes.com/wp-content/uploads/2020/02/ConnectShowcaseMarVista_12-1600x1600-c-center.jpg" 
					showOverlay
					heading1="Vyberte si svoj Kino Kuke Domov"
					heading2="Vyberte si z 11 Kino Kuke Domovov a vybudujte si svoj dom snov za cenu ktorú si možete dovoliť."
					btnText="Nájdi svoj Kino Kuke Domov"
					btnSrc="/v2/models"
				/>
			</section>

			<section className={`intro-section section-2 ${stage>=2 ? 'stage-2' :''} ${stage>=3 ? 'stage-3' :''}`}>
				<LandingImage
					className="model model-2"
//					showOverlay
//					imageSrc="https://connect-homes.com/wp-content/themes/default/library/img/home-model2-0x0-c-center.jpg" 
					imageSrc={model2} 
					heading1="My ho postavíme"
					heading2="Vybudujeme Váš Kino Kuke Domov v našej prefab továrňi v Rakúsku. Myslíme, že všetky domy by mali byť takto budované."
					btnText="Pozri si ako to funguje"
					btnSrc="/v2/process"
				/>
				<div className="flex-row-2">
					<LandingImage 
						className="picture-2"
						imageSrc="https://connect-homes.com/wp-content/uploads/2022/01/Fac-1-1600x1600-c-center.jpg" 
						showOverlay
						heading1="My ho postavíme"
						heading2="My vybudujeme Váš Kino Kuke Domov v našej prefab továrňi v Rakúsku. Myslíme, že všetky domy by mali byť takto budované."
						btnText="Pozri ako to funguje"
						btnSrc="/v2/process"
					/>
					<LandingCount number="2" max="3" />
				</div>
			</section>

			<section className={`intro-section section-3 ${stage>=3 ? 'stage-3' :''}`}>
				<div className="flex-row-2">
					<LandingImage 
						className="model model-3"
//						imageSrc="https://connect-homes.com/wp-content/themes/default/library/img/home-model3-0x0-c-center.jpg" 
						imageSrc={model3}
					/>
					<LandingCount number="3" max="3" />
				</div>
				<LandingImage
					className="picture-3"
					imageSrc="https://connect-homes.com/wp-content/uploads/2020/01/home_install-1-1600x1600-c-center.jpg" 
					showOverlay
					heading1="My ho doručíme a nainštalujeme"
					heading2="Náš tým sa postará o kompletnú donášku a inštaláciu. Vy nemusíte pohnúť ani prstom."
					btnText="Prečo Kino Kuke?"
					btnSrc="/v2/process"
				/>
			</section>
			<section className={`intro-section section-4 ${stage>=4 ? 'stage-4' :''}`}>
				<LandingVideo
					videoSrc="https://connect-homes.com/wp-content/themes/default/library/video/movein.mp4"
					heading1="Vy sa iba nasťahujete"
					heading2="Nové susedctvo - nie je treba."
					btnText="Prezri si Kino Kuke Domovy"
					btnSrc="/v2/models"
				/>
			</section>
		</div>
	)
}

export default LandingPage;