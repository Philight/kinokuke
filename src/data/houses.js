import React from "react";

import cataniaF from "@images/houses/models/catania--front.png";
import cataniaB from "@images/houses/models/catania--back.png";
import florenceF from "@images/houses/models/florence--front.png";
import florenceB from "@images/houses/models/florence--back.png";
import miamiF from "@images/houses/models/miami--front.png";
import miamiB from "@images/houses/models/miami--back.png";
import odesaF from "@images/houses/models/odesa--front.png";
import odesaB from "@images/houses/models/odesa--back.png";
import riminiF from "@images/houses/models/rimini--front.png";
import riminiB from "@images/houses/models/rimini--back.png";
import veniceF from "@images/houses/models/venice--front.png";
import veniceB from "@images/houses/models/venice--back.png";

import cataniaPlan from "@images/houses/plans/catania--plan.png";
import florencePlan from "@images/houses/plans/florence--plan.png";
import miamiPlan from "@images/houses/plans/miami--plan.png";
import odesaPlan from "@images/houses/plans/odesa--plan.png";
import riminiPlan from "@images/houses/plans/rimini--plan.png";
import venicePlan from "@images/houses/plans/venice--plan.png";

const ROOM_TYPES = [
	'balkón',
	'chodba',
	'jedáleň',
	'komora',
	'kuchyňa',
	'kuchyňa s jedálňou',
	'kúpeľňa',
	'obývačka',
	'pracovňa',
	'práčovňa',
	'predsieň',
	'schodisko',
	'spálňa',
	'technická miestnosť',
	'terasa',
	'vchod',
	'šatník',
	'šatňa',
	'WC'
]

/***  DATA  ***/

const houses = [
	{
		title: 'Florence', // TIP 127
		rooms: '8',
		size: '139.31 m²',
		price: '44.900 €',
		status: 'AVAILABLE NOW',
		imageSrc: florenceF,
		gallery: [
			{
				title: 'Vchod',
				imageSrc: florenceF
			},
			{
				title: 'Nádvorie',
				imageSrc: florenceB
			},		
		],
		plan: florencePlan,
		characteristics: [ 
			'3 NEIGHBORHOODS', 'COTTAGES, COURTS AND TOWNS AT MARIPOSA', 
			'FROM THE HIGH $400,000S', '1,276 TO 2,554 SQUARE FEET OF LIVING SPACE',
			'VARIETY OF COMMUNITY AMENITIES', 'NOW SELLING!'
		],
		technicalCharacteristics: {
			surfaceGross: '139.31 m²',
			surfaceNet: '126.84 m²'
		},
		roomDetails: {
			'terasa 1': '7.20',
			'predsieň': '3.74',
			'chodba 1': '5.27',
			'obývačka': '21.78',
			'jedáleň': '12.72',
			'kuchyňa': '8.28',
			'komora': '2.88',
			'WC': '2.40',
			'kúpeľňa': '5.22',
			'chodba 2': '5.40',
			'spálňa 1': '13.63',
			'spálňa 2': '10.44',
			'spálňa 3': '10.50',
			'terasa 2': '6.66',
			'terasa 3': '10.72',
		}
	},

	{
		title: 'Venice', // TIP 90
		rooms: '7',
		size: '102.55 m²',
		price: '34.000 €',
		status: 'AVAILABLE NOW',
		imageSrc: veniceF,
		gallery: [
			{
				title: 'Vchod',
				imageSrc: veniceF
			},
			{
				title: 'Nádvorie',
				imageSrc: veniceB
			},		
		],
		plan: venicePlan,
		characteristics: [ 
			'3 NEIGHBORHOODS', 'COTTAGES, COURTS AND TOWNS AT MARIPOSA', 
			'FROM THE HIGH $400,000S', '1,276 TO 2,554 SQUARE FEET OF LIVING SPACE',
			'VARIETY OF COMMUNITY AMENITIES', 'NOW SELLING!'
		],
		technicalCharacteristics: {
			surfaceGross: '102.55 m²',
			surfaceNet: '92.93 m²'
		},
		roomDetails: {
			'vchod': '3.59',
			'predsieň 1': '2.89',
			'predsieň 2': '2.11',
			'schodisko': '1.90',
			'chodba': '2.83',
			'spálňa 1': '6.54',
			'spálňa 2': '9.46',
			'spálňa 3': '4.08',
			'kúpeľňa': '4.08',
			'komora': '1.32',
			'kuchyňa': '7.37',
			'jedáleň': '12.95',
			'obývačka': '14.35',
			'terasa': '8.93',
			'balkón': '5.28',
		}
	},
	
	{
		title: 'Catania', // TIP 135
		rooms: '8',
		size: '147.32 m²',
		price: '46.800 €',
		status: 'AVAILABLE NOW',
		imageSrc: cataniaF,
		gallery: [
			{
				title: 'Vchod',
				imageSrc: cataniaF
			},
			{
				title: 'Nádvorie',
				imageSrc: cataniaB
			},		
		],
		plan: cataniaPlan,
		characteristics: [ 
			'3 NEIGHBORHOODS', 'COTTAGES, COURTS AND TOWNS AT MARIPOSA', 
			'FROM THE HIGH $400,000S', '1,276 TO 2,554 SQUARE FEET OF LIVING SPACE',
			'VARIETY OF COMMUNITY AMENITIES', 'NOW SELLING!'
		],
		technicalCharacteristics: {
			surfaceGross: '147.32 m²',
			surfaceNet: '130.87 m²'
		},
		roomDetails: {
			'vchod': '4.89',
			'predsieň': '7.78',
			'WC': '3.04',
			'chodba 1': '4.07',
			'spálňa 1': '10.12',
			'kúpeľňa 1': '3.72',
			'spálňa 2': '12.60',
			'komora': '2.16',
			'kuchyňa': '5.00',
			'jedáleň': '12.00',
			'obývačka': '21.16',
			'chodba 2': '2.48',
			'spálňa 3': '10.08',
			'spálňa 4': '12.60',
			'kúpeľňa 2': '3.46',
			'terasa': '15.71',
		}
	},	

	{
		title: 'Rimini',
		rooms: '4',
		size: '167.14 m²',
		price: '51.700 €',
		status: 'AVAILABLE NOW',
		imageSrc: riminiF,
		gallery: [
			{
				title: 'Vchod',
				imageSrc: riminiF
			},
			{
				title: 'Nádvorie',
				imageSrc: riminiB
			},		
		],
		plan: riminiPlan,
		characteristics: [ 
			'3 NEIGHBORHOODS', 'COTTAGES, COURTS AND TOWNS AT MARIPOSA', 
			'FROM THE HIGH $400,000S', '1,276 TO 2,554 SQUARE FEET OF LIVING SPACE',
			'VARIETY OF COMMUNITY AMENITIES', 'NOW SELLING!'
		],
		technicalCharacteristics: {
			surfaceGross: '167.14 m²',
			surfaceNet: '149.42 m²'
		},
		roomDetails: {
			'vchod': '4.80',
			'chodba': '16.12',
			'obývačka': '27.12',
			'kuchyňa': '16.86',
			'jedáleň': '18.36',
			'kúpeľňa': '8.17',
			'práčovňa': '2.59',
			'spálňa 1': '12.60',
			'spálňa 2': '12.43',
			'WC': '3.94',
			'technická miestnosť': '3.84',
			'spálňa 3': '14.01',
			'terasa': '8.59',
		}
	},	

	{
		title: 'Odesa',
		rooms: '7',
		size: '132.24 m²',
		price: '44.000 €',
		status: 'PREORDER IN 2024',
		imageSrc: odesaF,
		gallery: [
			{
				title: 'Vchod',
				imageSrc: odesaF
			},
			{
				title: 'Nádvorie',
				imageSrc: odesaB
			},		
		],
		plan: odesaPlan,
		characteristics: [ 
			'3 NEIGHBORHOODS', 'COTTAGES, COURTS AND TOWNS AT MARIPOSA', 
			'FROM THE HIGH $400,000S', '1,276 TO 2,554 SQUARE FEET OF LIVING SPACE',
			'VARIETY OF COMMUNITY AMENITIES', 'NOW SELLING!'
		],
		technicalCharacteristics: {
			surfaceGross: '132.24 m²',
			surfaceNet: '117.48 m²'
		},
		roomDetails: {
			'vchod': '2.79',
			'chodba': '11.32',
			'kuchyňa s jedálňou': '29.45',
			'obývačka': '18.26',
			'spálňa 1': '8.83',
			'kúpeľňa': '5.41',
			'spálňa 2': '9.00',
			'spálňa 3': '9.88',
			'WC': '2.95',
			'technická miestnosť': '4.26',
			'komora': '3.22',
			'terasa': '12.11',
		}
	},		

	{
		title: 'Miami',
		rooms: '7',
		size: '121.97 m²',
		price: '39.300 €',
		status: 'PREORDER IN 2025',
		imageSrc: miamiF,
		gallery: [
			{
				title: 'Vchod',
				imageSrc: miamiF
			},
			{
				title: 'Nádvorie',
				imageSrc: miamiB
			},		
		],
		plan: miamiPlan,
		characteristics: [ 
			'3 NEIGHBORHOODS', 'COTTAGES, COURTS AND TOWNS AT MARIPOSA', 
			'FROM THE HIGH $400,000S', '1,276 TO 2,554 SQUARE FEET OF LIVING SPACE',
			'VARIETY OF COMMUNITY AMENITIES', 'NOW SELLING!'
		],
		technicalCharacteristics: {
			surfaceGross: '121.97 m²',
			surfaceNet: '111.57 m²'
		},
		roomDetails: {
			'predsieň': '3.91',
			'chodba 1': '3.06',
			'schodisko': '3.06',
			'chodba 2': '2.53',
			'spálňa 1': '10.65',
			'spálňa 2': '10.65',
			'pracovňa': '5.95',
			'kúpeľňa': '3.84',
			'WC': '1.10',
			'komora': '1.21',
			'kuchyňa': '7.20',
			'jedáleň': '14.76',
			'obývačka': '14.76',
			'terasa': '25.35',
			'balkón': '3.54',
		}
	},			
];

export default houses;