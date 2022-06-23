import React from "react";
import { Link } from "react-router-dom";

import SectionHeading from "./SectionHeading.js";
import HeadingUnderline from "./HeadingUnderline.js";
import SectionSubheading from "./SectionSubheading.js";

//import "./../assets/css/components/designandarchitecture.css";

const DesignAndArchitectureTiles = (props) => {
	let { tile, index, reverse } = props;
	return (
		<>
		<div className={`design-and-architecture__tile content-tile t-${index*2+1}`} style={{backgroundColor: tile.backgroundColor}}>
			<SectionHeading heading={tile.title} />
			<HeadingUnderline color="#FFF" className="" />
			<SectionSubheading subheading={tile.slogan} />
			<p className="show-desktop">{tile.text}</p>
			<div className="btn-wrapper">
				<Link to={tile.ctaSrc} className="design-and-architecture__cta">
					<span className="">{tile.ctaText}</span>
				</Link>
			</div>
		</div>
		<div className={`design-and-architecture__tile image-tile t-${index*2+2}`}>
			<img src={tile.imageSrc} />
		</div>
		</>

	)
}

export default DesignAndArchitectureTiles;