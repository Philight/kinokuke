import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import SectionHeading from "../text/SectionHeading.js";
import Icon from "../utility/Icon.js";

import "../../assets/css/components/gallerycarousel.css";

const GalleryCarousel = (props) => {
	let { gallery, columns, rows } = props;

	const [activeIndex, setActiveIndex] = useState(0);
	const [isMobile, setIsMobile] = useState(false);

	// override columns
	isMobile ? columns=1 : '';

	useEffect(() => {
		if (window.innerWidth < 1024) { setIsMobile(true); }
	}, [])

	const updateIndex = (newIndex) => {
		if (newIndex > (gallery.length)/columns/rows-1) {
			newIndex = Math.ceil((gallery.length)/columns/rows-1);
		
		} else if (newIndex < 0) {
			newIndex = 0
		}
		setActiveIndex(newIndex);
	}

	return (
		<section className={`gallery-carousel__container row-${rows} col-${columns}`}>
			<Icon 
				icon="chevron-left" 
				className={`nav-arrow left ${activeIndex==0 ? 'disabled' :'' }`}
				onClick={() => {updateIndex(activeIndex - 1)}}
			/>
			<div className="gallery-carousel__slider-wrapper">
				<div className="gallery-carousel__slider" style={{ transform: `translateX(-${activeIndex * 100}%)`}}>
					{ gallery.map((item, index) => (
						<div className="gallery-carousel__slide">
							<div className="image-wrapper">
								<img src={item.imageSrc} />
							</div>
							<h3 className="gallery-carousel__slide-title">{item.title}</h3>
						</div>
					))}
				</div>
			</div>
			<Icon 
				icon="chevron-right" 
				className={`nav-arrow right ${activeIndex==Math.ceil((gallery.length)/columns/rows-1) ? 'disabled' :'' }`}
				onClick={() => { updateIndex(activeIndex + 1) }}
			/>
		</section>

	)
}

export default GalleryCarousel;