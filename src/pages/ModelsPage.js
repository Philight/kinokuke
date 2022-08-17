import React, { useEffect } from "react";

import HeadingBlock from "../components/text/HeadingBlock.js";
import ImageBanner from "../components/media/ImageBanner.js";
import TextBlock from "../components/text/TextBlock.js";
import FullwidthHeading from "../components/text/FullwidthHeading.js";
import ModelsHouses from "../components/ModelsHouses.js";
import ContactUsModal from "../components/ContactUsModal.js";

import "./../assets/css/pages/modelspage.css";
import "./../assets/css/components/designandarchitecture.css";

import houses from "../data/houses.js";

const ModelsPage = (props) => {
//	let { className, redirectUrl, socialFacebookUrl, socialInstagramUrl, title, subtitle, description, subdescription } = props;
	
	const images = [
		{
//			src: 'https://www.nwhm.com/sites/default/files/2020-07/RussellRanch_1494_660%20copy.jpg'
			src: 'https://cdn.vox-cdn.com/thumbor/fII7oFYbKBfkfZQ8hV0WVq23CQs=/0x0:3200x2133/1200x675/filters:focal(1688x734:2200x1246)/cdn.vox-cdn.com/uploads/chorus_image/image/66417434/154.0.jpg',
		}
	];

	return (
		<div className="models-page__container">
			<HeadingBlock heading1="DIZAJN" heading2="Nájdi Svoj Domov" />
			<ImageBanner 
				images={images}
			/>
			<ContactUsModal />

			<TextBlock 
				heading="kino kuke domov"
				text="Kino Kuke ponúka 8 iných modelov aby boli vhodné pre rôzne pozemky, životné štýly a rozpočty. 
				<br/><br/>Vymeniť starý dom za nový domov svojich snov? My Vám pomôžeme. 
				<br/>Staviate si druhý domov v krajine? S tým Vám tiež pomôžeme."
			/>

			<ModelsHouses 
				columns="3"
				houses={houses}
			/>
		</div>
	)
}

export default ModelsPage;