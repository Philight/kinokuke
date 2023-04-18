import React, { useState, useLayoutEffect, useRef, createRef } from "react";

import DescriptionWithImage from "../components/DescriptionWithImage.js";
import CompanyValues from "../components/CompanyValues.js";
import HeadingBlock from "../components/text/HeadingBlock.js";
import ImageBanner from "../components/media/ImageBanner.js";
import TextBlock from "../components/text/TextBlock.js";
import FullwidthHeading from "../components/text/FullwidthHeading.js";

import "./../assets/css/pages/aboutpage.css";

import pageBkg from "./../assets/images/page-bkg/about-page-bkg.png";
//import kinokukelogo from "./../assets/images/kinokuke-logo.png";

const AboutPage = (props) => {
//	let { className, redirectUrl, socialFacebookUrl, socialInstagramUrl, title, subtitle, description, subdescription } = props;
    
	const valueRefs = useRef([]);

	const images = [
		{
//			src: 'https://thumbs.dreamstime.com/z/successful-architects-team-top-view-four-architect-checking-project-looking-camera-92877774.jpg'
//			src: 'https://i0.wp.com/bostonrealestatetimes.com/wp-content/uploads/2021/10/Colliers-Italy.jpg?fit=2160%2C1200&ssl=1',
			src: pageBkg,
//			src: 'https://vietnamconstruction.vn/wp-content/uploads/2016/01/Project-management-for-construction.jpg'
		}
	];

	const [companyValues, setCompanyValues] = useState([
		{
			title: 'Lepší Začiatok',
			text: 'Rozumieme aky náročný je proces vybrať si ten správný domov.<br/>Dbáme na to ako vyzerá, akú energiu vyžaruje, ako sa v ňom cítite.<br/>U nás stojíme vždy pri Vás.',
			icon: 'v1',
			imageSrc: 'https://dsqqu7oxq6o1v.cloudfront.net/preview-562653-9Knu8vNR8PdSgTuM-large.JPG',
			isFixed: false
		},
		{
			title: 'Lepší domov',
			text: 'Budovanie každého domu nám dáva hlboký pocit naplnenia, každý deň sa usilujeme prispieť k lepšiemu prostrediu, podporovať komunity a to všetko <br/>s vedomím pre spoločenskú integritu',
			icon: 'v2',
			imageSrc: 'https://i.pinimg.com/originals/c5/4b/f3/c54bf387f6fd7e8563e2c42d7ee93f17.jpg',
			isFixed: false
		},
		{
			title: 'Lepší život',
			text: 'Každý z nás v KinoKuke zdieľame rovnaký názor, že každý nový domov je nová príležitosť vybudovať niečo lepšie.<br/> Na nové a lepšie začiatky',
			icon: 'v3',
			imageSrc: 'https://www.nerdwallet.com/assets/blog/wp-content/uploads/2021/05/GettyImages-905902144-2400x1440.jpg',
			isFixed: false
		}
	])

/*
	const getOrCreateRef = (el, id) => {
	    //if (!valueRefs.current.includes(id)) {

	        valueRefs.current[id] = el;
	    //}
	    return valueRefs.current[id];
	}
*/
	return (
		<div className="about-page__container">		
			<HeadingBlock heading1="O NÁS" heading2="Život v Primetech" />
			<ImageBanner 
				images={images}
			/>
			<TextBlock 
				heading="Naše hodnoty"
				text="Všetci z nás si chceme vybudovať lepší život. Život naplnený všetkým a všetkými na ktorých záleží najviac. A miesto, ktoré môžeme nazývať domov, ktoré bude všetko spájať tými najlepšími možnými spôsobmi. Rozumieme ako dôležitý je domov pre Vás. Pre nás znamená tiež veľa. Naše domovy sú vyjadrením vedomostí, ktoré máme o tom ako ľudia chcú žiť. Pre nás to sú individuálné umelecké diela vystavené vo svete, aby ich mohli všetci vidieť a tešiť sa z nich.
<br/>Každy z nás zdieľame silný názor, že každý nový domov je nová príležitosť vybudovať niečo lepšie.
"
			/>			
			{ companyValues.map((value, index) => (
				<CompanyValues 
					//innerRef={(element) => {valueRefs.current[index] = element}}
					key={`${index}-${value.icon}`}
					id={`${index}-${value.icon}`}
					//ref={(element) => { getOrCreateRef(element, index); /*valueRefs.current[index] = element*/ }}
					title={value.title}
					text={value.text}
					icon={value.icon}
					imageSrc={value.imageSrc}
				/>
			)) }
		</div>
	)
}

export default AboutPage;