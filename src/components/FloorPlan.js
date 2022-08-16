import React from "react";

import ImageBanner from "./ImageBanner.js";

import "./../assets/css/components/textblock.css";

const FloorPlan = (props) => {
	let { plan, technicalCharacteristics, roomDetails } = props;

	const replaceNewline = (textWithoutBreaks) => {
		let textWithBreaks = textWithoutBreaks.split('<br/>').join('\n');

		//textWithBreaks = textWithoutBreaks.split('<br/>').join('');
console.log(textWithBreaks);
		return textWithBreaks;
	}

	return (
		<div className="floor-plan__container section">
			<ImageBanner 
				images={[{ src: plan }]}
			/>
			<div className="floor-plan__technical-details">
				<h3>Celkový rozmer</h3>
				<div className="floor-plan__data">
					<span>Plocha (Neobývateľných)</span><span>{technicalCharacteristics.surfaceGross}</span>
					<span>Plocha (Obývateľných)</span><span>{technicalCharacteristics.surfaceNet}</span>
				</div>
				<h3>Detaily jednotlivých izieb</h3>
				<div className="floor-plan__data">
				{ Object.entries(roomDetails).map( ([key, item], index) => (
					<><span>{index+1+'. '+ key}</span><span>{item} m²</span></>
				))}
				</div>
			</div>

		</div>
	)
}

export default FloorPlan;