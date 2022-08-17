import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

import Icon from "../utility/Icon.js";
import SectionHeading from "../text/SectionHeading.js";
import HeadingUnderline from "../text/HeadingUnderline.js";

import "../../assets/css/components/imagecarousel.css";

const ImageCarousel = (props) => {
	let { 
		className, images, showOverlay, showViewBox, showStartBtn, startBtnText,
		heading, text, btnText, btnSrc, isHTML 
	} = props;

	const [slide, setSlide] = useState(0);
	const [totalSlides, setTotalSlides] = useState(0);
	const [moveBy, setMoveBy] = useState(0);
	const [moveOffset, setMoveOffset] = useState(0);
	const [isInitial, setIsInitial] = useState(true);

	const [imageDimensions, setImageDimensions] = useState([]);
	const imgRefs = useRef([]);

	useEffect(() => {
		let slideCount = 0;
		for (const img of images) {
			slideCount = slideCount + img.columns;
		}
		setTotalSlides(slideCount);
	}, [])

	const updateImageData = (imgIndex, imgProperties) => {
		let oldArray = [...imageDimensions];

		oldArray[imgIndex] = {...oldArray[imgIndex], ...imgProperties, columnWidth: imgProperties.width / images[imgIndex].columns};

		setMoveBy(imgProperties.width / images[imgIndex].columns);

		setMoveOffset((window.innerWidth - (imgProperties.width / images[imgIndex].columns)) / 2); 

		setImageDimensions(oldArray);
	}

	const replaceNewline = (textWithoutBreaks) => {
		let textWithBreaks = textWithoutBreaks.split('<br/>').join('\n');
		return textWithBreaks;
	}

	const startSlide = () => {
		if (isInitial) {
			setSlide(0);
			setIsInitial(false);
		}
	}

	const handleSlide = () => {
		if (isInitial) {
			startSlide();
		} else {
			setSlide(slide+1 >= totalSlides ? 0 : slide+1);
		}
	}

	return (
		<div className={`image-carousel__container ${className}`}>
			{ showStartBtn && <a className={`image-carousel__start-btn ${!isInitial ? 'disabled' :''}`} onClick={startSlide}>{startBtnText}
			</a> }

			{ showViewBox && !isInitial && <div className={`image-carousel__view-box`}>
				<div className={`image-carousel__view-box-left`}></div>
				<div className={`image-carousel__view-box-center`} style={{ flexBasis: moveBy+'px'}}></div>
				<div className={`image-carousel__view-box-right`}></div>
				<div className={`image-carousel__view-box-links`} style={{ transform: `translateX(${isInitial ? '0' : slide*-moveBy+moveOffset}px)` }}>
				{ images.map((image, index) => {
					return ( image.url 
						? <Link to={image.url} style={{ width: `${moveBy}px` }}></Link>
						: <a style={{ width: `${moveBy}px` }}></a>)
				}) }
				</div>
			</div> }

			<div className={`image-carousel__images-view`}>
				<div className={`image-carousel__images-container`} style={{ transform: `translateX(${isInitial ? '0' : slide*-moveBy+moveOffset}px)` }}>
				{ images.map((image, index) => (
					<div className={`image-wrapper col-${image.columns}`} >
						<img 
							src={image.src} 
							ref={el => imgRefs.current[index] = el} 
							onLoad={() => updateImageData(index, {
								width: imgRefs.current[index].offsetWidth,
								height: imgRefs.current[index].offsetHeight,
							})}
						/>
						{ showOverlay && <div className="image-overlay"></div>}
						{ image.url && <Link to={image.url} style={{ width: `${moveBy}px` }}>
							<Icon icon="tap-finger" className="tooltip"/>
						</Link> }
					</div>
				)) }
				</div>
			</div>
			<div className="image-carousel__content">
				{!isHTML && heading && <h1 className="description-with-image__title">{replaceNewline(heading)}</h1>}
				{isHTML && heading && <h1 className="description-with-image__title" dangerouslySetInnerHTML={{ __html: heading }} />}			

				{text && <p className="image-carousel__text">{text}</p>}
				{btnText && 
					<Link to={btnSrc}>
						<button className="cta-btn">{btnText}</button>
					</Link>
				}
			</div>

			<Icon 
				icon="chevron-right" className="nav-arrow right flying highlight" 
				onClick={handleSlide}
			/>
		</div>
	)
}

export default ImageCarousel;