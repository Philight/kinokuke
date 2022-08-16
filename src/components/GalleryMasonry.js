import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";

import SectionHeading from "./SectionHeading.js";
import Icon from "./Icon.js";
//import HeadingUnderline from "./HeadingUnderline.js";
//import SectionSubheading from "./SectionSubheading.js";

import "./../assets/css/components/gallerymasonry.css";

const GalleryMasonry = (props) => {
	let { gallery, columns, showLimit, loadBtnText } = props;

	const [isMobile, setIsMobile] = useState(false);
	const [isTablet, setIsTablet] = useState(false);

	const [modalVisible, setModalVisible] = useState(false);
	const [activeIndex, setActiveIndex] = useState(0);
	const [timesLoaded, setTimesLoaded] = useState(1);
	const [gridMaxHeight, setGridMaxHeight] = useState('px');
	const [gridVPadding, setGridVPadding] = useState(0);

 	const gridRef = useRef(null);

	// override columns
	isMobile ? columns=2 : '';
	isTablet ? columns=3 : '';

	useEffect(() => {
		if (window.innerWidth < 600) {
			setIsMobile(true); 
		
		} else if (window.innerWidth < 1400) {
			setIsTablet(true); 
		}
	}, [])

	useLayoutEffect(() => {
console.log('height');
console.log(gridRef.current.clientHeight);
		let nodeStyle = window.getComputedStyle(gridRef.current);
/*
console.log(nodeStyle.maxHeight);
console.log(nodeStyle.getPropertyValue('max-height'));
		setGridMaxHeight(nodeStyle.getPropertyValue('max-height'));
*/
console.log(nodeStyle.paddingTop);
console.log(nodeStyle.paddingBottom);
console.log(nodeStyle.getPropertyValue('padding-top'));
		let totalPadding = parseInt(nodeStyle.paddingTop.replace('px', '')) + parseInt(nodeStyle.paddingBottom.replace('px', ''));
		setGridVPadding(totalPadding);

console.log(nodeStyle.height);
console.log(nodeStyle.getPropertyValue('height'));
		setGridMaxHeight(nodeStyle.getPropertyValue('height'));
	}, [])

	// Create Custom Event for Navigation bar
	const hideNavEvent = new CustomEvent('hidenavigation', { detail: true });
	const showNavEvent = new CustomEvent('hidenavigation', { detail: false });

	const showModal = (index) => {
		setActiveIndex(index);
		setTimeout(() => {
			setModalVisible(true);
		}, 50)

		window.dispatchEvent(hideNavEvent);
	}
	const hideModal = () => {
		setModalVisible(false);

		window.dispatchEvent(showNavEvent);
	}

	const updateIndex = (newIndex) => {
		if (newIndex > (gallery.length)-1) {
			newIndex = Math.ceil((gallery.length)-1);
		
		} else if (newIndex < 0) {
			newIndex = 0
		}
		setActiveIndex(newIndex);
	}

	const loadItems = () => {
		if (gallery.length > showLimit * timesLoaded) {
			let addTimesLoaded = timesLoaded + 1;

//console.log(gridMaxHeight);
//			gridRef.current.style.maxHeight = gridMaxHeight.replace('px', '') * addTimesLoaded + 'px';
			gridRef.current.style.height = (parseInt(gridMaxHeight.replace('px', ''))-gridVPadding) * addTimesLoaded + 'px';
			setTimesLoaded(addTimesLoaded);
		}

	}

	return (
		<section className={`gallery-masonry__container col-${columns}`}>

			<div className={`gallery-masonry__modal ${modalVisible ? 'visible' :''}`}>
				<div className={`gallery-masonry__modal-background`} onClick={() => hideModal()}></div>
				<Icon icon="x-mark-oval" className="gallery-masonry__modal-hide" onClick={hideModal} />
				
				<div className={`gallery-masonry__modal-gallery`}>
					<Icon 
						icon="chevron-left" 
						className={`nav-arrow left ${activeIndex==0 ? 'disabled' :'' }`}
						onClick={() => { updateIndex(activeIndex - 1) }}
					/>

					<div className="gallery-masonry__modal-slider-wrapper">
						<div className="gallery-masonry__modal-slider" style={{ transform: `translateX(-${activeIndex * 100}%)`}}>
						{ gallery.map((item, index) => (
							<figure className={`image-wrapper gallery-masonry__modal-slide`}>
								<img src={item.imageSrc} />
							</figure>
						))}
						</div>
					</div>

					<Icon 
						icon="chevron-right" 
						className={`nav-arrow right ${activeIndex==Math.ceil((gallery.length)-1) ? 'disabled' :'' }`}
						onClick={() => { updateIndex(activeIndex + 1) }}
					/>

				</div>
			</div>

			<div className="gallery-masonry__grid" ref={gridRef}>
				{ gallery.map((item, index) => { 
					return index < showLimit*timesLoaded ? 
						(<figure 
							className={`image-wrapper gallery-masonry__grid-item item-${index+1}`}
							data-item-index={index}
							onClick={() => {showModal(index)}}
						>
							<img src={item.imageSrc} />
						</figure>)
					: '';
				})}
			</div>

			{ loadBtnText && 
				<div className="gallery-masonry__load-btn-wrapper" onClick={loadItems}>
					<a className="gallery-masonry__load-btn">{loadBtnText}</a> 
				</div>
			}

		</section>

	)
}

export default GalleryMasonry;