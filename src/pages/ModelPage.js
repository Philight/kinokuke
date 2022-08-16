import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import HeadingBlock from "../components/HeadingBlock.js";
import TextBlock from "../components/TextBlock.js";
import ImageBanner from "../components/ImageBanner.js";
import FullwidthHeading from "../components/FullwidthHeading.js";
import GalleryCarousel from "../components/GalleryCarousel.js";
import FloorPlan from "../components/FloorPlan.js";
import ModelDescription from "../components/ModelDescription.js";
import ContactUsModal from "../components/ContactUsModal.js";

import "./../assets/css/pages/modelpage.css";

import houses from "../data/houses.js";
/*
import miamiImg from "./../assets/images/housemodels/miami.png";
import miamiBackImg from "./../assets/images/housemodels/miami_back.png";
import milanoImg from "./../assets/images/housemodels/milano.png";
import monacoImg from "./../assets/images/housemodels/monaco.png";
import monacoInteriorImg from "./../assets/images/housemodels/monaco_interior.png";
import veneziaImg from "./../assets/images/housemodels/venezia.png";
import veneziaInteriorImg from "./../assets/images/housemodels/venezia_interior.png";
import veronaImg from "./../assets/images/housemodels/verona.png";
import veronaInteriorImg from "./../assets/images/housemodels/verona_interior.png";
*/
import miami from "./../assets/images/housemodels/miami.png";
import miamiBack from "./../assets/images/housemodels/miami_back.png";
import milano from "./../assets/images/housemodels/milano.png";
import monaco from "./../assets/images/housemodels/monaco.png";
import monacoInterior from "./../assets/images/housemodels/monaco_interior.png";
import nizza from "./../assets/images/housemodels/nizza.png";
import nizzaBack from "./../assets/images/housemodels/nizza_back.png";
import torino from "./../assets/images/housemodels/torino.png";
import torinoBack from "./../assets/images/housemodels/torino_back.png";
import venezia from "./../assets/images/housemodels/venezia.png";
import veneziaInterior from "./../assets/images/housemodels/venezia_interior.png";
import verona from "./../assets/images/housemodels/verona.png";
import veronaInterior from "./../assets/images/housemodels/verona_interior.png";
import zurigo from "./../assets/images/housemodels/zurigo.png";


import miamiPlan from "./../assets/images/houseplans/miami-plan.png";
import veronaPlan from "./../assets/images/houseplans/verona-plan.png";
import milanoPlan from "./../assets/images/houseplans/milano-plan.png";
import monacoPlan from "./../assets/images/houseplans/monaco-plan.png";
import veneziaPlan from "./../assets/images/houseplans/venezia-plan.png";

const ModelPage = (props) => {
	let { className, redirectUrl, socialFacebookUrl, socialInstagramUrl, title, subtitle, description, subdescription } = props;
	
	const { id } = useParams();
	const imagePath = "../assets/images/housemodels/" + id.toLowerCase() + ".png";

	const profileImages = [
		'https://www.nwhm.com/sites/default/files/2019-01/Deborah_4.jpg',
		'https://www.nwhm.com/sites/all/themes/nwhm/images/branding/Justyna_Headshot_Web_Final_4.jpg'
	];

	let HTMLString = '<ul class="model-page__details-list">';
	let gallery = [];
	let technicalCharacteristics = [];
	let roomDetails = [];
	let floorPlan = [];

	let thisHouse = {};

	useEffect(() => {
//		window.scrollTo(0, 0);
	}, []);

	for (let house of houses) {
console.log('house');			
console.log(house);			
		if (house.title == id) {
			thisHouse = house;
			//setHouseModel(house);
console.log(house.gallery);			

		}
	}
/*
	for (let house of houses) {
//console.log('house');			
//console.log(house);			
		if (house.title == id) {
//console.log('house.title');			
//console.log(house.title);			
			for (let detail of house.characteristics) {
console.log('detail');			
console.log(detail);			
				HTMLString += '<li>' + detail + '</li>';
			}	
			HTMLString += '</ul>';
console.log(HTMLString);			

			gallery = house.gallery;
			technicalCharacteristics = house.technicalCharacteristics;
			roomDetails = house.roomDetails;
			floorPlan = house.plan;
		}
	}
*/
	
		

	return (
		<div className="model-page__container">
			<HeadingBlock heading1="KINO KUKE DOMOV" heading2={id} />
			<ImageBanner 
				images={[{ src: thisHouse.imageSrc }]}
			/>
			<ContactUsModal houseModel={thisHouse.title}/>
			
			{/* Overview */}
			<div className="model-page__details-container section">
{/*
				<TextBlock 
					heading={id}
					text={HTMLString}
					isHTML
				/>
*/}
				<ModelDescription 
					model={thisHouse}
				/>

				{/* Gallery */}
				<GalleryCarousel 
					gallery={thisHouse.gallery}
					columns="2"
					rows="1"
				/>
{/*
				<div className="model-page__contacts-container">
					<div className="model-page__contacts-profiles">
						{ profileImages.map((profile, index) => (
							<div className="image-wrapper">
								<img src={profile} />
							</div>
						))}
					</div>
					<div className="model-page__contacts-text">
						<h3>DEBORAH MURO & JUSTYNA KORCZYNSKI</h3>
						<p>
							Online Sales Concierge Team<br/>
							(949) 518-1311<br/>
							SoCalConcierge@NWHM.com<br/>
							DRE# 01436940 | DRE# 01452389
						</p>
						<h3>NOVA RANCHO CUCAMONGA SALES GALLERY</h3>
						<p>
							9690 Aire Place<br/>
							Rancho Cucamonga CA 91730<br/>
							Get Directions<br/>
							(909) 330-0631
						</p>
						<h3>Model Homes Now Open</h3>
					</div>
				</div>
*/}
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