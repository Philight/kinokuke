import React from "react";
import { Link } from "react-router-dom";

import SectionHeading from "@components/text/SectionHeading";
import HeadingUnderline from "@components/text/HeadingUnderline";
import Layer from "@components/graphic/Layer";
import Functions from "@components/util/Functions";
//import "@css/components/imagebanner.css";

const ImageBanner = (props) => {
	let { className, images, isBkg, heading, text, btnText, btnSrc, showOverlay, isHTML } = props;

	return (
		<section className={`image-banner__c ${className}`}>
			<div className="image-banner__images-container fill-parent">
			{ images.map((image, index) => {
				return isBkg 
					? <div className="image-background fill-parent" style={{ background: `url(${image.src}) repeat`  }}></div>

					: <div className="image-wrapper fill-parent">
						<img src={image.src} />
						{showOverlay && <Layer className="image-banner__overlay" />}
					</div>;
			}) }
			</div>
			<div className="image-banner__content">
				{!isHTML && heading && <h2 className="image-banner__title">{Functions.strReplaceNewline(heading)}</h2>}
				{isHTML && heading && <h2 className="image-banner__title" dangerouslySetInnerHTML={{ __html: heading }} />}			

				{text && <p className="image-banner__text">{Functions.strReplaceNewline(text)}</p>}
				{btnText && 
					<div className="image-banner__btn-wrapper btn-wrapper">
						<a href={btnSrc} className="image-banner__btn cta-btn">{btnText}</a>
					</div>
				}
			</div>
		</section>
	)
}

export default ImageBanner;