import React, { useState, useEffect, useLayoutEffect, useRef } from "react";

import ProcessIntro from "./../components/ProcessIntro.jsx";
import ParallaxSection from "./../components/ParallaxSection.jsx";
import ProcessSteps from "./../components/ProcessSteps.jsx";

import "./../assets/css/pages/processpage.css";

//import kinokukelogo from "./../assets/images/kinokuke-logo.png";
//import newsletterImage from "./../assets/images/newsletter-image.jpg";

//import milanoURL from "./../assets/images/housemodels/Milano.png";
//import venecijaURL from "./../assets/images/housemodels/Venecija.png";
//import veronaURL from "./../assets/images/housemodels/Verona.png";

const ProcessPage = (props) => {
//	let { className, redirectUrl, socialFacebookUrl, socialInstagramUrl, title, subtitle, description, subdescription } = props;

    const [scrollOffset, setScrollOffset] = useState(0);
	const [scrollDown, setScrollDown] = useState(null);
	const [wheelDown, setWheelDown] = useState(null);

	const [windowHeight, setWindowHeight] = useState(0);
	//const [isMobile, setIsMobile] = useState(false);

	const [stage, setStage] = useState(0);
	const [ts, setTs] = useState(performance.now());

	const [changingStage, setChangingStage] = useState(false);
 	//const changingStage = useRef(false);

	const pageRef = useRef();
	const sectionRefs = useRef([]);
	const wheelTimeout = useRef();

	const parallaxData = [
		{ 
			title: 'Vyber si svoj Kino Kuke Domov', 
			text: 'Či vlastníte pozemok na dedine alebo v meste, nájde sa Kinokuke Domov ušitý na mieru práve pre Vás. Pozrieme sa na Váš pozemok a spoločnými silami vyberieme ten správny Kinokuke Domov, ktorý bude vhodný pre Váš životný štýl a rozpočet.', 
			imageSrc: 'https://connect-homes.com/wp-content/uploads/2020/01/1_process-1-scaled-1440x900-c-center.jpg'
		}, 
		{ 
			title: 'Nadizajnujte si svoj priestor', 
			text: 'Teraz začína zábava. Vyberte si zo špičkových, štandardných povrchových úprav, vybavenia a spotrebičov Vašich snov — všetko individuálne vyberané na základe dizajnu, výkonu, dostupnosti a udržatelnosti. Vylepši si svoj priestor pomocou naších balíčkov na personalizovanie svojho Kinokuke Domova. Potrebujete garáž? Hotovo. Snívate o záhrade? Hotovo a hotovo.', 
			imageSrc: 'https://connect-homes.com/wp-content/uploads/2020/01/design-1-scaled-1440x900-c-center.jpg'
		}, 
		{ 
			title: 'Získať povolenia a súhlasy', 
			text: 'S Vašimi Kino Kuke Domov náčrtmi na papieri, zašleme návrhy pre mestské povolenia. Zatiaľ čo schvaľovací proces môže trvať rozne závisiac od lokality, my sa pokusíme čo najrýchlejšie posunúť od návrhov do prefab továrňe, rýchlejšie než si dokážete vybrať svoj Kino Kuke Domov.', 
			imageSrc: 'https://connect-homes.com/wp-content/uploads/2020/01/permit-1-scaled-1440x900-c-center.jpg'
		}, 
		{ 
			title: 'Nasťahujte sa do svojho Kino Kuke Domova', 
			text: 'Vítajte doma. Kľúče su Vaše a ostatné už necháme na Vás.', 
			imageSrc: 'https://connect-homes.com/wp-content/uploads/2020/01/laststep-1-1440x900-c-center.jpg'
		}
	];

	const stepsData = [
		{ 
			title: 'Vyber si svoj Kino Kuke Domov', 
			description: '1 deň' 
		}, 
		{ 
			title: 'Nadizajnujte si svoj priestor', 
			description: '1-4 mesiace' 
		}, 
		{ 
			title: 'Získať povolenia a súhlasy',
			description: '2-9 mesiace'
		}, 
		{ 
			title: 'Nasťahujte sa do svojho Kino Kuke Domova', 
			description: 'Odhad 8-20 mesiacov'
		}, 
	];

	useEffect(() => {
		window.scrollTo(0, 0);
/*
		if(window.innerWidth < 768) {
			setIsMobile(true);
		}
*/
		setWindowHeight(window.innerHeight);
	}, [])

	useEffect(() => {
		//setTimeout(() => {  
		sectionRefs.current[stage].scrollIntoView({ behavior: 'smooth', block: 'start' });
			//window.scrollTo(0, sectionRefs.current[stage].offsetTop);
		//}, 100);

console.log(sectionRefs);
		setTimeout(() => {  
			setChangingStage(false); 
		}, 1000);
	}, [ts])

	const handleWheel = (e) => {
		//e.preventDefault(); e.stopPropagation();
	//return false;
	    //wheelTimeout.current = true;

		console.log('onWheel');
		console.log(parseInt(e.deltaY));
		parseInt(e.deltaY) > 0 ? setWheelDown(true) : setWheelDown(false);
		//console.log('changingStage: '+changingStage.current);

		if (changingStage == false) {
			setChangingStage(true);
			if (parseInt(e.deltaY) > 0) {
				const newStage = (stage+1) > 4 ? 4 : (stage+1); // include stage = 0 (intro section)

				setStage(newStage); setTs(performance.now());
			} else {
				const newStage = (stage-1) < 0 ? 0 : (stage-1);
				setStage(newStage); setTs(performance.now());
			}
		}

	    // while wheel is moving, do not release the lock
	    clearTimeout(wheelTimeout.current)

	    // flag indicating to lock page scrolling (setTimeout returns a number)
	    wheelTimeout.current = setTimeout(() => {
	      wheelTimeout.current = false
	    }, 300)	    
	}

	const handleStart = (e) => {
		if (changingStage == false) {
			setChangingStage(true);
			setStage(1); setTs(performance.now());
		}
	}

	const evaluateStage = (offsetTop) => {

		if (offsetTop > -(windowHeight)) { // 100 vh
			setStage(0);
		
		} else if ( offsetTop <= -(windowHeight) && offsetTop > -(2*windowHeight) ) {
			setStage(1);

		} else if ( offsetTop <= -(2*windowHeight) && offsetTop > -(3*windowHeight) ) {
			setStage(2);

		} else if ( offsetTop <= -(3*windowHeight) && offsetTop > -(4*windowHeight) ) {
			setStage(3);

		} else {
			setStage(4);
		}
	}

	const onTouchStart = (e) => {
console.log('onTouchStart');
	}
	const onTouchMove = (e) => {
console.log('onTouchMove');
		//setMovePageYOffset(pageRef.current.getBoundingClientRect().top); 

		evaluateStage(pageRef.current.getBoundingClientRect().top);
	}
	const onTouchEnd = (e) => {
console.log('onTouchEnd');
		//setEndPageYOffset(pageRef.current.getBoundingClientRect().top); 
	}

	// cancel wheel event wheelTimeout.current == true
	useEffect(() => {
	    const cancelWheel = e => wheelTimeout.current && e.preventDefault()
	    document.body.addEventListener('wheel', cancelWheel, {passive:false});

	    return () => document.body.removeEventListener('wheel', cancelWheel)
	}, [])

	return (
		<div className="process-page__container" 
			onWheel={(e) => handleWheel(e)}
			ref={pageRef}
			onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}
		>
{/*
			<div style={{color: '#fff', position: 'fixed', zIndex: '100', top: 0, background: '#000'}}>
				{stage}, {wheelDown ? 'DOWN' : 'UP'}, {changingStage ? 'changing' : 'not'}
			</div>
*/}
			<ProcessIntro 
				className={`section section-1 ${stage>=2 ? 'stage-2' :''}`}
				heading1="Proces"
				//heading2="We’ve rethought the entire process of how we design, build and buy homes. No delays. No headaches. No sticker shock. From design to manufacture to installation, we do it all."
				heading2="Prerobili sme celý proces ako dizajnujeme, staviame a kupujeme domy. Bez omeškaní. Bez bolehlavov. Od dizajnu až po inštaláciu, my spravíme všetko."
				btnText="štart"
				btnClick={e => handleStart(e)}
//				showOverlay
				imageSrc="https://connect-homes.com/wp-content/uploads/2020/01/C6T-10-scaled-866x1108-c-center.jpg"
				ref={e => sectionRefs.current[0] = e} 
			/>
			{ parallaxData.map((data, index) => (
				<ParallaxSection
					data={data}
					showOverlay
					ref={e => sectionRefs.current[index+1] = e} 
				/>
			)) }

			<ProcessSteps  
				className={`${stage>=1 ? 'active' :''}`}
				data={stepsData}
				currentStage={stage}
			/>

		</div>
	)
}

export default ProcessPage;