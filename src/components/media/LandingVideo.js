import React from "react";

const LandingVideo = (props) => {
//	let { className, redirectUrl, socialFacebookUrl, socialInstagramUrl, title, subtitle, description, subdescription } = props;

	return (
		<section className="landing-video__container">
			<video src="https://edge.tech/videos/home.mp4" autoplay="autoplay" playsinline="" loop="loop" muted="muted" ></video>
		</section>
	)
}

export default LandingVideo;