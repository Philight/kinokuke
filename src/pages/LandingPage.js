import React, { useEffect } from "react";

import ImageBanner from "../components/media/ImageBanner.js";
import LandingVideo from "../components/media/LandingVideo.js";
import HeadingBlock from "../components/text/HeadingBlock.js";
import DescriptionWithImage from "../components/DescriptionWithImage.js";
import FindYourHome from "../components/FindYourHome.js";
import DesignAndArchitecture from "../components/DesignAndArchitecture.js";
import SocialGrid from "../components/media/SocialGrid.js";
import NewsletterSection from "../components/NewsletterSection.js";

import "./../assets/css/pages/landingpage.css";

import newsletterImage from "./../assets/images/newsletter-image.jpg";
//import landingPageBkg from "./../assets/images/landing-page-background.png";
import landingPageBkg from "./../assets/images/landing-page-background-2.png";
//import landingPageBkg from "./../assets/images/landing-page-background-3.png";
import findYourHomeBkg from "./../assets/images/find-your-home-background.png";

import livingCanvas from "../assets/images/design-architecture/living-canvas.png";
import greenLife from "../assets/images/design-architecture/green-life.png";
import balancedLiving from "../assets/images/design-architecture/balanced-living.png";
import smartHome from "../assets/images/design-architecture/smart-home.png";

import social from "../data/social.js";

import milanoURL from "./../assets/images/housemodels/milano.png";
import veneziaURL from "./../assets/images/housemodels/venezia.png";
import veronaURL from "./../assets/images/housemodels/verona.png";
import veronaInterior from "./../assets/images/housemodels/verona_interior.png";
import miamiURL from "./../assets/images/housemodels/miami.png";
import miamiBack from "./../assets/images/housemodels/miami_back.png";

const LandingPage = (props) => {
//	let { className, redirectUrl, socialFacebookUrl, socialInstagramUrl, title, subtitle, description, subdescription } = props;

	const designAndArchitectureData = [
		{ 
			title: 'LIFE SPACE', 
			slogan: 'Komplexné a efektívne využitie domáceho prostredia', 
			text: 'Life Space ponúka flexibilný dizajn, ktorý spĺňa potreby dnešných domácností na základe toho koľko reálne využívaju priestor',
			ctaText: 'Prečítajte si viac', 
			ctaSrc: '/design/features',
			imageSrc: 'http://images.ctfassets.net/skkgb8fetgpj/1MU9ItomkC3hgB2MGvmFdP/cc7e801bc2c8ba3ae4a45718c85bda6f/House_extension_plans_and_drawings.jpg',
			backgroundColor: 'var(--hermes-blue-2)' 
		},
		{ 
			title: 'GREEN LIFE', 
			slogan: 'Udržateľnosť. Energetická úspornosť. Zeleň.', 
			text: 'Program, ktorý sa zaväzuje realizovať udržateľné stavebné prvky - od energeticky úsporných spotrebičov až po solárne vylepšenia, ktoré v konečnom dôsledku majú pozitívny efekt na životné prostredie.', 
			ctaText: 'Prečítajte si viac', 
			ctaSrc: '/design/features',
			imageSrc: greenLife,
			backgroundColor: 'rgb(0 177 142)' 
		},
		{ 
			title: 'SMART HOME', 
			slogan: 'Modernizovať dnešné nové domy ideami zo zajtrajška', 
			text: 'Uvádzame Home TECH balíček - štandardný smart-home technologický balíček ponúkaný v každom novom domove. Progresívny integračný systém domova, ktorý nám umožňuje centralizovať a kontrolovať všetko od služieb až po bezpečnost a zábavu pre pohodlie a úsporu základov. Možností je nekonečno.',
			ctaText: 'Prečítajte si viac', 
			ctaSrc: '/design/features',
			imageSrc: smartHome, 
			backgroundColor: '#99946C' 
		},		
		{ 
			title: 'BALANCED LIVING', 
			slogan: 'Princípy starodávného umenia a vedy', 
			text: 'Balanced Living aplikuje princípy Feng Shui, aby zaručila veľa šťastia pre všetkých členov domácnosti', 
			ctaText: 'Prečítajte si viac', 
			ctaSrc: '/design/features',
			imageSrc: balancedLiving,
			backgroundColor: '#813232' 
		}
	];
	
	return (
		<div className="landing-page__container">
			{/*<div className="loader"></div>*/}
{/*
			<HeadingBlock className="show-mobile" heading1="KINOKUKE" heading2="Lepšia skúsenosť.<br/>Lepší domov.<br/>Lepší život." isHTML />
			<HeadingBlock className="show-desktop" heading1="KINOKUKE" heading2="Lepšia skúsenosť. Lepší domov. Lepší život" />
*/}			
			<ImageBanner 
				className="landing-page__intro-image"
				images={[{src: landingPageBkg}]}  
				heading="Lepší Začiatok<br/>Lepší Domov<br/><span>Lepší Život</span>"
				btnText="Naše Hodnoty"
				btnSrc="/about"
				showOverlay
				isHTML
			/>
			{/*<LandingVideo />*/}	

			<DesignAndArchitecture 
				tiles={designAndArchitectureData}
			/>
			<ImageBanner 
				className="landing-page__find-your-home-image"
				images={[{src: findYourHomeBkg}]}  
				showOverlay
				heading="primetech domov"
				text="KK Primetech ponúka 8 modelov aby boli vhodné pre rôzne pozemky, životné štýly a rozpočty. Vymeniť starý dom za nový domov svojich snov? My Vám pomôžeme. Staviate si druhý domov v krajine? S tým Vám tiež pomôžeme."
				btnText="Nájdi svoj domov"
				btnSrc="/findyourhome"
			/>			
			<FindYourHome
				columns="3"
				enableAutoplay
				interval="3000"
				enableNavigation
			/>
			<SocialGrid 
				columns="3"
				rows="2"
				posts={social}
				enableAutoplay
				interval="2000"
			/>
			<NewsletterSection 
				heading="zostaňte"
				subheading="v obraze"
				text="dostávajte pravidelné novinky o dostupnosti, cenníku a špeciálnych akciách"
				imageSrc={newsletterImage}
			/>
	</div>
	)
}

export default LandingPage;