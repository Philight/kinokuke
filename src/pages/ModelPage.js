import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import HeadingBlock from "../components/HeadingBlock.js";
import TextBlock from "../components/TextBlock.js";
import ImageBanner from "../components/ImageBanner.js";
import FullwidthHeading from "../components/FullwidthHeading.js";
import GalleryCarousel from "../components/GalleryCarousel.js";
import FloorPlan from "../components/FloorPlan.js";

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
/*
	const houses = [
		{
			title: 'Verona',
			rooms: '4',
			size: '76.69 m²',
			price: '20.400',
			status: 'NOW SELLING',
			imageSrc: verona,
			gallery: [
				{
					title: 'Interier',
					imageSrc: veronaInterior
				},
				{
					title: 'Vyberte si svoj dizajn',
					imageSrc: veronaInterior
				},
				{
					title: 'Interaktivna prehliadka',
					imageSrc: veronaInterior
				},
				{
					title: 'Komunitna galeria',
					imageSrc: veronaInterior
				}		
			],
			plan: veronaPlan,
			characteristics: [ 
				'3 NEIGHBORHOODS', 'COTTAGES, COURTS AND TOWNS AT MARIPOSA', 
				'FROM THE HIGH $400,000S', '1,276 TO 2,554 SQUARE FEET OF LIVING SPACE',
				'VARIETY OF COMMUNITY AMENITIES', 'NOW SELLING!'
			],
			technicalCharacteristics: {
				surfaceGross: '164 m²',
				surfaceNet: '148.9 m²'
			},
			roomDetails: {
				entrance: '3.22',
				corridor: '15.02',
				closet: '6.15',
				livingAndKitchen: '43.23',
				bedroom1: '13.65',
				terase: '9.28',
				bedroom2: '26.40',
				bedroom3: '16.02',
				bathroom1: '12.25',
				bathroom2: '3.68'
			}
		},
		{
			title: 'Venezia',
			rooms: '5',
			size: '163.78 m²',
			price: '20.400',
			status: 'NOW SELLING',
			imageSrc: venezia,
			gallery: [
				{
					title: 'Interier',
					imageSrc: veneziaInterior
				},
				{
					title: 'Vyberte si svoj dizajn',
					imageSrc: veneziaInterior
				},
				{
					title: 'Interaktivna prehliadka',
					imageSrc: veneziaInterior
				},
				{
					title: 'Komunitna galeria',
					imageSrc: veneziaInterior
				}				
			],
			plan: veneziaPlan,
			characteristics: [ 
				'3 NEIGHBORHOODS', 'COTTAGES, COURTS AND TOWNS AT MARIPOSA', 
				'FROM THE HIGH $400,000S', '1,276 TO 2,554 SQUARE FEET OF LIVING SPACE',
				'VARIETY OF COMMUNITY AMENITIES', 'NOW SELLING!'
			],
			technicalCharacteristics: {
				surfaceGross: '164 m²',
				surfaceNet: '148.9 m²'
			},
			roomDetails: {
				entrance: '3.22',
				corridor: '15.02',
				closet: '6.15',
				livingAndKitchen: '43.23',
				bedroom1: '13.65',
				terase: '9.28',
				bedroom2: '26.40',
				bedroom3: '16.02',
				bathroom1: '12.25',
				bathroom2: '3.68'
			}
		},
		{
			title: 'Monaco',
			rooms: '4',
			size: '89.12 m²',
			price: '31.200',
			status: 'NOW SELLING',
			imageSrc: monaco,
			gallery: [
				{
					title: 'Interier',
					imageSrc: monacoInterior
				},
				{
					title: 'Vyberte si svoj dizajn',
					imageSrc: monacoInterior
				},
				{
					title: 'Interaktivna prehliadka',
					imageSrc: monacoInterior
				},
				{
					title: 'Komunitna galeria',
					imageSrc: monacoInterior
				}				
			],
			plan: monacoPlan,
			characteristics: [ 
				'3 NEIGHBORHOODS', 'COTTAGES, COURTS AND TOWNS AT MARIPOSA', 
				'FROM THE HIGH $400,000S', '1,276 TO 2,554 SQUARE FEET OF LIVING SPACE',
				'VARIETY OF COMMUNITY AMENITIES', 'NOW SELLING!'
			],
			technicalCharacteristics: {
				surfaceGross: '164 m²',
				surfaceNet: '148.9 m²'
			},
			roomDetails: {
				entrance: '3.22',
				corridor: '15.02',
				closet: '6.15',
				livingAndKitchen: '43.23',
				bedroom1: '13.65',
				terase: '9.28',
				bedroom2: '26.40',
				bedroom3: '16.02',
				bathroom1: '12.25',
				bathroom2: '3.68'
			}
		},
		{
			title: 'Miami',
			rooms: '7',
			size: '121.30 m²',
			price: '31.200',
			status: 'PREORDER IN 2024',
			imageSrc: miami,
			gallery: [
				{
					title: 'Interier',
					imageSrc: miamiBack
				},
				{
					title: 'Vyberte si svoj dizajn',
					imageSrc: miamiBack
				},
				{
					title: 'Interaktivna prehliadka',
					imageSrc: miamiBack
				},
				{
					title: 'Komunitna galeria',
					imageSrc: miamiBack
				}		
			],
			plan: miamiPlan,
			characteristics: [ 
				'3 NEIGHBORHOODS', 'COTTAGES, COURTS AND TOWNS AT MARIPOSA', 
				'FROM THE HIGH $400,000S', '1,276 TO 2,554 SQUARE FEET OF LIVING SPACE',
				'VARIETY OF COMMUNITY AMENITIES', 'NOW SELLING!'
			],
			technicalCharacteristics: {
				surfaceGross: '164 m²',
				surfaceNet: '148.9 m²'
			},
			roomDetails: {
				entrance: '3.22',
				corridor: '15.02',
				closet: '6.15',
				livingAndKitchen: '43.23',
				bedroom1: '13.65',
				terase: '9.28',
				bedroom2: '26.40',
				bedroom3: '16.02',
				bathroom1: '12.25',
				bathroom2: '3.68'
			}
		},
		{
			title: 'Milano',
			rooms: '7',
			size: '121.30 m²',
			price: '31.200',
			status: 'PREORDER IN 2024',
			imageSrc: milano,
			gallery: [
				{
					title: 'Interier',
					imageSrc: milano
				},
				{
					title: 'Vyberte si svoj dizajn',
					imageSrc: milano
				},
				{
					title: 'Interaktivna prehliadka',
					imageSrc: milano
				},
				{
					title: 'Komunitna galeria',
					imageSrc: milano
				}	
			],
			plan: milanoPlan,
			characteristics: [ 
				'3 NEIGHBORHOODS', 'COTTAGES, COURTS AND TOWNS AT MARIPOSA', 
				'FROM THE HIGH $400,000S', '1,276 TO 2,554 SQUARE FEET OF LIVING SPACE',
				'VARIETY OF COMMUNITY AMENITIES', 'NOW SELLING!'
			],
			technicalCharacteristics: {
				surfaceGross: '164 m²',
				surfaceNet: '148.9 m²'
			},
			roomDetails: {
				entrance: '3.22',
				corridor: '15.02',
				closet: '6.15',
				livingAndKitchen: '43.23',
				bedroom1: '13.65',
				terase: '9.28',
				bedroom2: '26.40',
				bedroom3: '16.02',
				bathroom1: '12.25',
				bathroom2: '3.68'
			}
		}		
	]
*/
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	let HTMLString = '<ul class="model-page__details-list">';
	let gallery = [];
	let technicalCharacteristics = [];
	let roomDetails = [];
	let floorPlan = [];


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

	return (
		<div className="model-page__container">
			<HeadingBlock heading1="KINO KUKE DOMOV" heading2={id} />
			<ImageBanner 
				images={[{ src: imagePath }]}
			/>
			
			{/* Overview */}
			<div className="model-page__details-container section">
				<TextBlock 
					heading={id}
					text={HTMLString}
					isHTML
				/>
				{/* Gallery */}
				<GalleryCarousel 
					gallery={gallery}
					columns="3"
					rows="1"
				/>
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
			</div>

			{/* Technical characteristics */}
			<FullwidthHeading heading1={`technická`} heading2={`špecifikácia`} />
			<FloorPlan 
				technicalCharacteristics={technicalCharacteristics}
				roomDetails={roomDetails}
				floorPlan={floorPlan}
			/>

		</div>
	)
}

export default ModelPage;