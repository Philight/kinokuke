import React, { useState, useEffect, useRef } from "react";

import HeadingBlock from "../components/HeadingBlock.js";
import ImageBanner from "../components/ImageBanner.js";
import TextBlock from "../components/TextBlock.js";
import FullwidthHeading from "../components/FullwidthHeading.js";
import DesignValues from "../components/DesignValues.js";

import "./../assets/css/pages/designpage.css";

import BLImage from "./../assets/images/design-values/balanced-living.png";
import GLImage from "./../assets/images/design-values/green-life.png";
import HOImage from "./../assets/images/design-values/home-hq.png";
import HSImage from "./../assets/images/design-values/home-spa.png";

import LSImage from "./../assets/images/design-values/life-space.png";
import LWImage from "./../assets/images/design-values/live-well.png";
import MCImage from "./../assets/images/design-values/master-chef.png";
import SHImage from "./../assets/images/design-values/smart-home.png";

const DesignPage = (props) => {
	let { className, enableAutoplay, interval } = props;

	const images = [
		{
			src: 'https://www.nwhm.com/sites/default/files/2018-06/DFeatures_Banner_2160x723px_1_2.jpg'
		}
	];

	const tiles = [
		{
			heading: 'Life Space',
			title: '[*TO TRANSLATE*]FLOORPLAN OPTIONS THAT FIT YOUR LIFE',
			text: '[*TO TRANSLATE*] Life Space offers flexible home designs to meet the needs of today’s families based on how they really use the space',
			imageSrc: LSImage
		},
				{
			heading: 'Green Life',
			title: 'GREEN LIFE',
			text: '[*TO TRANSLATE*] Is a program to committed to implementing ustenable building featires from energy efficient appliances to solar upgrades that will ultimately a p[ositive effect on our enviroment',
			imageSrc: GLImage
		},
				{
			heading: 'Balanced Living',
			title: '[*TO TRANSLATE*]AN ANCIENT ART AND SCIENCE',
			text: '[*TO TRANSLATE*] Balanced Living applies principles of Feng Shui to ensure good fortune for all homeowners.',
			imageSrc: BLImage
		},
		{
			heading: 'Smart Home',
			title: '[*TO TRANSLATE*]UPDATING TODAY’S NEW HOMES WOTH TOMORRO’S IDEAS',
			text: '[*TO TRANSLATE*] Introducing Home TECH package’s standard smart-home technology package offered in every new home . Advanced home integration systems that allow us to centraliza and control everything from utilities , security and entertainment for increased convinience and cost saving . The possibilities are endless',
			imageSrc: SHImage
		},
		{
			heading: 'Home HO',
			title: '[*TO TRANSLATE*]FUNCTIONAL OPPORTUNITIES FOR THE HOME OFFICE OF YOUR DREAMS',
			text: '[*TO TRANSLATE*] CAT 5/6 Wiring for Hi-Speed Internet, TV Outlets Throughout the Home, Surround Sound Throughout the Home, Home Automation, HDMI Pre-Wire, Built-In Tech Desks with File Storage',
			imageSrc: HOImage
		},
		{
			heading: 'Live Well',
			title: '[*TO TRANSLATE*]DESIGNED WITH YOUR HEALTH IN MIND',
			text: '[*TO TRANSLATE*]Relaxing Outdoor Spaces, Solar Panel Lease, Air Filtration & Purification Systems, Water Filtration & Purification Systems, Reverse Osmosis System',
			imageSrc: LWImage
		},
		{
			heading: 'Home Spa',
			title: '[*TO TRANSLATE*]YOUR IN-HOME SPA',
			text: '[*TO TRANSLATE*]Beautiful Designer Finishes in Primary & Secondary Bathrooms, Quartz and Marble Countertops, Drop-In Tubs, Spacious Showers with Curated Feautures, Adjacent Walk-In Closets',
			imageSrc: HSImage
		},
		{
			heading: 'Master Chef',
			title: '[*TO TRANSLATE*]BECAUSE THE KITCHEN IS THE HEART OF THE HOME',
			text: '[*TO TRANSLATE*]Stainless Steel Appliance Packages Including Oven, Microwave, Range, Hood and Dishwasher, Quartz Countertops and Backsplash',
			imageSrc: MCImage
		}
	]

	const [contentShown, setContentShown] = useState(false);
	const timeoutRef = useRef(null);

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	const resetTimeout = () => {
		if (timeoutRef.current) {
		  clearTimeout(timeoutRef.current);
		}
	}

	useEffect(() => {
console.log('autoplay');
		if (enableAutoplay) {
		    resetTimeout();
		    //isMobile ? columns=1 : '';
//console.log(columns);

		    timeoutRef.current = setTimeout(
				() =>
					setContentShown((prevValue) => !prevValue),
				interval
		    );
		}

	    return () => {
	    	resetTimeout();
	    };
	}, [contentShown]);

	return (
		<div className="design-page__container">
			<HeadingBlock heading1="DIZAJN" heading2="Dizajn v Kinokuke" />
			<ImageBanner 
				images={images}
			/>
			<TextBlock 
				heading="[*TO TRANSLATE*] Designed for how you want to live"
				text="[*TO TRANSLATE*] WE COMMIT ourselves fully to the art of design and the transformation of the newly built house into a home as rare and precious as the family who will live and thrive within it.
				<br/><br/>WE BELIEVE that when you come home, you should come home to yourself.
				<br/>This mantra serves to encourage the highest level of personal expression among our homebuyers and engages our wide ranging, individualized design services including green life, living canvas, balanced living, and life space.
				<br/><br/>WE EMBRACE the architectural integrity and character of every home and believe that every home is unique to every family. We believe the design decisions made by our homebuyers are shaped by the places they have traveled, the depth of their life experiences, and the people they have loved along the way."
			/>
			<FullwidthHeading heading1={`dizajn`} heading2={`hodnoty`}/>
			<DesignValues
				tiles={tiles}
				columns="4"
				enableAutoplay
				interval="3000"
			/>

		</div>
	)
}

export default DesignPage;