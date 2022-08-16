import React, { useEffect } from "react";

import ImageBanner from "../components/ImageBanner.js";
import LandingVideo from "../components/LandingVideo.js";
import HeadingBlock from "../components/HeadingBlock.js";
import DescriptionWithImage from "../components/DescriptionWithImage.js";
import FindYourHome from "../components/FindYourHome.js";
import DesignAndArchitecture from "../components/DesignAndArchitecture.js";
import SocialGrid from "../components/SocialGrid.js";
import NewsletterSection from "../components/NewsletterSection.js";

import "./../assets/css/pages/landingpage.css";

import kinokukelogo from "./../assets/images/kinokuke-logo.png";
import newsletterImage from "./../assets/images/newsletter-image.jpg";
import landingPageBkg from "./../assets/images/landing-page-background.png";
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
/*
	const housesData = [
		{ name: 'VERONA', src: veronaURL }, 
		{ name: 'MILANO', src: milanoURL  },
		{ name: 'VENEZIA', src: veneziaURL },
		{ name: 'MIAMI', src: miamiURL }
	];
*/
	const designAndArchitectureData = [
		{ 
			title: 'LIFE SPACE', 
			slogan: 'Komplexné a efektívne využitie domáceho prostredia', 
//			text: 'Life Space offers flexible home designs to meet the needs of today’s families based on how they really use the space', 
			text: 'Life Space ponúka flexibilný dizajn, ktorý spĺňa potreby dnešných domácností na základe toho koľko reálne využívaju priestor',
			ctaText: 'Prečítajte si viac', 
			ctaSrc: '/design/features',
//			imageSrc: 'https://delightfull.eu/inspirations/wp-content/uploads/2020/01/5-9-1024x683.jpg',
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
/*
		{ 
			title: 'LIVING CANVAS', 
			slogan: 'Krajinný exteriér podľa vlastných predstáv', 
//			text: 'The New Home Company offers you the unique opportunity to design and install custom landscape exteriors including patios, pools, spas and outdoor kitchens while your home is still under construction.', 
			text: 'Kino Kuke ponúka unikátnú príležitosť nadizajnovať a nainštalovať si krajinný exteriér na mieru, vrátane terás, bazénov, kúpeľov a vonkajších kuchýň, zatiaľ čo sa ešte stavia Váš dom',
			ctaText: 'Prečítajte si viac', 
			ctaSrc: '/design/features',
			imageSrc: livingCanvas, 
			backgroundColor: '#99946C' 
		},
*/
		{ 
			title: 'SMART HOME', 
//			slogan: 'Krajinný exteriér podľa vlastných predstáv', 
			slogan: 'Modernizovať dnešné nové domy ideami zo zajtrajška', 
//			text: 'The New Home Company offers you the unique opportunity to design and install custom landscape exteriors including patios, pools, spas and outdoor kitchens while your home is still under construction.', 
//			text: 'Kino Kuke ponúka unikátnú príležitosť nadizajnovať a nainštalovať si krajinný exteriér na mieru, vrátane terás, bazénov, kúpeľov a vonkajších kuchýň, zatiaľ čo sa ešte stavia Váš dom',
			text: 'Uvádzame Home TECH balíček - štandardný smart-home technologický balíček ponúkaný v každom novom domove. Progresívny integračný systém domova, ktorý nám umožňuje centralizovať a kontrolovať všetko od služieb až po bezpečnost a zábavu pre pohodlie a úsporu základov. Možností je nekonečno.',
			ctaText: 'Prečítajte si viac', 
			ctaSrc: '/design/features',
			imageSrc: smartHome, 
			backgroundColor: '#99946C' 
		},		
		{ 
			title: 'BALANCED LIVING', 
			slogan: 'Princípy starodávného umenia a vedy', 
//			text: 'Balanced Living applies principles of Feng Shui to ensure good fortune for all homeowners', 
			text: 'Balanced Living aplikuje princípy Feng Shui, aby zaručila veľa šťastia pre všetkých členov domácnosti', 
			ctaText: 'Prečítajte si viac', 
			ctaSrc: '/design/features',
			imageSrc: balancedLiving,
			backgroundColor: '#813232' 
		}
	
	];
/*
	const socialData = [
		{
			text: '1 We pride ourselves on being the most recognized builder in customer experience! Read our Homeowner Reviews. 💬',
			hashtags: '#NewHomeowner #TestimonialTuesday #NWHMReviews',
			imageSrc: veronaInterior 
		},
		{
			text: '2 Seabluffs fully-furnished designer home by @puresaltinteriors is available for immediate move-in! 🌿',
			hashtags: '#SeabluffLiving #PlayaVista #PureSaltInteriors',
			imageSrc: miamiBack 
			//imageSrc: 'https://momsla.com/wp-content/uploads/2021/02/Claire-and-Phils-house-from-Modern-Family.jpg.webp'
		},
		{
			text: '3 We pride ourselves on being the most recognized builder in customer experience! Read our Homeowner Reviews. 💬',
			hashtags: '#NewHomeowner #TestimonialTuesday #NWHMReviews',
			imageSrc: veronaInterior 
			//imageSrc: 'https://www.sceen-it.com/Service/sceenit/sceen/medium/9689.jpg/nos/.jpg'
		},
		{
			text: '4 Seabluffs fully-furnished designer home by @puresaltinteriors is available for immediate move-in! 🌿',
			hashtags: '#SeabluffLiving #PlayaVista #PureSaltInteriors',
			imageSrc: miamiBack 
			//imageSrc: 'https://i2-prod.liverpoolecho.co.uk/incoming/article16001114.ece/ALTERNATES/s1200b/0_barbiehouse15.jpg'
		},
		{
			text: '5 We pride ourselves on being the most recognized builder in customer experience! Read our Homeowner Reviews. 💬',
			hashtags: '#NewHomeowner #TestimonialTuesday #NWHMReviews',
			imageSrc: veronaInterior 
			//imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ7gIX4_QSS9TV8GbAACeWylAKhWBK5TEZCg&usqp=CAU'
		},
		{
			text: '6 Seabluffs fully-furnished designer home by @puresaltinteriors is available for immediate move-in! 🌿',
			hashtags: '#SeabluffLiving #PlayaVista #PureSaltInteriors',
			imageSrc: miamiBack 
			//imageSrc: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F20%2F2021%2F09%2F23%2Fconjuring-6.jpg&q=60'
		},
		{
			text: '7 We pride ourselves on being the most recognized builder in customer experience! Read our Homeowner Reviews. 💬',
			hashtags: '#NewHomeowner #TestimonialTuesday #NWHMReviews',
			imageSrc: veronaInterior 
			//imageSrc: 'https://momsla.com/wp-content/uploads/2021/02/Claire-and-Phils-house-from-Modern-Family.jpg.webp'
		},
		{
			text: '8 Seabluffs fully-furnished designer home by @puresaltinteriors is available for immediate move-in! 🌿',
			hashtags: '#SeabluffLiving #PlayaVista #PureSaltInteriors',
			imageSrc: miamiBack 
			//imageSrc: 'https://www.sceen-it.com/Service/sceenit/sceen/medium/9689.jpg/nos/.jpg'
		},
		{
			text: '9 We pride ourselves on being the most recognized builder in customer experience! Read our Homeowner Reviews. 💬',
			hashtags: '#NewHomeowner #TestimonialTuesday #NWHMReviews',
			imageSrc: veronaInterior 
			//imageSrc: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F20%2F2021%2F09%2F23%2Fconjuring-6.jpg&q=60'
		},
		{
			text: '10 Seabluffs fully-furnished designer home by @puresaltinteriors is available for immediate move-in! 🌿',
			hashtags: '#SeabluffLiving #PlayaVista #PureSaltInteriors',
			imageSrc: miamiBack 
			//imageSrc: 'https://momsla.com/wp-content/uploads/2021/02/Claire-and-Phils-house-from-Modern-Family.jpg.webp'
		},
		{
			text: '11 We pride ourselves on being the most recognized builder in customer experience! Read our Homeowner Reviews. 💬',
			hashtags: '#NewHomeowner #TestimonialTuesday #NWHMReviews',
			imageSrc: veronaInterior 
			//imageSrc: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F20%2F2021%2F09%2F23%2Fconjuring-6.jpg&q=60'
		},
		{
			text: '12 Seabluffs fully-furnished designer home by @puresaltinteriors is available for immediate move-in! 🌿',
			hashtags: '#SeabluffLiving #PlayaVista #PureSaltInteriors',
			imageSrc: miamiBack 
			//imageSrc: 'https://www.sceen-it.com/Service/sceenit/sceen/medium/9689.jpg/nos/.jpg'
		},
		{
			text: '13 We pride ourselves on being the most recognized builder in customer experience! Read our Homeowner Reviews. 💬',
			hashtags: '#NewHomeowner #TestimonialTuesday #NWHMReviews',
			imageSrc: veronaInterior 
			//imageSrc: 'https://i2-prod.liverpoolecho.co.uk/incoming/article16001114.ece/ALTERNATES/s1200b/0_barbiehouse15.jpg'
		},
		{
			text: '14 Seabluffs fully-furnished designer home by @puresaltinteriors is available for immediate move-in! 🌿',
			hashtags: '#SeabluffLiving #PlayaVista #PureSaltInteriors',
			imageSrc: miamiBack 
			//imageSrc: 'https://i2-prod.liverpoolecho.co.uk/incoming/article16001114.ece/ALTERNATES/s1200b/0_barbiehouse15.jpg'
		},
		{
			text: '15 We pride ourselves on being the most recognized builder in customer experience! Read our Homeowner Reviews. 💬',
			hashtags: '#NewHomeowner #TestimonialTuesday #NWHMReviews',
			imageSrc: veronaInterior 
			//imageSrc: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F20%2F2021%2F09%2F23%2Fconjuring-6.jpg&q=60'
		},
		{
			text: '16 Seabluffs fully-furnished designer home by @puresaltinteriors is available for immediate move-in! 🌿',
			hashtags: '#SeabluffLiving #PlayaVista #PureSaltInteriors',
			imageSrc: miamiBack 
			//imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ7gIX4_QSS9TV8GbAACeWylAKhWBK5TEZCg&usqp=CAU'
		}
	];
*/
	useEffect(() => {
		//window.scrollTo(0, 0)
	}, [])
	
	return (
		<div className="landing-page__container">
			{/*<div className="loader" style={{ background: `url(${kinokukelogo}) no-repeat center`, backgroundSize: "contain" }}></div>*/}
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
{/*
			<DescriptionWithImage 
				title="NAŠA FILOZOFIA"
				description="All of us are looking to build a better life. A life filled with everything and everyone that matters most. And a place to call home that brings it all together in the best possible ways. We understand how important your home is to you. It means a lot to us too. Our homes are an expression of the knowledge we have about how people want to live. For us they are individual works of art for the world to see and enjoy."
				ctaText="Prečítajte si viac"
				linkTo="/about"
				value1="Lepšia skúsenosť."
				value2="Lepší domov."
				value3="Lepší život"
				imageUrl=""
				autoplayDelay="2000"
			/>
*/}			

			<DesignAndArchitecture 
				tiles={designAndArchitectureData}
			/>
			<ImageBanner 
				className="landing-page__find-your-home-image"
				images={[{src: findYourHomeBkg}]}  
				showOverlay
				heading="kino kuke domov"
				text="Kino Kuke ponúka 8 modelov aby boli vhodné pre rôzne pozemky, životné štýly a rozpočty. Vymeniť starý dom za nový domov svojich snov? My Vám pomôžeme. Staviate si druhý domov v krajine? S tým Vám tiež pomôžeme."
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
				text="a dostanete pravidelne novinky o dostupnosti, cenniku a špeciálnych akciách"
				imageSrc={newsletterImage}
			/>
			
	</div>
	)
}

export default LandingPage;