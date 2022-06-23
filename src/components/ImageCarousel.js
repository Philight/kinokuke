import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

import Icon from "./Icon.js";
import SectionHeading from "./SectionHeading.js";
import HeadingUnderline from "./HeadingUnderline.js";

import "./../assets/css/components/imagecarousel.css";

const ImageCarousel = (props) => {
	let { className, images, heading, text, btnText, btnSrc, showOverlay, isHTML } = props;

	const [slide, setSlide] = useState(0);
	const [totalSlides, setTotalSlides] = useState(0);
	const [moveBy, setMoveBy] = useState(0);
	const [moveOffset, setMoveOffset] = useState(0);

	const [imageDimensions, setImageDimensions] = useState([]);
	const imgRefs = useRef([]);

	useEffect(() => {
		let slideCount = 0;
		for (const img of images) {
			slideCount = slideCount + img.columns;
		}
		setTotalSlides(slideCount);
console.log('slideCount'); 
console.log(slideCount); 
	}, [images])

	const updateImageData = (imgIndex, imgProperties) => {
console.log('imgProperties'); 
console.log(imgProperties); 

		let oldArray = [...imageDimensions];
console.log('oldArray'); 
console.log(oldArray); 
//		for(let i = 0; i<oldArray.length; i++) {
//			if(i == imgIndex) {
				//oldArray[imgIndex] = imgProperties
		oldArray[imgIndex] = {...oldArray[imgIndex], ...imgProperties, columnWidth: imgProperties.width / 3};

console.log(imgProperties.width / 3);
		setMoveBy(imgProperties.width / 3);

		//if (window.innerWidth < (imgProperties.width / 3)) {
			setMoveOffset((window.innerWidth - (imgProperties.width / 3)) / 2); 
console.log((window.innerWidth - (imgProperties.width / 3)) / 2);
		//}

		setImageDimensions(oldArray);
//console.log(imageDimensions); 
	}

	const replaceNewline = (textWithoutBreaks) => {
		let textWithBreaks = textWithoutBreaks.split('<br/>').join('\n');
		return textWithBreaks;
	}

	const handleSlide = () => {
		setSlide(slide+1 >= totalSlides ? 0 : slide+1);
	}

	return (
		<div className={`image-carousel__container ${className}`}>
			<Icon 
				icon="chevron-right" className="nav" 
				onClick={handleSlide}
			/>
			<div className={`image-carousel__images-container`} style={{ transform: `translateX(${slide*-moveBy+moveOffset}px)` }}>
			{ images.map((image, index) => (
				<div className={`image-wrapper col-${image.columns}`} >
					<img 
						src={image.src} 
						ref={el => imgRefs.current[index] = el} 
						onLoad={() => updateImageData(index, {
//							width: imgRefs.current[index].naturalWidth,
							width: imgRefs.current[index].offsetWidth,
							height: imgRefs.current[index].offsetHeight,
						})}
					/>
					{showOverlay && <div className="image-overlay"></div>}
				</div>
			)) }
			</div>
			<div className="image-carousel__content">
				{/*<SectionHeading heading={heading} className="description-with-image__title"/>*/}

				{!isHTML && heading && <h1 className="description-with-image__title">{replaceNewline(heading)}</h1>}
				{isHTML && heading && <h1 className="description-with-image__title" dangerouslySetInnerHTML={{ __html: heading }} />}			

				{/*8heading && <HeadingUnderline />*/}

				{text && <p className="image-carousel__text">{text}</p>}
				{btnText && 
					<Link to={btnSrc}>
						<button className="cta-btn">{btnText}</button>
					</Link>
				}
			</div>
		</div>
	)
}

export default ImageCarousel;