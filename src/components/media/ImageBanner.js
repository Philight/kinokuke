import React from "react";
import { Link } from "react-router-dom";

import SectionHeading from "../text/SectionHeading.js";
import HeadingUnderline from "../text/HeadingUnderline.js";
import Functions from "../utility/Functions.js";
import "../../assets/css/components/imagebanner.css";

const ImageBanner = (props) => {
	let { className, images, isBkg, heading, text, btnText, btnSrc, showOverlay, isHTML } = props;

	return (
		<section className={`image-banner__container ${className}`}>
			<div className="image-banner__images-container">
			{ images.map((image, index) => {
				return isBkg 
					? <div className="image-background" style={{ background: `url(${image.src}) repeat`  }}></div>

					: <div className="image-wrapper">
						<img src={image.src} />
						{showOverlay && <div className="image-overlay"></div>}
					</div>;
			}) }
			</div>
			<div className="image-banner__content">
				{!isHTML && heading && <h1 className="description-with-image__title">{Functions.strReplaceNewline(heading)}</h1>}
				{isHTML && heading && <h1 className="description-with-image__title" dangerouslySetInnerHTML={{ __html: heading }} />}			

				{text && <p className="image-banner__text">{Functions.strReplaceNewline(text)}</p>}
				{btnText && 
					<Link to={btnSrc}>
						<button className="cta-btn">{btnText}</button>
					</Link>
				}
			</div>
		</section>
	)
}

export default ImageBanner;