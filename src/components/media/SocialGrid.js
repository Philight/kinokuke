import React, { useState, useEffect, useRef } from "react";

import FullwidthHeading from "../text/FullwidthHeading.js";
import Icon from "../utility/Icon.js";
import "../../assets/css/components/socialgrid.css";

import chevronRight from "../../assets/icons/chevron-right.svg";
import instagramIcon from "../../assets/icons/instagram-outline.svg";

const SocialGrid = (props) => {
	let { columns, rows, posts, enableAutoplay, interval } = props;

	const [activeIndex, setActiveIndex] = useState(0);
	const [isMobile, setIsMobile] = useState(false);
	const [isTablet, setIsTablet] = useState(false);
	
	const [contentShown, setContentShown] = useState(false);

	const timeoutRef = useRef(null);

	useEffect(() => {
		if (window.innerWidth < 600) { 
			setIsMobile(true); 
		} else if (600 < window.innerWidth && window.innerWidth < 1024) { 
			setIsTablet(true); 
		}
	}, [])

	const updateIndex = (newIndex) => {
		isMobile ? columns=1 : '';
	    isTablet ? columns=2 : '';

		if (newIndex > Math.ceil((Object.keys(posts).length/columns/rows)-1)) {
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
		if (enableAutoplay) {
		    resetTimeout();

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

				<Icon icon="chevron-right" className="nav-arrow highlight flying right" 
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