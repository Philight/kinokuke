import React, { useEffect } from "react";

import Icon from "../components/Icon.js";
import HeadingBlock from "../components/HeadingBlock.js";
import ImageBanner from "../components/ImageBanner.js";
import TextBlock from "../components/TextBlock.js";
import FullwidthHeading from "../components/FullwidthHeading.js";
import ProcessSteps from "../components/ProcessSteps.js";
import DesignAndArchitectureTiles from "../components/DesignAndArchitectureTiles.js";
import ImageCarousel from "../components/ImageCarousel.js";

import "./../assets/css/pages/processpage.css";
import "./../assets/css/components/designandarchitecture.css";

import backgroundImg from "./../assets/images/process-page-background.png";
import bathroomInstallation from "./../assets/images/process/bathroom-installation-bkg.jpg";
import wallA from "./../assets/images/wall-types/tip-a.png";
import wallB from "./../assets/images/wall-types/tip-b.png";
import wallPasiv from "./../assets/images/wall-types/tip-pasiv.png";

const ProcessPage = (props) => {
//	let { className, redirectUrl, socialFacebookUrl, socialInstagramUrl, title, subtitle, description, subdescription } = props;
	
	const images = [
		{
			//src: backgroundImg
			src: 'https://www.bankrate.com/2021/02/11104559/What_is_a_modular_home.jpg?auto=webp&optimize=high&crop=16:9'
		}
	];

/*
	const steps = [
		{
			title: 'Vyberte si svoj Kino Kuke Domov',
			text: 'Či vlastníte pozemok na dedine alebo v meste, nájde sa Kinokuke Domov ušitý na mieru práve pre Vás. Pozrieme sa na Váš pozemok a spoločnými silami vyberieme ten správny Kinokuke Domov, ktorý bude vhodný pre Váš životný štýl a rozpočet.',
			imageSrc: 'https://www.unicomcorp.com/wp-content/uploads/2018/04/real-estate-customer-service.jpg',
			color: 'var(--hermes-orange-1)',
			icon: 'choice'
		},
		{
			title: 'Nadizajnujte si svoj priestor',
			text: 'Teraz začína zábava. Vyberte si zo špičkových, štandardných povrchových úprav, vybavenia a spotrebičov Vašich snov — všetko individuálne vyberané na základe dizajnu, výkonu, dostupnosti a udržatelnosti. Vylepši si svoj priestor pomocou naších balíčkov na personalizovanie svojho Kinokuke Domova. Potrebujete garáž? Hotovo. Snívate o záhrade? Hotovo a hotovo.',
			imageSrc: 'https://boomtownroi.com/wp-content/uploads/2021/02/AdobeStock_292580462-scaled.jpeg',
			color: 'var(--hermes-green-2)',
			icon: 'design'
		},
		{
			title: 'Získať povolenia a súhlasy',
			text: 'S Vašimi Kino Kuke Domov náčrtmi na papieri, zašleme návrhy pre mestské povolenia. Zatiaľ čo schvaľovací proces môže trvať rozne závisiac od lokality, my sa pokusíme čo najrýchlejšie posunúť od návrhov do prefab továrňe, rýchlejšie než si dokážete vybrať svoj Kino Kuke Domov.',
			imageSrc: 'https://shactee.net/wp-content/uploads/2018/07/Home-Permitting.jpg',
			color: '#778587',
			icon: 'approval'
		},
		{
			title: 'Vybudujte svoj domov',
			text: 'Vybudujeme tvoj Kino Kuke Domov v prefab továrňi vo Viedňi — pomocou montážnej linky, ktorá skráti čas, odpad a bolehlavy spojené s budovaním alebo remodelingom domu. Vítajte, nižšie náklady.',
			//imageSrc: 'https://www.thoughtco.com/thmb/7wijXPfom2G2pUi_gIGR1m5THDI=/3000x2000/filters:fill(auto,1)/prefab-55759560-573635485f9b58723d282e9c.jpg',
			imageSrc: 'https://i.ytimg.com/vi/fp-ZMrzLrgU/maxresdefault.jpg',
			color: '#0499a9',
			icon: 'build'
		},
		{
			title: 'Doručte svoj domov',
			text: 'Toto je moment, ktorý ste očakávali. Váš Kino Kuke Domov dorazí z našej fabriky skoro kompletný — steny, okná, kanalizácia a spotrebiče. Vidieť to celé je zážitok, keď Vy a Vaša rodina budete svedkami transformácie prázdneho úseku krajiny v osobný ráj. Moderné bývanie.',
			imageSrc: 'https://media1.fdncms.com/inlander/imager/u/original/21784940/home7-2-17823d3014553cd6.jpg',
			color: 'var(--hermes-blue-2)',
			icon: 'delivery'
		},
		{
			title: 'Nainštalujte svoj domov',
			text: 'Keď je Váš Kino Kuke Domov z našej fabriky doručený a má svoje základy, je treba ešte niečo spraviť. Dokončíme zbytok — nainštalujeme spotrebiče, pridáme posledné úpravy aby sme sa uistili, že tvoj Kino Kuke Domov je pripravený na nasťahovanie.',
			imageSrc: 'https://www.ooba.co.za/app/uploads/2015/04/home-renovation.jpg',
			color: 'var(--hermes-green-1)',
			icon: 'install'
		},		
		{
			title: 'Nasťahujte sa do svojho Kino Kuke Domova',
			text: 'Vítajte doma. Kľúče su Vaše a ostatné už necháme na Vás.',
			imageSrc: 'https://d.newsweek.com/en/full/1688023/move-new-home-thumbtack.png',
			color: 'var(--hermes-orange-2)',
			icon: 'home'
		},
	];
*/
	const steps = [
		{
			title: 'Vyberte si svoj typ steny',
			text: 'Inštalácia externých a vnútorných stien podľa technickej špecifikácie a vybratého typu steny',
			imageSrc: 'https://boomtownroi.com/wp-content/uploads/2021/02/AdobeStock_292580462-scaled.jpeg',
			color: 'var(--hermes-orange-1)',
			icon: 'choice'
		},
		{
			title: 'Strešná štruktúra',
			text: `Inštalácia strešnej štruktúry - priehradové strešné prievlaky s inštaláćiou OSB dosiek, strešnej fólie, priečnych a pozdĺžnych lat ako základ inštalácie strechy
\nInštalácia strešnej krytiny - škridla`,
			imageSrc: 'https://www.unicomcorp.com/wp-content/uploads/2018/04/real-estate-customer-service.jpg',
			color: 'rgb(1 157 120)',
			icon: 'home'
		},
		{
			title: 'Inštalácia exteriérového stolárstva',
			text: 'Inštalácia exteriérového stolárstva - PVC (VEKA, Nemecko)',
			imageSrc: 'https://aw930cdnprdcd.azureedge.net/-/media/andersenwindows/images/parts-and-support/support/installation/diy/installation-diy-hero.jpg?modified=20190819152930&h=768&w=768&la=en&hash=7E9B319A9A5B01DD61FB1A9F33CA9D34',
			color: '#778587',
			icon: 'build'
		},
		{
			title: 'Vyberte si farbu fasády',
			text: `Kompletné fasádne práce s inštaláciou fasády vo farbe akú si zvolí zákazník
\nLemovanie odkvapov v demitovom fasádnom systéme`,
			//imageSrc: 'https://www.thoughtco.com/thmb/7wijXPfom2G2pUi_gIGR1m5THDI=/3000x2000/filters:fill(auto,1)/prefab-55759560-573635485f9b58723d282e9c.jpg',
			imageSrc: 'https://media1.fdncms.com/inlander/imager/u/original/21784940/home7-2-17823d3014553cd6.jpg',
			color: 'rgb(0 177 142)',
			icon: 'choice'
		},
		{
			title: 'Klampiarske práce',
			text: 'Kompletné klampiarske práce - inštalácia odkvapiek, čelných skiel, zálivov a veniec; všetky plechy sú vyrobené z pozinkovaného a plastifikovaného plechu vo farbe akú si zvolí zákazník',
			imageSrc: 'https://thearchitectsdiary.com/wp-content/uploads/2021/03/5-Reasons-You-May-Need-To-Hire-A-Metal-Roofing-Contractor-1.jpeg',
			color: '#0499a9',
			icon: 'build'
		},
		{
			title: 'Sadrové maliarske práce',
			text: 'Sadrové maliarske práce - inštalácia sadrokartónových dosiek vo vnútri stien, ich páskovanie, vyhladenie a maľovanie v jednej vrstve',
			imageSrc: 'https://www.ooba.co.za/app/uploads/2015/04/home-renovation.jpg',
			color: 'var(--hermes-blue-2)',
			icon: 'paint'
		},		
		{
			title: 'Inštalácia hadíc',
			text: 'Inštalácia rebrovaných (flexibilných) hadíc pre elektroinštalácie',
			imageSrc: 'https://lirp.cdn-website.com/e5187d45/dms3rep/multi/opt/prewiring-new-construction-home-1920w.jpeg',
			color: 'var(--hermes-orange-2)',
			icon: 'electrician'
		},
		{
			title: 'Maľovanie drevených povrchov',
			text: 'Maľovanie všetkých drevených povrchov s prostriedkami na ochranu dreva',
			imageSrc: 'https://www.nipponpaint.co.in/wp-content/uploads/2021/03/MicrosoftTeams-image-89.jpg',
			color: '#fd420f',
			icon: 'paint'
		},		
	];

	const steps2 = [
		{
			title: 'Elektroinštalácie',
			text: 'Vykonanie elektroinštalácií s inštaláciou rozvádzačov, poistiek, FID prepínačov a elektrického príslušenstva (spínačov a zásuviek); distribúcia elektrických inštalácií je vykonávaná pre rozvádzač s poistkami a po dohode so zákazníkom možno nahlásiť a pripojiť zariadenia k externej elektrickej sieťi',
			imageSrc: 'https://www.lasergroup.co.nz/images/assets/3631/14',
			color: 'var(--hermes-orange-1)',
			icon: 'electrician'
		},
		{
			title: 'Kuchyňa a kúpeľna',
			text: `Inštalácia prívodu vody a kanalizačného zariadenia
\nInštalácia keramických dlaždíc v kuchyni a kúpeľni; v kuchyni je práca vykonaná do výšky 160cm, a v kúpeľni až po strop; výber keramických dlaždíc je na zákazníkovi`,
			imageSrc: 'https://media.product.which.co.uk/prod/images/original/gm-24e38335-7b0b-49a0-a2db-69c54f53d273-kitchen-fitters.jpg',
			color: '#0499a9',
			icon: 'install'
		},
		{
			title: 'Podlaha a izbové dvere',
			text: `Kladenie podláh - laminát I trieda hrúbka 8mm; cena zahrňuje inštaláciu všetkých vrstiev vodeodolnosti a tepelnej izolácie v podlahách
\nInštalácia izbových dvier`,
			imageSrc: 'https://www.paoson.com/blog/wp-content/uploads/2020/11/02Laminate-Flooring-Installation-16.jpg',
			color: '#778587',
			icon: 'floor'
		},
		{
			title: 'Sanitárna keramika',
			text: `Inštalácia sanitárnej keramiky a príslušenstva v kúpeľni (WC s nádržkou, sprcha s vaňou, drez, kotol, zrkadlo, sprchová batéria, drezová batéria)`,
			imageSrc: bathroomInstallation,
			color: 'var(--hermes-blue-2)',
			icon: 'build'
		},
		{
			title: 'Vytvorenie základu',
			text: `Pre obidve fázy dokážeme ponúknuť základovú konštrukciu, toto zahŕňa:
\n- Betonáž pásových základov s železobetónom MB20, prierez 30 / 80cm. Murovanie soklových stien a schodov s betónovým blokom 20x20x40cm. V turnkey fáze, sú soklové steny pokryté polystyrénom a vymaľované fasádnym náterom
\n- Betónovanie podlahovej dosky s železobetónom MB25, na vrstve štrku 10cm`,
			imageSrc: 'https://buildgreennh.com/wp-content/uploads/2021/11/prefab-home-location.jpg',
			//imageSrc: 'https://img.freepik.com/premium-photo/construction-new-modern-modular-house_127089-1917.jpg?w=2000',
			color: 'var(--hermes-green-2)',
			icon: 'foundation'
		},
	];

	const wallTypesBkg = 'https://cdn.vox-cdn.com/thumbor/XZDin0MkaOZxbzGwV_Km5OXpB3A=/0x0:3600x2400/1200x800/filters:focal(1032x940:1608x1516)/cdn.vox-cdn.com/uploads/chorus_image/image/70129201/Framing_iStock_1142903080.0.jpg';
	const carouselImages = [
/*
		{
			src: wallTypesImg,
			columns: 3
		},
*/
		{
			src: wallB,
			columns: 1
		},
		{
			src: wallA,
			columns: 1
		},
		{
			src: wallPasiv,
			columns: 1
		}
	]	

	useEffect(() => {
//		window.scrollTo(0, 0)
	}, [])

	return (
		<div className="process-page__container">
			<HeadingBlock heading1="PROCES" heading2="Dizajn, výroba, inštalácia" />
			<ImageBanner 
				images={images}
				showOverlay
			/>
			<TextBlock 
				heading="Stojíme pri Vás pri každom kroku"
				text="Prerobili sme celý proces ako dizajnujeme, staviame a kupujeme domy. Bez omeškaní. Bez bolehlavov. Od dizajnu až po inštaláciu, my spravíme všetko.
				"
			/>
			<FullwidthHeading heading1={`fáza`} heading2={`A`}/>
			<ProcessSteps 
				steps={steps}
			/>
			<FullwidthHeading heading1={`fáza`} heading2={`turnkey`}/>
			<TextBlock 
				heading="Ihneď pripravené na bývanie"
				text="Konštrukcia prefabrikovaného domu na báze turnkey, zahrňa všetky práce v 'šedej fáze' a navyše:
				"
			/>
			<ProcessSteps 
				steps={steps2}
			/>

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
			>
				<Icon icon="info-circle" />
			</TextBlock>

		</div>
	)
}

export default ProcessPage;