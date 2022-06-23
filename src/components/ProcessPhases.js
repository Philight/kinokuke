import React from "react";

import HeadingUnderline from "./HeadingUnderline.js";

import "./../assets/css/components/headingblock.css";

const ProcessPhases = (props) => {
	let { phases, rows, columns } = props;
	return (
		<div className={`process-phases__container col-${columns}`}>
			{ phases.map((phase, index) => (
				<div className="process-phases__item">
					<div className="image-wrapper"><img src={phase.imageSrc} /></div>
				</div>
			)) }
		</div>
	)
}

export default ProcessPhases;