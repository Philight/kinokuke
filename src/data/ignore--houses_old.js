import miami from "./../assets/images/housemodels/miami.png";
import miamiBack from "./../assets/images/housemodels/miami_back.png";
import milano from "./../assets/images/housemodels/milano.png";
import monaco from "./../assets/images/housemodels/monaco.png";
import monacoInterior from "./../assets/images/housemodels/monaco_interior.png";
import monacoBathroom from "./../assets/images/housemodels/monaco_bathroom.png";
import nizza from "./../assets/images/housemodels/nizza.png";
import nizzaInterior from "./../assets/images/housemodels/nizza_interior.png";
import nizzaBack from "./../assets/images/housemodels/nizza_back.png";
import torino from "./../assets/images/housemodels/torino.png";
import torinoBack from "./../assets/images/housemodels/torino_back.png";
import venezia from "./../assets/images/housemodels/venezia.png";
import veneziaInterior from "./../assets/images/housemodels/venezia_interior.png";
import veneziaBathroom from "./../assets/images/housemodels/venezia_bathroom.png";
import verona from "./../assets/images/housemodels/verona.png";
import veronaInterior from "./../assets/images/housemodels/verona_interior.png";
import veronaBathroom from "./../assets/images/housemodels/verona_bathroom.png";
import zurigo from "./../assets/images/housemodels/zurigo.png";
import zurigoBack from "./../assets/images/housemodels/zurigo_back.png";

import miamiPlan from "./../assets/images/houseplans/miami-plan.png";
import milanoPlan from "./../assets/images/houseplans/milano-plan.png";
import monacoPlan from "./../assets/images/houseplans/monaco-plan.png";
import nizzaPlan from "./../assets/images/houseplans/nizza-plan.png";
import torinoPlan from "./../assets/images/houseplans/torino-plan.png";
import veneziaPlan from "./../assets/images/houseplans/venezia-plan.png";
import veronaPlan from "./../assets/images/houseplans/verona-plan.png";
import zurigoPlan from "./../assets/images/houseplans/zurigo-plan.png";

/***  DATA  ***/

const houses = [
	{
		title: 'Miami',
		rooms: '7',
		size: '121.30 m²',
		price: '31.200 €',
		status: 'PREORDER IN 2024',
		imageSrc: miami,
		gallery: [
			{
				title: 'Vchod',
				imageSrc: miami
			},
			{
				title: 'Nádvorie',
				imageSrc: miamiBack
			},		
		],
		plan: miamiPlan,
		characteristics: [ 
			'3 NEIGHBORHOODS', 'COTTAGES, COURTS AND TOWNS AT MARIPOSA', 
			'FROM THE HIGH $400,000S', '1,276 TO 2,554 SQUARE FEET OF LIVING SPACE',
			'VARIETY OF COMMUNITY AMENITIES', 'NOW SELLING!'
		],
		technicalCharacteristics: {
			surfaceGross: '121.30 m²',
			surfaceNet: '111.57 m²'
		},
		roomDetails: {
			vchod: '25.35',
			chodba: '3.91',
			schody: '3.06',
			chodba: '3.06',
			'spálňa 1': '2.53',
			obývačka: '35.42',
			kuchyňa: '10.89',
			chodba: '7.05',
			šatňa: '5.19',
			'spálňa 1': '14.27',
			'spálňa 2':'19.51',
			'spálňa 3':'19.87',
		}
	},
	{
		title: 'Milano',
		rooms: '7',
		size: '158.62 m²',
		price: '31.200 €',
		status: 'PREORDER IN 2024',
		imageSrc: milano,
		gallery: [
			{
				title: 'Vchod',
				imageSrc: milano
			},
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
			vchod: '3.22',
			chodba: '15.02',
			šatník: '6.15',
			'obývačka a kuchyňa': '45.95',
			'spálňa 1': '12.95',
			terasa: '11.94',
			'spálňa 2': '17.50',
			'spálňa 3' : '16.80',
			'kúpeľňa 1': '12.25',
			'kúpeľňa 1': '3.68',
		}
	},	
	{
		title: 'Monaco',
		rooms: '4',
		size: '89.12 m²',
		price: '31.200 €',
		status: 'NOW SELLING',
		imageSrc: monaco,
		gallery: [
			{
				title: 'Vchod',
				imageSrc: monaco
			},
			{
				title: 'Interiér',
				imageSrc: monacoInterior
			},
			{
				title: 'Kúpeľňa',
				imageSrc: monacoBathroom
			},			
		],
		plan: monacoPlan,
		characteristics: [ 
			'3 NEIGHBORHOODS', 'COTTAGES, COURTS AND TOWNS AT MARIPOSA', 
			'FROM THE HIGH $400,000S', '1,276 TO 2,554 SQUARE FEET OF LIVING SPACE',
			'VARIETY OF COMMUNITY AMENITIES', 'NOW SELLING!'
		],
		technicalCharacteristics: {
			surfaceGross: '89.12 m²',
			surfaceNet: '78.16 m²'
		},
		roomDetails: {
			vchod: '3.39',
			chodba:	'10.59',
			'obývačka 1':	'23.09',
			kuchyňa:	'5.31',
			'hosťovské wc':	'2.19',
			'obývačka 2':	'17.34',
			'spálňa 2':	'8.93',
			kúpeľňa:	'5.17',
			'spálňa 1':	'10.84',
		}
	},
	{
		title: 'Nizza',
		rooms: '4',
		size: '110 m²',
		price: '31.200 €',
		status: 'NOW SELLING',
		imageSrc: nizza,
		gallery: [
			{
				title: 'Vchod',
				imageSrc: nizza
			},
			{
				title: 'Nádvorie',
				imageSrc: nizzaBack
			},
			{
				title: 'Interiér',
				imageSrc: nizzaInterior
			},		
		],		
		plan: nizzaPlan,		
		characteristics: [ 
			'3 NEIGHBORHOODS', 'COTTAGES, COURTS AND TOWNS AT MARIPOSA', 
			'FROM THE HIGH $400,000S', '1,276 TO 2,554 SQUARE FEET OF LIVING SPACE',
			'VARIETY OF COMMUNITY AMENITIES', 'NOW SELLING!'
		],
		technicalCharacteristics: {
			surfaceGross: '110 m²',
			surfaceNet: '96.34 m²'
		},
		roomDetails: {
			balkón: '4.41',
			vchod: '1.84',
			kuchyňa: '10.95',
			šatník: '1.89',
			jedáleň: '10.32',
			obývačka: '17.34',
			chodba: '9.02',
			'spálňa 1' : '7.93',
			'spálňa 2' : '6.10',
			kúpeľňa: '4.77',
			terasa: '9.58',
			'hosťovské wc': '1.89',
		}
	},			
	{
		title: 'Torino',
		rooms: '4',
		size: '75.26 m²',
		price: '20.400 €',
		status: 'NOW SELLING',
		imageSrc: torino,
		gallery: [
			{
				title: 'Vchod',
				imageSrc: torino
			},
			{
				title: 'Nádvorie',
				imageSrc: torinoBack
			},		
		],		
		plan: torinoPlan,
		characteristics: [ 
			'3 NEIGHBORHOODS', 'COTTAGES, COURTS AND TOWNS AT MARIPOSA', 
			'FROM THE HIGH $400,000S', '1,276 TO 2,554 SQUARE FEET OF LIVING SPACE',
			'VARIETY OF COMMUNITY AMENITIES', 'NOW SELLING!'
		],
		technicalCharacteristics: {
			surfaceGross: '75.26 m²',
			surfaceNet: '68.32 m²'
		},
		roomDetails: {
			balkón: '3.95',
			vchod: '3.06',
			predsieň: '3.85',
			obývačka: '19.32',
			kuchyňa: '8.4',
			kúpeľňa: '4.08',
			'spálňa 1' : '9',
			'spálňa 2' : '10.5',
			terasa: '6.16',
		}
	},		
	{
		title: 'Venezia',
		rooms: '5',
		size: '163.78 m²',
		price: '20.400 €',
		status: 'NOW SELLING',
		imageSrc: venezia,
		gallery: [
			{
				title: 'Vchod',
				imageSrc: venezia
			},
			{
				title: 'Interiér',
				imageSrc: veneziaInterior
			},
			{
				title: 'Kúpeľňa',
				imageSrc: veneziaBathroom
			},			
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
			vchod: '3.22',
			chodba: '15.02',
			šatník: '6.15',
			'obývačka a kuchyňa': '43.23',
			'spálňa 1': '13.65',
			terasa: '9.28',
			'spálňa 2': '26.40',
			'spálňa 3': '16.02',
			'kúpeľňa 1': '12.25',
			'kúpeľňa 2': '3.68',
		}
	},
	{
		title: 'Verona',
		rooms: '4',
		size: '76.69 m²',
		price: '20.400 €',
		status: 'NOW SELLING',
		imageSrc: verona,
//		imageSrc: 'https://admin.domtera.rs/server//storage/homes/montazna-kuca-verona.jpg',
		gallery: [
			{
				title: 'Vchod',
				imageSrc: verona
			},
			{
				title: 'Interiér',
				imageSrc: veronaInterior
			},
			{
				title: 'Kúpeľňa',
				imageSrc: veronaBathroom
			},	
		],
		plan: veronaPlan,
		characteristics: [ 
			'3 NEIGHBORHOODS', 'COTTAGES, COURTS AND TOWNS AT MARIPOSA', 
			'FROM THE HIGH $400,000S', '1,276 TO 2,554 SQUARE FEET OF LIVING SPACE',
			'VARIETY OF COMMUNITY AMENITIES', 'NOW SELLING!'
		],
		technicalCharacteristics: {
			surfaceGross: '76.69 m²',
			surfaceNet: '65.47 m²'
		},
		roomDetails: {
			balkón: '8.52',
			vchod: '4.29',
			obývačka: '25.59',
			kuchyňa: '4.6',
			kúpeľňa: '5.6',
			'spálňa 1' : '10.02',
			'spálňa 2' : '6.85',
		}
	},
	{
		title: 'Zurigo',
		rooms: '4',
		size: '199.11 m²',
		price: '63.700 €',
		status: 'PREORDER IN 2023',
		imageSrc: zurigo,
		gallery: [
			{
				title: 'Vchod',
				imageSrc: zurigo
			},
			{
				title: 'Nádvorie',
				imageSrc: zurigoBack
			},
		],		
		plan: zurigoPlan,
		characteristics: [ 
			'3 NEIGHBORHOODS', 'COTTAGES, COURTS AND TOWNS AT MARIPOSA', 
			'FROM THE HIGH $400,000S', '1,276 TO 2,554 SQUARE FEET OF LIVING SPACE',
			'VARIETY OF COMMUNITY AMENITIES', 'NOW SELLING!'
		],
		technicalCharacteristics: {
			surfaceGross: '199.11 m²',
			surfaceNet: '158.5 m²'
		},
		roomDetails: {
			vchod:	'5.67',
			'chodba 1':	'17.76',
			'technická skriňa':	'5.7',
			'WC':	'2.86',
			'schody':	'5.28',
			obývačka:	'35.42',
			kuchyňa: '10.89',
			'chodba 2':	'7.05',
			šatňa:	'5.19',
			'spálňa 1':	'14.27',
			'spálňa 2':	'19.51',
			'spálňa 3':	'19.87',
		}
	},		
	
];

export default houses;