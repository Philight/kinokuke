import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import FullwidthHeading from "./FullwidthHeading.js";
import "./../assets/css/components/findyourhome.css";

import houses from "../data/houses.js";

const FindYourHome = (props) => {
	let { columns, enableAutoplay, interval, enableNavigation } = props;

	const [isMobile, setIsMobile] = useState(false);
	const [isTablet, setIsTablet] = useState(false);
	const [shownHouses, setShownHouses] = useState(houses);

	const [activeIndex, setActiveIndex] = useState(0);
	const timeoutRef = useRef(null);

    isMobile ? columns=1 : '';
    isTablet ? columns=2 : '';

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
		if (window.innerWidth < 600) { 
			setIsMobile(true); 
		} else if (600 < window.innerWidth && window.innerWidth < 1024) { 
			setIsTablet(true); 
		}

		// filter out houses shown
		let reducedHouses = [];
		for (let i = 0; i < shownHouses.length; i++) {
			if (shownHouses[i].title == 'Verona' || shownHouses[i].title == 'Milano') continue;
			reducedHouses.push(shownHouses[i]);
		}
		setShownHouses(reducedHouses);


	}, [])

	useEffect(() => {
console.log('autoplay');
		if (enableAutoplay) {
		    resetTimeout();
		    isMobile ? columns=1 : '';
		    isTablet ? columns=2 : '';
console.log(columns);

		    timeoutRef.current = setTimeout(
				() =>
					setActiveIndex((prevIndex) =>
						prevIndex+1 >= shownHouses.length/columns ? 0 : prevIndex + 1
					),
				interval
		    );
		}

	    return () => {
	    	resetTimeout();
	    };
	}, [activeIndex]);

	let arraySize = Math.ceil(shownHouses.length/columns); 
	const navDotIndexes = [...Array(arraySize).keys()];//.slice(0, -1);
console.log('navDotIndexes');
console.log(navDotIndexes);

	return (
		<div className={`find-your-home__container col-${columns}`}>
			{/*<FullwidthHeading heading1="najdi" heading2="svoj domov" />*/}
			<div 
				className="find-your-home__houses-container" 
				style={{ transform: `translateX(-${activeIndex * 100}%)` }}
			>
			{ shownHouses.map((house, index) => (
				//index < columns ? (
					<div className="find-your-home__item">
						<Link to={'/model/' + house.title}>
			        		<h2>{house.title}</h2>
			        		<div className="find-your-home__image-wrapper"><img src={house.imageSrc} /></div>
						</Link>
		    		</div>
		    	//) : null
		    )) }
			</div>
			{ enableNavigation && 
				<div className="find-your-home__navigation">
					{ navDotIndexes.map((item, index) => (
						<div className={`find-your-home__navigation-dot ${activeIndex>=index ? 'active' :''}`}
							onClick={() => setActiveIndex(index)}>
						</div>
					))}
				</div>
			}
		</div>
	)
}

export default FindYourHome;