import React, { useState, useEffect, useLayoutEffect, useRef, createRef } from "react";

import GoogleMap from "../components/app/GoogleMap.js";
//import CompanyValues from "../components/CompanyValues.js";
//import HeadingBlock from "../components/text/HeadingBlock.js";
import ImageBanner from "../components/media/ImageBanner.js";
import TextBlock from "../components/text/TextBlock.js";
import FullwidthHeading from "../components/text/FullwidthHeading.js";

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
		address: 'KK KINO KUKE\nVeithgasse 6, 1030 Wien, Austria\nFN 327348',
		lat: 48.1984812,
		lng: 16.3793685,
	}

	return (
		<div className="contact-page__container">		
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