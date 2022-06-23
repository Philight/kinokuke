import React, { useEffect } from "react";

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
import milanoPlan from "./../assets/images/houseplans/milano-plan.png";
import monacoPlan from "./../assets/images/houseplans/monaco-plan.png";

import nizzaPlan from "./../assets/images/houseplans/monaco-plan.png";

import torinoPlan from "./../assets/images/houseplans/monaco-plan.png";

import veneziaPlan from "./../assets/images/houseplans/venezia-plan.png";
import veronaPlan from "./../assets/images/houseplans/verona-plan.png";

import zurigoPlan from "./../assets/images/houseplans/monaco-plan.png";

/***  DATA  ***/

const houses = [
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
		title: 'Nizza',
		rooms: '4',
		size: '110 m²',
		price: '31.200',
		status: 'NOW SELLING',
		imageSrc: nizza,
		gallery: [
			{
				title: 'Interier',
				imageSrc: nizzaBack
			},
			{
				title: 'Vyberte si svoj dizajn',
				imageSrc: nizzaBack
			},
			{
				title: 'Interaktivna prehliadka',
				imageSrc: nizzaBack
			},
			{
				title: 'Komunitna galeria',
				imageSrc: nizzaBack
			}				
		],		
		plan: nizzaPlan,		
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
		title: 'Torino',
		rooms: '4',
		size: '75.26 m²',
		price: '20.400',
		status: 'NOW SELLING',
		imageSrc: torino,
		gallery: [
			{
				title: 'Interier',
				imageSrc: torinoBack
			},
			{
				title: 'Vyberte si svoj dizajn',
				imageSrc: torinoBack
			},
			{
				title: 'Interaktivna prehliadka',
				imageSrc: torinoBack
			},
			{
				title: 'Komunitna galeria',
				imageSrc: torinoBack
			}				
		],		
		plan: torinoPlan,
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
		title: 'Zurigo',
		rooms: '4',
		size: '199 m²',
		price: '63.700',
		status: 'PREORDER IN 2023',
		imageSrc: zurigo,
		gallery: [
			{
				title: 'Interier',
				imageSrc: zurigo
			},
			{
				title: 'Vyberte si svoj dizajn',
				imageSrc: zurigo
			},
			{
				title: 'Interaktivna prehliadka',
				imageSrc: zurigo
			},
			{
				title: 'Komunitna galeria',
				imageSrc: zurigo
			}		
		],		
		plan: zurigoPlan,
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
	
];

export default houses;