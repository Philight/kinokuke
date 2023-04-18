import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import HeadingBlock from "../components/text/HeadingBlock.js";
import ImageBanner from "../components/media/ImageBanner.js";
import FullwidthHeading from "../components/text/FullwidthHeading.js";
import GalleryCarousel from "../components/media/GalleryCarousel.js";
import FloorPlan from "../components/FloorPlan.js";
import ModelDescription from "../components/ModelDescription.js";
import ContactUsModal from "../components/ContactUsModal.js";

import "./../assets/css/pages/modelpage.css";

import houses from "../data/houses.js";

const ModelPage = (props) => {
	let { className } = props;
	
	const { id } = useParams();
	const imagePath = "../assets/images/housemodels/" + id.toLowerCase() + ".png";

	let thisHouse = {};
	for (let house of houses) {
		if (house.title == id) {
			thisHouse = house;
		}
	}	

	return (
		<div className="model-page__container">
			<HeadingBlock heading1="PrimeTech DOMOV" heading2={id} />
			<ImageBanner 
				images={[{ src: thisHouse.imageSrc }]}
			/>
			<ContactUsModal houseModel={thisHouse.title}/>
			
			{/* Overview */}
			<div className="model-page__details-container section">
				<ModelDescription 
					model={thisHouse}
				/>

				{/* Gallery */}
				<GalleryCarousel 
					gallery={thisHouse.gallery}
					columns="2"
					rows="1"
				/>
			</div>

			{/* Technical characteristics */}
			<FullwidthHeading heading1={`technická`} heading2={`špecifikácia`} />
			<FloorPlan 
				technicalCharacteristics={thisHouse.technicalCharacteristics}
				roomDetails={thisHouse.roomDetails}
				plan={thisHouse.plan}
			/>
		</div>
	)
}

export default ModelPage;