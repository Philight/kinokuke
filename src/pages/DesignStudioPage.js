import React, { useEffect } from "react";

import Icon from "../components/Icon.js";
import HeadingBlock from "../components/HeadingBlock.js";
import ImageBanner from "../components/ImageBanner.js";
import ImageCarousel from "../components/ImageCarousel.js";
import TextBlock from "../components/TextBlock.js";
import FullwidthHeading from "../components/FullwidthHeading.js";
import DesignAndArchitectureTiles from "../components/DesignAndArchitectureTiles.js";

import "./../assets/css/pages/designstudiopage.css";
import "./../assets/css/components/designandarchitecture.css";

import wallTypesImg from "./../assets/images/wall-types-background.png";

const DesignStudioPage = (props) => {
//	let { className, redirectUrl, socialFacebookUrl, socialInstagramUrl, title, subtitle, description, subdescription } = props;
	
	const images = [
		{
//			src: 'https://previews.123rf.com/images/rawpixel/rawpixel1603/rawpixel160302225/53028356-people-meeting-teamwork-architect-engineer-blueprint-concept.jpg'
//			src: 'https://cmicglobal.com/wp-content/uploads/2020/01/iStock-613235226-1200x800.jpg',
//			src: 'https://www.webershandwick.com/wp-content/uploads/2018/04/DI_newsroom_photo-1920x1280.jpg',
//			src: 'https://www.hilti.com.qa/content/hilti/META/QA/en/business/business/engineering/profis-engineering-suite/jcr:content/mainSection/mainColumn/three_image_text_col_643971635/image_text_column_326579221/image.img.1920.medium.jpg/1620747065883.jpg'
			src: 'https://images.adsttc.com/media/images/60be/6d86/e1fe/0f01/6557/740f/newsletter/architects-analyzing-projects-pkn5p77.jpg?1623092666',
		}
	];

	//const wallTypesBkg = 'https://www.crushpixel.com/big-static15/preview4/under-construction-home-framing-interior-1838568.jpg';
	//const wallTypesBkg = 'https://www.ecohome.net/media/articles/images/93/dc/93dc877988833ab0e11e2b5a269253d1d8e85664/thumbs/VUJ3lzHnmwgw_775x500_Q9YtDUVi.jpg';
	//const wallTypesBkg = 'http://renoprocontracting.ca/wp-content/uploads/2015/07/framing-renopro-contracting-general-contractor-toronto-1000x600.jpg';
	const wallTypesBkg = 'https://cdn.vox-cdn.com/thumbor/XZDin0MkaOZxbzGwV_Km5OXpB3A=/0x0:3600x2400/1200x800/filters:focal(1032x940:1608x1516)/cdn.vox-cdn.com/uploads/chorus_image/image/70129201/Framing_iStock_1142903080.0.jpg';
	//const wallTypesImg = 'https://cdn.vox-cdn.com/thumbor/XZDin0MkaOZxbzGwV_Km5OXpB3A=/0x0:3600x2400/1200x800/filters:focal(1032x940:1608x1516)/cdn.vox-cdn.com/uploads/chorus_image/image/70129201/Framing_iStock_1142903080.0.jpg';

	const carouselImages = [

		{
			src: wallTypesImg,
			columns: 3
		},
/*
		{
			src: 'https://www.montaznekucedomtera.rs/images/tehnicki-opis/zid1.png',
			columns: 1
		},
		{
			src: 'https://www.montaznekucedomtera.rs/images/tehnicki-opis/zid2.png',
			columns: 1
		},
		{
			src: 'https://www.montaznekucedomtera.rs/images/tehnicki-opis/zid3.png',
			columns: 1
		}
*/
	]

	const phases = [
		{
			imageSrc: 'https://www.nwhm.com/sites/default/files/2018-06/DesignStudioICON_2_0.png'
		},
		{
			imageSrc: 'https://www.nwhm.com/sites/default/files/2018-06/DesignStudioICON_3_0.png'
		},
		{
			imageSrc: 'https://www.nwhm.com/sites/default/files/2018-06/DesignStudioICON_2_0.png'
		},
		{
			imageSrc: 'https://www.nwhm.com/sites/default/files/2018-06/DesignStudioICON_3_0.png'
		},
	];

	const tile = { 
		title: 'GREEN LIFE', 
		slogan: 'Udržateľnosť. Energetická úspornosť. Zeleň.', 
		text: 'Program, ktorý sa zaväzuje realizovať udržateľné stavebné prvky - od energeticky úsporných spotrebičov až po solárne vylepšenia, ktoré v konečnom dôsledku majú pozitívny efekt na životné prostredie.', 
		ctaText: 'Prečítajte si viac' , 
		ctaSrc: '/design/features',
		imageSrc: 'https://www.impressiveinteriordesign.com/wp-content/uploads/2014/09/Eco-Friendly-House-With-A-Contemporary-Design-1.jpg',
		backgroundColor: '#a8b53a' 
	};

	useEffect(() => {
//		window.scrollTo(0, 0)
	}, [])

	return (
		<div className="design-studio-page__container">
			<HeadingBlock heading1="DESIGN" heading2="Dizajn Štúdio" />
			<ImageBanner 
				className="intro-image"
				images={images}
				showOverlay
			/>
			<TextBlock 
				heading="Urobte si domov podľa seba"
				text='V Kino Kuke veríme, že sila v osobnom vyjadrení a prispôsobenie dizajnu sú základom pri skúsenosti s kúpou. Preto sme zaintegrovali Dizajn Štúdio, ktoré poskytuje naším majiteľom domov nástroje, aby mohli svoj nový domov priniesť k životu. Na základe rokov skúseností s vytváraním rezidencií, ktoré sú vyjadrením osobného vkusu a želaní kupcov, Kino Kuke zaviedlo high-tech, pritom user-friendly štúdio dostupné práve našim klientom.
<br/><br/>Či už si vyberáte konkrétny štýl kabinetu a kľuky do Vašej kuchyne alebo podlahy, ktoré budu obložené po celom prvom poschodí, personalizovať si Váš dom podľa Vaších predstáv je kľúč aby ste sa cítili "ako doma". V Dizajnovom štúdiu Vás budú naši experti sprevádzať popri tom ako premeníte budovu na unikátny nový domov, ktorý definuje Váš štýl a Váš život.  
				'
			/>
			<FullwidthHeading heading1={`dizajn štúdio`} heading2={`proces`}/>

			<FullwidthHeading heading1={`udržateľný`} heading2={`dizajn`}/>
			<div className="design-and-architecture__tiles-wrapper">
				<div className="design-and-architecture__tiles-group">
					<DesignAndArchitectureTiles tile={tile} index="0" />
				</div>
			</div>
{/*
			<FullwidthHeading heading1={`výber`} heading2={`stien`}/>
			<ImageBanner 
				className="design-studio-page__wall-types-description"
				images={[{src: wallTypesBkg}]}  
				showOverlay
				heading="prefab domov"
				text="Chceme Vám dať bližší náhľad k technologií budovania prefabrikovaných domov, s charakteristikami inštalovaných materiálov. Kladieme špeciálny dôraz na typy stien, ktoré si môžete zvoliť pri výbere svojho domu.
<br/>Vy rozhodujete o type a hrúbke materiálov, ktoré Vám nainštalujeme - tie rozhodujú o kvalite tepelnej izolácie"
			/>	
			<Icon className="wall-types-arrow" icon="chevron-right" />
			<Icon className="wall-types-arrow" icon="chevron-bold-bottom" />
			<ImageCarousel 
				className="design-studio-page__wall-types-image"
				images={carouselImages}  
			/>		
			<TextBlock 
				className="design-studio-page__wall-types-tooltip"
				heading=""
				text="Majte na vedomí, že výber 'najtenšieho' typu stenu - Type B, spĺňa všetky požiadavky energetickej výkonnosti.
<br/>V tomto prípade prefab domy spadajú do kategórie B energetickej výkonnosti."
			/>
*/}
		</div>
	)
}

export default DesignStudioPage;