import React, { forwardRef } from "react";

import "../../assets/css/components/headingblock.css";

import chevronLeftIcon from "../../assets/icons/chevron-left.svg";
import chevronRightIcon from "../../assets/icons/chevron-right.svg";
import chevronBottomIcon from "../../assets/icons/chevron-bottom.svg";
import chevronBoldBottomIcon from "../../assets/icons/chevron-bold-bottom.svg";
import emailCircleIcon from "../../assets/icons/email-circle.svg";
import facebookIcon from "../../assets/icons/facebook-outline.svg";
import infoCircleIcon from "../../assets/icons/info-circle.svg";
import instagramIcon from "../../assets/icons/instagram-outline.svg";
import kkPrimeTech from "../../assets/icons/kk-primetech.svg";
import linkedInIcon from "../../assets/icons/linkedin-outline.svg";
import locationIcon from "../../assets/icons/location-fill.svg";
import menuMediumIcon from "../../assets/icons/menu-medium.svg";
import menuThinIcon from "../../assets/icons/menu-thin.svg";
import menuThickIcon from "../../assets/icons/menu-thick.svg";

import processStep1 from "../../assets/images/process-steps/process-step-1.svg";

import v1Icon from "../../assets/icons/v1.svg";
import v2Icon from "../../assets/icons/v2.svg";
import v3Icon from "../../assets/icons/v3.svg";
import xMarkIcon from "../../assets/icons/x-mark.svg";
import xMarkOvalIcon from "../../assets/icons/x-mark-oval.svg";
import youtubeIcon from "../../assets/icons/youtube-outline.svg";

const Icon = forwardRef((props, ref) => {
	let { icon, width, height, color,
		className, style, onClick 
	} = props;

	const iconName = icon.toLowerCase();

	const getIcon = () => {
		switch(iconName) {
		    case 'approval':
		      return 'https://ik.imagekit.io/0ovzivqyfai/kinokuke/icon/process/approval.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1655761348610';		    
		    case 'build':
		      return 'https://ik.imagekit.io/0ovzivqyfai/kinokuke/icon/process/build.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1655761512997';
		    case 'chevron-left':
		      return chevronLeftIcon;
		    case 'chevron-right':
		      return chevronRightIcon;
		    case 'chevron-bottom':
		      return chevronBottomIcon;
		    case 'chevron-bold-bottom':
		      return chevronBoldBottomIcon;
  		    case 'choice':
		      return 'https://ik.imagekit.io/0ovzivqyfai/kinokuke/icon/process/choice.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1655760420707';
		    case 'delivery':
		      return 'https://ik.imagekit.io/0ovzivqyfai/kinokuke/icon/process/delivery.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1655761505818';		    
		    case 'design':
		      return 'https://ik.imagekit.io/0ovzivqyfai/kinokuke/icon/process/design.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1655762231166';		    
		    case 'electrician':
		      return 'https://ik.imagekit.io/0ovzivqyfai/kinokuke/icon/process/electrician.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1658241626956';		   
		    case 'email-circle':
		      return emailCircleIcon;
		    case 'facebook':
		      return facebookIcon;
		    case 'foundation':
		      return 'https://ik.imagekit.io/0ovzivqyfai/kinokuke/icon/process/foundation.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1658248378908';		      
		    case 'floor':
		      return 'https://ik.imagekit.io/0ovzivqyfai/kinokuke/icon/process/floor.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1658244354232';
		    case 'home':
		      return 'https://ik.imagekit.io/0ovzivqyfai/kinokuke/icon/process/home.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1655762144105';		      
		    case 'info-circle':
		      return infoCircleIcon;
		    case 'instagram':
		      return instagramIcon;
		    case 'install':
		      return 'https://ik.imagekit.io/0ovzivqyfai/kinokuke/icon/process/install.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1655761845404';		      
		    case 'kk-primetech':
		      return kkPrimeTech;
		    case 'linkedin':
		      return linkedInIcon;
		    case 'location':
		      return locationIcon;
		    case 'menu-thin':
		      return menuThinIcon;
		    case 'menu-medium':
		      return menuMediumIcon;
  		    case 'menu-thick':
		      return menuThickIcon;
  		    case 'paint':
		      return 'https://ik.imagekit.io/0ovzivqyfai/kinokuke/icon/process/paint.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1658241513462';		      
  		    case 'process-step-1':
		      return ;		      
  		    case 'tap-finger':
		      return 'https://ik.imagekit.io/0ovzivqyfai/kinokuke/icon/process/tap_finger.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1655767002557';  		    
  		    case 'v1':
		      return v1Icon;
		    case 'v2':
		      return v2Icon;
		    case 'v3':
		      return v3Icon;	
		    case 'x-mark':
		      return xMarkIcon;		
		    case 'x-mark-oval':
		      return xMarkOvalIcon;			      	      	    
		    case 'youtube':
		      return youtubeIcon;

		    default:
		      return '';
	  	}
	}

	const isMultiColor = () => {
		switch(iconName) {
			case 'kk-primetech': 
			case 'coffee-2': 
				return true;

			default: 
				return false;
		}
	}

	const renderingStyle = isMultiColor() 
		? { src: getIcon(), }
		: {
			style: {
				WebkitMask: `url(${getIcon()}) no-repeat center`, 
				mask: `url(${getIcon()}) no-repeat center`,
				backgroundColor: color,
			}
		};

	return (

		<figure className={`icon_container icon-${iconName} icon-wrapper flex-center ${className}`} 
			style={{ width: width, height: height, ...style }}
			ref={ref} onClick={onClick}
		>	
			<img className={`icon`} loading={"lazy"}
				{...renderingStyle}
			/>
		</figure>


	)
})

export default Icon;