import React, { useEffect } from "react";

import HeadingBlock from "../components/HeadingBlock.js";
import ImageBanner from "../components/ImageBanner.js";
import TextBlock from "../components/TextBlock.js";
import FullwidthHeading from "../components/FullwidthHeading.js";
import ModelsHouses from "../components/ModelsHouses.js";

import "./../assets/css/pages/modelspage.css";
import "./../assets/css/components/designandarchitecture.css";

import houses from "../data/houses.js";
/*
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
*/
const ModelsPage = (props) => {
//	let { className, redirectUrl, socialFacebookUrl, socialInstagramUrl, title, subtitle, description, subdescription } = props;
	
	const images = [
		{
			src: 'https://www.nwhm.com/sites/default/files/2020-07/RussellRanch_1494_660%20copy.jpg'
		}
	];
/*
	const houses = [
		{
			title: 'Verona',
			rooms: '4',
			size: '74 m²',
			price: '20.400',
			status: 'NOW SELLING',
			imageSrc: verona,
			characteristics: [ 
				'3 NEIGHBORHOODS', 'COTTAGES, COURTS AND TOWNS AT MARIPOSA', 
				'FROM THE HIGH $400,000S', '1,276 TO 2,554 SQUARE FEET OF LIVING SPACE',
				'VARIETY OF COMMUNITY AMENITIES', 'NOW SELLING!'
			]
		},
		{
			title: 'Torino',
			rooms: '4',
			size: '75 m²',
			price: '20.400',
			status: 'NOW SELLING',
			imageSrc: torino,
			characteristics: [ 
				'3 NEIGHBORHOODS', 'COTTAGES, COURTS AND TOWNS AT MARIPOSA', 
				'FROM THE HIGH $400,000S', '1,276 TO 2,554 SQUARE FEET OF LIVING SPACE',
				'VARIETY OF COMMUNITY AMENITIES', 'NOW SELLING!'
			]
		},	
		{
			title: 'Nizza',
			rooms: '4',
			size: '110 m²',
			price: '31.200',
			status: 'NOW SELLING',
			imageSrc: nizza,
			characteristics: [ 
				'3 NEIGHBORHOODS', 'COTTAGES, COURTS AND TOWNS AT MARIPOSA', 
				'FROM THE HIGH $400,000S', '1,276 TO 2,554 SQUARE FEET OF LIVING SPACE',
				'VARIETY OF COMMUNITY AMENITIES', 'NOW SELLING!'
			]
		},	
		{
			title: 'Monaco',
			rooms: '4',
			size: '89 m²',
			price: '23.200',
			status: 'NOW SELLING',
			imageSrc: monaco,
			characteristics: [ 
				'3 NEIGHBORHOODS', 'COTTAGES, COURTS AND TOWNS AT MARIPOSA', 
				'FROM THE HIGH $400,000S', '1,276 TO 2,554 SQUARE FEET OF LIVING SPACE',
				'VARIETY OF COMMUNITY AMENITIES', 'NOW SELLING!'
			]
		},		
		{
			title: 'Milano',
			rooms: '5',
			size: '159 m²',
			price: '43.500',
			status: 'PREORDER IN 2024',
			imageSrc: milano,
			characteristics: [ 
				'3 NEIGHBORHOODS', 'COTTAGES, COURTS AND TOWNS AT MARIPOSA', 
				'FROM THE HIGH $400,000S', '1,276 TO 2,554 SQUARE FEET OF LIVING SPACE',
				'VARIETY OF COMMUNITY AMENITIES', 'NOW SELLING!'
			]
		},		
		{
			title: 'Venezia',
			rooms: '5',
			size: '164 m²',
			price: '46.200',
			status: 'NOW SELLING',
			imageSrc: venezia,
			characteristics: [ 
				'3 NEIGHBORHOODS', 'COTTAGES, COURTS AND TOWNS AT MARIPOSA', 
				'FROM THE HIGH $400,000S', '1,276 TO 2,554 SQUARE FEET OF LIVING SPACE',
				'VARIETY OF COMMUNITY AMENITIES', 'NOW SELLING!'
			]
		},
		{
			title: 'Zurigo',
			rooms: '4',
			size: '199 m²',
			price: '63.700',
			status: 'PREORDER IN 2023',
			imageSrc: zurigo,
			characteristics: [ 
				'3 NEIGHBORHOODS', 'COTTAGES, COURTS AND TOWNS AT MARIPOSA', 
				'FROM THE HIGH $400,000S', '1,276 TO 2,554 SQUARE FEET OF LIVING SPACE',
				'VARIETY OF COMMUNITY AMENITIES', 'NOW SELLING!'
			]
		},		
		{
			title: 'Miami',
			rooms: '7',
			size: '121 m²',
			price: '31.600',
			status: 'PREORDER IN 2024',
			imageSrc: miami,
			characteristics: [ 
				'3 NEIGHBORHOODS', 'COTTAGES, COURTS AND TOWNS AT MARIPOSA', 
				'FROM THE HIGH $400,000S', '1,276 TO 2,554 SQUARE FEET OF LIVING SPACE',
				'VARIETY OF COMMUNITY AMENITIES', 'NOW SELLING!'
			]
		},
	]
*/
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	return (
		<div className="models-page__container">
			<HeadingBlock heading1="DIZAJN" heading2="Nájdi Svoj Domov" />
			<ImageBanner 
				images={images}
			/>

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