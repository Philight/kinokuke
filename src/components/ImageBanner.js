import React from "react";
import { Link } from "react-router-dom";

import SectionHeading from "./SectionHeading.js";
import HeadingUnderline from "./HeadingUnderline.js";
import "./../assets/css/components/imagebanner.css";

const ImageBanner = (props) => {
	let { className, images, heading, text, btnText, btnSrc, showOverlay, isHTML } = props;

	const replaceNewline = (textWithoutBreaks) => {
		let textWithBreaks = textWithoutBreaks.split('<br/>').join('\n');
		return textWithBreaks;
	}

	return (
		<div className={`image-banner__container ${className}`}>
			<div className="image-banner__images-container">
			{ images.map((image, index) => (
				<div className="image-wrapper">
					<img src={image.src} />
					{showOverlay && <div className="image-overlay"></div>}
				</div>
			)) }
			</div>
			<div className="image-banner__content">
				{/*<SectionHeading heading={heading} className="description-with-image__title"/>*/}

				{!isHTML && heading && <h1 className="description-with-image__title">{replaceNewline(heading)}</h1>}
				{isHTML && heading && <h1 className="description-with-image__title" dangerouslySetInnerHTML={{ __html: heading }} />}			

				{/*8heading && <HeadingUnderline />*/}

				{text && <p className="image-banner__text">{replaceNewline(text)}</p>}
				{btnText && 
					<Link to={btnSrc}>
						<button className="cta-btn">{btnText}</button>
					</Link>
				}
			</div>
		</div>
	)
}

export default ImageBanner;