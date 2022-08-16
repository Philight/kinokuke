import React, { useState, useEffect, useLayoutEffect, useRef, createRef } from "react";

import GoogleMap from "../components/GoogleMap.js";
//import CompanyValues from "../components/CompanyValues.js";
//import HeadingBlock from "../components/HeadingBlock.js";
import ImageBanner from "../components/ImageBanner.js";
import TextBlock from "../components/TextBlock.js";
import FullwidthHeading from "../components/FullwidthHeading.js";

import "./../assets/css/pages/contactpage.css";

import bannerImg from "./../assets/images/contact-background.png";

//import kinokukelogo from "./../assets/images/kinokuke-logo.png";

const AboutPage = (props) => {
//	let { className, redirectUrl, socialFacebookUrl, socialInstagramUrl, title, subtitle, description, subdescription } = props;
    
	const valueRefs = useRef([]);

	const images = [
		{
			src: bannerImg 
		}
	];

	const location = {
//		address: '1600 Amphitheatre Parkway, Mountain View, california.',
		address: 'KK KINO KUKE\nVeithgasse 6, 1030 Wien, Austria\nFN 327348',
		//lat: 37.42216,
		lat: 48.1984812,
		//lng: -122.08427,
		lng: 16.3793685,
	}

	useEffect(() => {
//		window.scrollTo(0, 0)
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
		<div className="contact-page__container">		
{/*
			<HeadingBlock heading1="O NAS" heading2="Nase hodnoty" />
*/}
			<div className="contact-page__map-wrapper">
				<ImageBanner 
					images={images}
				/>
				<GoogleMap
					title="Môžete nás nájsť na"
					location={location}
					zoom={18.25}
				/> 
			</div>
		</div>
	)
}

export default AboutPage;