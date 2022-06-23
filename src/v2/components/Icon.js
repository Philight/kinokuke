import React, { forwardRef } from "react";

//import "./../assets/css/components/headingblock.css";

import menuThick from "./../assets/icons/menu-thick.svg";
import menuThin from "./../assets/icons/menu-thin.svg";
import xMark from "./../assets/icons/x-mark.svg";

const Icon = forwardRef((props, ref) => {
	let { icon, className, onClick } = props;

	const getIcon = () => {
		switch(icon.toLowerCase()) {
		    case 'menu-thick':
		      return menuThick;
		    case 'menu-thin':
		      return menuThin;
		    case 'x-mark':
		      return xMark;

		    default:
		      return '';
	  	}
	}


	return (
		<div className={`icon_container ${className} icon-${icon}`} ref={ref} onClick={onClick}>
			<img className="icon"
				style={{WebkitMask: `url(${getIcon()}) no-repeat center`, mask: `url(${getIcon()}) no-repeat center`}} 
			/>
		</div>
	)
})

export default Icon;