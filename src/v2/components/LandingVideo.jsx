import React from "react";
import { Link } from "react-router-dom";

//const LOGO_URL = './../assets/images/kinokuke-logo.png';
import LOGO from './../assets/images/kinokuke-logo-bw.png';

const LandingVideo = (props) => {
	let { className, videoSrc, heading1, heading2, btnText, btnSrc } = props;

	return (
		<div className="landing-video__container">
			<video autoPlay loop muted>
				<source src={videoSrc} type="video/mp4" />
			</video>
			<div className="landing-video__content absolute-overlay">
				<h1>{heading1}</h1>
				<h2>{heading2}</h2>

				{btnText && !btnSrc && <div className="btn-wrapper">
					<button className="cta-btn">{btnText}</button>
				</div>}
				{btnText && btnSrc && <div className="btn-wrapper">
					<Link to={btnSrc}>
					<button className="cta-btn">{btnText}</button>
					</Link>
				</div>}
			</div>
		</div>
	)
}

export default LandingVideo;