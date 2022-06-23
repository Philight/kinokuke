import React, { useState, useEffect, useLayoutEffect, useRef, createRef } from "react";

import DescriptionWithImage from "../components/DescriptionWithImage.js";
import CompanyValues from "../components/CompanyValues.js";
import HeadingBlock from "../components/HeadingBlock.js";
import ImageBanner from "../components/ImageBanner.js";
import TextBlock from "../components/TextBlock.js";
import FullwidthHeading from "../components/FullwidthHeading.js";

import "./../assets/css/pages/aboutpage.css";

import tymkinokuke from "./../assets/images/tym-kinokuke.png";
//import kinokukelogo from "./../assets/images/kinokuke-logo.png";

const AboutPage = (props) => {
//	let { className, redirectUrl, socialFacebookUrl, socialInstagramUrl, title, subtitle, description, subdescription } = props;
    
	const valueRefs = useRef([]);

	const images = [
		{
			//src: 'https://thumbs.dreamstime.com/z/successful-architects-team-top-view-four-architect-checking-project-looking-camera-92877774.jpg'
			//src: 'https://i0.wp.com/bostonrealestatetimes.com/wp-content/uploads/2021/10/Colliers-Italy.jpg?fit=2160%2C1200&ssl=1',
			src: tymkinokuke
		}
	];

	const [companyValues, setCompanyValues] = useState([
		{
			title: 'Lepší Zážitok',
			text: 'We live intentionally; actively nurturing a balanced mind, body, and spirit.',
			icon: 'v1',
			imageSrc: 'https://dsqqu7oxq6o1v.cloudfront.net/preview-562653-9Knu8vNR8PdSgTuM-large.JPG',
			isFixed: false
		},
		{
			title: 'Lepší domov',
			text: 'We live intentionally; actively nurturing a balanced mind, body, and spirit.',
			icon: 'v2',
			imageSrc: 'https://i.pinimg.com/originals/c5/4b/f3/c54bf387f6fd7e8563e2c42d7ee93f17.jpg',
			isFixed: false
		},
		{
			title: 'Lepší život',
			text: 'We live intentionally; actively nurturing a balanced mind, body, and spirit.',
			icon: 'v3',
			imageSrc: 'https://www.nerdwallet.com/assets/blog/wp-content/uploads/2021/05/GettyImages-905902144-2400x1440.jpg',
			isFixed: false
		}
	])

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

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
			<HeadingBlock heading1="O NÁS" heading2="Život v Kino Kuke" />
			<ImageBanner 
				images={images}
			/>
			<TextBlock 
				heading="Naše hodnoty"
				text="[*TO TRANSLATE*] All of us are looking to build a better life. A life filled with everything and everyone that matters most. And a place to call home that brings it all together in the best possible ways. We understand how important your home is to you. It means a lot to us too. Our homes are an expression of the knowledge we have about how people want to live. For us they are individual works of art for the world to see and enjoy.
<br/>[*TO TRANSLATE*] Each of us here share in a strongly held belief that every new home is a new opportunity to build something better.
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

{/*
			<CompanyValues 
				title="Lepšia skúsenosť."
				text="We live intentionally; actively nurturing a balanced mind, body, and spirit."
				icon="v1"
				imageSrc="https://dsqqu7oxq6o1v.cloudfront.net/preview-562653-9Knu8vNR8PdSgTuM-large.JPG"
			/>
			<CompanyValues 
				title="Lepší domov."
				text="We live intentionally; actively nurturing a balanced mind, body, and spirit."
				icon="v2"
				imageSrc="https://dsqqu7oxq6o1v.cloudfront.net/preview-562653-9Knu8vNR8PdSgTuM-large.JPG"
			/>
*/}
			<FullwidthHeading heading1={`tým`} heading2={`kinokuke`}/>


		</div>
	)
}

export default AboutPage;