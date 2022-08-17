import React, { useState, useEffect, useRef }  from "react";

import HeadingUnderline from "./text/HeadingUnderline.js";

import "./../assets/css/components/headingblock.css";

const DesignValues = (props) => {
	let { tiles, rows, columns, enableAutoplay, interval } = props;

	const [contentShown, setContentShown] = useState(false);
	const timeoutRef = useRef(null);

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
		<div className={`design-values__container section col-${columns}`}>
			{ tiles.map((tile, index) => (
				<div className={`design-values__item 
					${index%2==0 && contentShown ? 'shown' :''} 
					${index%2==1 && !contentShown ? 'shown' :''}`}
				>
					<h2>{tile.heading}</h2>
					<img src={tile.imageSrc} />
					<div className="design-values__image-overlay"></div>
					<div className="design-values__item-overlay">
						<h3>{tile.title}</h3>
						<p>{tile.text}</p>
					</div>
				</div>
			)) }
		</div>
	)
}

export default DesignValues;