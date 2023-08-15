import React, { useState, useEffect, useLayoutEffect, useRef } from "react";

//import ProcessIntro from "./../components/ProcessIntro.jsx";
//import ParallaxSection from "./../components/ParallaxSection.jsx";
//import ProcessSteps from "./../components/ProcessSteps.jsx";
import LandingImage from "./../components/LandingImage.jsx";
import ModelsFilter from "./../components/ModelsFilter.jsx";
import ModelsContainer from "./../components/ModelsContainer.jsx";

import "./../assets/css/pages/modelspage.css";

import miamiFront from "./../assets/images/house_models/miami.png";
import miamiBack from "./../assets/images/house_models/miami_back.png";
import monacoFront from "./../assets/images/house_models/monaco.png";
import monacoInterior from "./../assets/images/house_models/monaco_interior.png";
import veneziaFront from "./../assets/images/house_models/venezia.png";
import veneziaInterior from "./../assets/images/house_models/venezia_interior.png";
import veronaFront from "./../assets/images/house_models/verona.png";
import veronaInterior from "./../assets/images/house_models/verona_interior.png";

const ModelsPage = (props) => {
//	let { className, redirectUrl, socialFacebookUrl, socialInstagramUrl, title, subtitle, description, subdescription } = props;

    const [scrollOffset, setScrollOffset] = useState(0);
	const [scrollDown, setScrollDown] = useState(null);
	const [wheelDown, setWheelDown] = useState(null);

	const [stage, setStage] = useState(0);
	const [ts, setTs] = useState(performance.now());

	const [changingStage, setChangingStage] = useState(false);
 	//const changingStage = useRef(false);

	const sectionRefs = useRef([]);
	const wheelTimeout = useRef();

	const models = [
		{ 
			title: 'Verona', 
			description: '76.69 m² | 4 izieb | 1 kúpelňa | patio', 
			modelImageSrc: 'https://connect-homes.com/wp-content/uploads/2019/11/3d-1400x875-c-center.jpg',
			//imageSrc: 'https://connect-homes.com/wp-content/uploads/2019/09/c1-1800x2500-c-center.jpg'
			imageSrc: veronaInterior
		}, 
		{ 
			title: 'Monaco', 
			description: '89.12 m² | 4 izieb | 1 kúpelňa | 2 obyvačky', 
			modelImageSrc: 'https://connect-homes.com/wp-content/uploads/2019/10/C02-1400x875-c-center.jpg',
			//imageSrc: 'https://connect-homes.com/wp-content/uploads/2019/11/1-1-1-1800x2500-c-center.jpg'
			imageSrc: monacoInterior
		}, 
		{ 
			title: 'Miami', 
			description: '121.30 m² | 7 izieb | 2 kúpelňe | bazén', 
			modelImageSrc: 'https://connect-homes.com/wp-content/uploads/2019/11/C03-1400x875-c-center.jpg',
			imageSrc: miamiFront
		}, 
		{ 
			title: 'Venezia', 
			description: '163.78 m² | 5 izieb | 2 kúpelňe | terasa', 
			modelImageSrc: 'https://connect-homes.com/wp-content/uploads/2019/10/C02-1400x875-c-center.jpg',
			//imageSrc: 'https://connect-homes.com/wp-content/uploads/2019/10/C2-32a-scaled-1800x1618.75-c-center.jpg'
			imageSrc: veneziaInterior
		},
	];

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	useEffect(() => {
		//setTimeout(() => {  
		//sectionRefs.current[stage].scrollIntoView({ behavior: 'smooth', block: 'start' });
			//window.scrollTo(0, sectionRefs.current[stage].offsetTop);
		//}, 100);

//console.log(sectionRefs);
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


	// cancel wheel event wheelTimeout.current == true
	useEffect(() => {
		/*
	    const cancelWheel = e => wheelTimeout.current && e.preventDefault()
	    document.body.addEventListener('wheel', cancelWheel, {passive:false});

	    return () => document.body.removeEventListener('wheel', cancelWheel)
	    */
	}, [])

	return (
		<div className="models-page__container" onWheel={(e) => handleWheel(e)}>
{/*
			<div style={{color: '#fff', position: 'fixed', zIndex: '100', top: 0, background: '#000'}}>
				{stage}, {wheelDown ? 'DOWN' : 'UP'}, {changingStage ? 'changing' : 'not'}
			</div>
*/}
			<LandingImage 
				imageSrc="https://connect-homes.com/wp-content/uploads/2020/01/models-scaled-1440x1223-c-center.jpg"
				heading1="Models"
				//heading2="Connect Homes offers 15 models to fit different lots, lifestyles, and budgets. Replacing your old home with the modern build of your dreams? We can help. Building a second home in the country? We can help with that too."
				heading2="Kino Kuke ponúka 11 modelov aby boli vhodné pre rôzne pozemky, životné štýly, a rozpočty. Vymeniť starý dom za nový domov svojich snov? My Vám pomôžeme. Staviate si druhý domov v krajine? S tým Vám tiež pomôžeme."
				showOverlay
			/>
			<ModelsFilter 
				models={models}
			/>
			<ModelsContainer 
				models={models}
			/>

			<LandingImage 
				className="link-to-process"
				imageSrc="https://connect-homes.com/wp-content/uploads/2020/01/C02-1-scaled-1800x1350-c-center.jpg"
				heading1="Proces"
				heading2="Ako každa konfigurácia bere v úvahu rôzne typy pozemkov a životné štýly, atď. "
				btnText="Prečítaj si viac"
				btnSrc="/v2/process"
			/>
		</div>
	)
}

export default ModelsPage;