import React, { useState, useEffect, useLayoutEffect, useRef, createRef } from "react";

import GoogleMap from "../components/app/GoogleMap.js";
//import CompanyValues from "../components/CompanyValues.js";
//import HeadingBlock from "../components/HeadingBlock.js";
import ImageBanner from "../components/media/ImageBanner.js";
import GalleryMasonry from "../components/media/GalleryMasonry.js";
import TextBlock from "../components/text/TextBlock.js";
import HeadingWithBackground from "../components/text/HeadingWithBackground.js";

import "./../assets/css/pages/gallerypage.css";

import social from "../data/social.js";

const GalleryPage = (props) => {
//	let { className, redirectUrl, socialFacebookUrl, socialInstagramUrl, title, subtitle, description, subdescription } = props;
	const valueRefs = useRef([]);

	const images = [
		{
			src: 'https://admin.domtera.rs/server//storage/site/galerija/nova-dimenzija-planinskih-kuca-2.jpeg'
		}
	];

	return (
		<div className="gallery-page__container">		
			<ImageBanner 
				images={images}
			/>

			<div className="gallery-page__inner-section section">
				<HeadingWithBackground heading="Galéria" />
				<GalleryMasonry 
					gallery={social}
					columns="4"
					showLimit="10"
					loadBtnText="Load more"
				/>
	
			</div>
		</div>
	)
}

export default GalleryPage;