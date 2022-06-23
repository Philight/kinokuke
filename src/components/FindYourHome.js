import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import FullwidthHeading from "./FullwidthHeading.js";
import "./../assets/css/components/findyourhome.css";

const FindYourHome = (props) => {
	let { columns, houses, enableAutoplay, interval } = props;

	const [isMobile, setIsMobile] = useState(false);

	const [activeIndex, setActiveIndex] = useState(0);
	const timeoutRef = useRef(null);

	const updateIndex = (newIndex) => {
	//		if (newIndex > React.Children.count(posts)) {
console.log(newIndex);
console.log(Object.keys(posts).length);

		if (newIndex > (Object.keys(posts).length/columns)) {
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
		if (window.innerWidth < 768) { setIsMobile(true); }
	}, [])

	useEffect(() => {
console.log('autoplay');
		if (enableAutoplay) {
		    resetTimeout();
		    isMobile ? columns=1 : '';
console.log(columns);

		    timeoutRef.current = setTimeout(
				() =>
					setActiveIndex((prevIndex) =>
						prevIndex+1 >= houses.length/columns ? 0 : prevIndex + 1
					),
				interval
		    );
		}

	    return () => {
	    	resetTimeout();
	    };
	}, [activeIndex]);

	return (
		<div className={`find-your-home__container col-${columns}`}>
			{/*<FullwidthHeading heading1="najdi" heading2="svoj domov" />*/}
			<div 
				className="find-your-home__houses-container" 
				style={{ transform: `translateX(-${activeIndex * 100}%)` }}
			>
			{ houses.map((house, index) => (
				//index < columns ? (
					<div className="find-your-home__item">
						<Link to={'/model/' + house.name.toLowerCase()}>
			        		<h2>{house.name}</h2>
			        		<div className="find-your-home__image-wrapper"><img src={house.src} /></div>
						</Link>
		    		</div>
		    	//) : null
		    )) }
			</div>
		</div>
	)
}

export default FindYourHome;