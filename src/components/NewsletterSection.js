import React from "react";

import SectionHeading from "./text/SectionHeading.js";
import HeadingUnderline from "./text/HeadingUnderline.js";
import SectionSubheading from "./text/SectionSubheading.js";
import NewsletterForm from "./NewsletterForm.js";

import "./../assets/css/components/newslettersection.css";

const NewsletterSection = (props) => {
	let { heading, subheading, text, imageSrc } = props;
	return (
		<div className="newsletter-section__container">
			<div className="newsletter-section__section left">
				<SectionHeading heading={heading} className="newsletter-heading" />
				{/*<HeadingUnderline color="white" />*/}
				<SectionSubheading subheading={subheading} />
				<p className="newsletter-section__text">{text}</p>
			</div>
			<div className="newsletter-section__section middle">
				<NewsletterForm />
			</div>
			<div className="newsletter-section__section right">
				<div className="newsletter-section__image-wrapper">
					<img src={imageSrc} />
				</div>
			</div>
		</div>
	)
}

export default NewsletterSection;