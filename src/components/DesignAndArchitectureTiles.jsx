import { Link } from "react-router-dom";

import SectionHeading from "@components/text/SectionHeading";
import HeadingUnderline from "@components/text/HeadingUnderline";
import SectionSubheading from "@components/text/SectionSubheading";
import Image from "@components/graphic/Image";

const DesignAndArchitectureTiles = (props) => {
	let { tile, className, showText } = props;

	return tile?.type == "image" 
		? <Image src={tile.imageSrc} className={`design-and-architecture__tile image-tile ${className}`} />
		: <div className={`design-and-architecture__tile content-tile f-col ${className}`} 
			style={{ '--tile-color': tile.backgroundColor }}
		>
			<h2>{tile.title}</h2>
			<HeadingUnderline color="#FFF" className="" />
			<h3>{tile.slogan}</h3>
			<p className={`${showText?'':'show-desktop'}`}>{tile.text}</p>
			{ tile.ctaText && <div className="btn-wrapper">
				<Link to={tile.ctaSrc} className="design-and-architecture__cta">
					<span className="">{tile.ctaText}</span>
				</Link>
			</div> }
		</div>
		
}

export default DesignAndArchitectureTiles;