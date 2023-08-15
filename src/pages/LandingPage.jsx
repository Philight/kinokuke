import { useRef } from "react";

import ImageBanner from "@components/media/ImageBanner";
import GalleryCarousel from "@components/GalleryCarousel";
import DesignAndArchitecture from "@components/DesignAndArchitecture";
import SocialGrid from "@components/media/SocialGrid";
import NewsletterSection from "@components/NewsletterSection";
import Icon from "@components/graphic/Icon";

import newsletterImage from "@images/newsletter-image.jpg";
import landingPageBkg from "@images/landing-page-background.png";
import findYourHomeBkg from "@images/find-your-home-background.png";

//import livingCanvas from "@images/design-architecture/living-canvas.png";
import lifeSpace from "@images/design-architecture/life-space.png";
import greenLife from "@images/design-architecture/green-life.png";
import balancedLiving from "@images/design-architecture/balanced-living.png";
import smartHome from "@images/design-architecture/smart-home.png";

//import houses from "@data/houses.js";
import { HOUSES, SOCIAL } from "@data";

const DATA_DESIGN_ARCHITECTURE = [
	{
		type: 'image',
//		imageSrc: 'http://images.ctfassets.net/skkgb8fetgpj/1MU9ItomkC3hgB2MGvmFdP/cc7e801bc2c8ba3ae4a45718c85bda6f/House_extension_plans_and_drawings.jpg',
		imageSrc: lifeSpace,
	},
	{ 
		type: 'content',
		title: 'LIFE SPACE', 
		slogan: 'Komplexné a efektívne využitie domáceho prostredia', 
		text: 'Life Space ponúka flexibilný dizajn, ktorý spĺňa potreby dnešných domácností na základe toho koľko reálne využívaju priestor',
		ctaText: 'Prečítajte si viac', 
		ctaSrc: '/design/features',
		backgroundColor: 'rgb(var(--color-hermes-blue))', 
	},
	{ 
		type: 'image',
		imageSrc: greenLife,
	},
	{ 
		type: 'content',
		title: 'GREEN LIFE', 
		slogan: 'Udržateľnosť. Energetická úspornosť. Zeleň.', 
		text: 'Program, ktorý sa zaväzuje realizovať udržateľné stavebné prvky - od energeticky úsporných spotrebičov až po solárne vylepšenia, ktoré v konečnom dôsledku majú pozitívny efekt na životné prostredie.', 
		ctaText: 'Prečítajte si viac', 
		ctaSrc: '/design/features',
		backgroundColor: 'rgb(var(--color-hermes-green))' 
	},
	{ 
		type: 'image',
		imageSrc: smartHome, 
	},	
	{ 
		type: 'content',
		title: 'SMART HOME', 
		slogan: 'Modernizovať nové domy dneška ideami zo zajtrajška', 
		text: 'Uvádzame Home TECH balíček - štandardný smart-home technologický balíček ponúkaný v každom novom domove. Progresívny integračný systém domova, ktorý nám umožňuje centralizovať a kontrolovať všetko od služieb až po bezpečnost a zábavu pre pohodlie a úsporu základov. Možností je nekonečno.',
		ctaText: 'Prečítajte si viac', 
		ctaSrc: '/design/features',
		backgroundColor: '#99946C' 
	},		
	{ 
		type: 'image',
		imageSrc: balancedLiving,
	},	
	{ 
		type: 'content',
		title: 'BALANCED LIVING', 
		slogan: 'Princípy starodávného umenia a vedy v priestore', 
		text: 'Balanced Living aplikuje princípy Feng Shui, aby zaručila veľa šťastia pre všetkých členov domácnosti', 
		ctaText: 'Prečítajte si viac', 
		ctaSrc: '/design/features',
		backgroundColor: '#813232' 
	},
];

const DATA_NEWSLETTER = {
	heading: 'zostaňte',
	subheading: 'v obraze',
	text: 'dostávajte pravidelné novinky o dostupnosti, cenníku a špeciálnych akciách',
}

const LandingPage = (props) => {
	let { className } = props;
	const introSectionRef = useRef(null);
	const scrollTo = (sectionRef) => () => {
		if (sectionRef.current) {
			window.scrollTo({
				left: 0, 
				top: window.pageYOffset + sectionRef.current.getBoundingClientRect().top - 65,
				behavior: 'smooth'
			})
		}
	}
	
	return (
		<div className={`landing-page__c ${className}`}>		
			<ImageBanner 
				className="intro-image"
				images={[{src: landingPageBkg}]}  
				heading="Lepší Začiatok<br/>Lepší Domov<br/><span>Lepší Život</span>"
				btnText="Naše Hodnoty"
				btnSrc="/about"
				showOverlay
				isHTML
			/>
			{/*<LandingVideo />*/}	
			<Icon className="nav-arrow highlight standard bottom" icon="chevron-right" 
				onClick={scrollTo(introSectionRef)} 
			/>

			<DesignAndArchitecture 
				ref={introSectionRef}
				data={DATA_DESIGN_ARCHITECTURE}
			/>
			<ImageBanner 
				className="landing-page__find-your-home-image"
				images={[{src: findYourHomeBkg}]}  
				heading="primetech <span>domov</span>"
				text="KK Primetech ponúka 8 modelov aby boli vhodné pre rôzne pozemky, životné štýly a rozpočty. Vymeniť starý dom za nový domov svojich snov? My Vám pomôžeme. Staviate si druhý domov v krajine? S tým Vám tiež pomôžeme."
				btnText="Nájdi svoj domov"
				btnSrc="/findyourhome"
				showOverlay
				isHTML
			/>			
			<GalleryCarousel
				className="landing-page__find-your-home-carousel"
				gallery={HOUSES}
				enableAutoplay
				enableNavigation
				interval={3000}
			/>
			<SocialGrid 
				posts={SOCIAL}
				enableAutoplay
				interval={2000}
			/>
			<NewsletterSection 
				heading={DATA_NEWSLETTER.heading}
				subheading={DATA_NEWSLETTER.subheading}
				text={DATA_NEWSLETTER.text}
				imageSrc={newsletterImage}
			/>
		</div>
	)
}

export default LandingPage;