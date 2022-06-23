import React, { useState, useEffect, useRef } from "react";

import FullwidthHeading from "./FullwidthHeading.js";
import "./../assets/css/components/socialgrid.css";

import chevronRight from "./../assets/icons/chevron-right.svg";
import instagramIcon from "./../assets/icons/instagram-outline.svg";

const SocialGrid = (props) => {
	let { columns, rows, posts, enableAutoplay, interval } = props;

	const [activeIndex, setActiveIndex] = useState(0);
	const [isMobile, setIsMobile] = useState(false);
	const [contentShown, setContentShown] = useState(false);

	const timeoutRef = useRef(null);

	useEffect(() => {
		if (window.innerWidth < 768) { setIsMobile(true); }
	}, [])

	const updateIndex = (newIndex) => {
//		if (newIndex > React.Children.count(posts)) {
console.log(newIndex);
console.log(Object.keys(posts).length);
		isMobile ? columns=1 : '';

		if (newIndex > (Object.keys(posts).length/columns/rows)) {
			newIndex = 0;
		}
		setActiveIndex(newIndex);
	}

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
		<div className="social-grid__container">
			<FullwidthHeading heading1="kinokuke" heading2="social" />
			<div className={`social-grid__posts-carousel`}>
				<img className="nav-arrow" 
					style={{webkitMask: `url(${chevronRight}) no-repeat center`, mask: `url(${chevronRight}) no-repeat center`}} 
					onClick={() => {updateIndex(activeIndex + 1)}}
				/>
				<div className={`social-grid__posts-container col-${columns} rows-${rows}`} style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
				{ posts.map((post, index) => (
					<div className="social-grid__post">
		        		<div className="social-grid__image-wrapper"><img src={post.imageSrc} /></div>
		        		<a href="https://instagram.com" target="_blank">
		        			<div className={`social-grid__content ${index%2 && contentShown ? 'shown' :''}`}>
		        				<div className="icon-wrapper">
			        				<img style={{webkitMask: `url(${instagramIcon}) no-repeat center`, mask: `url(${instagramIcon}) no-repeat center`}} />
			        			</div>
			        			<p>{post.text}</p>
			        			<p>{post.hashtags}</p>
		        			</div>
		        		</a>
		    		</div>
			    )) }
		    	</div>
    		</div>
		</div>
	)
}

export default SocialGrid;