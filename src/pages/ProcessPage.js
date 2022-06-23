import React, { useEffect } from "react";

import HeadingBlock from "../components/HeadingBlock.js";
import ImageBanner from "../components/ImageBanner.js";
import TextBlock from "../components/TextBlock.js";
import FullwidthHeading from "../components/FullwidthHeading.js";
import ProcessSteps from "../components/ProcessSteps.js";
import DesignAndArchitectureTiles from "../components/DesignAndArchitectureTiles.js";

import "./../assets/css/pages/processpage.css";
import "./../assets/css/components/designandarchitecture.css";

import backgroundImg from "./../assets/images/process-page-background.png";

const ProcessPage = (props) => {
//	let { className, redirectUrl, socialFacebookUrl, socialInstagramUrl, title, subtitle, description, subdescription } = props;
	
	const images = [
		{
			//src: backgroundImg
			src: 'https://www.bankrate.com/2021/02/11104559/What_is_a_modular_home.jpg?auto=webp&optimize=high&crop=16:9'
		}
	];

	const steps = [
		{
			title: 'Vyberte si svoj Kino Kuke Domov',
			text: 'Či vlastníte pozemok na dedine alebo v meste, nájde sa Kinokuke Domov ušitý na mieru práve pre Vás. Pozrieme sa na Váš pozemok a spoločnými silami vyberieme ten správny Kinokuke Domov, ktorý bude vhodný pre Váš životný štýl a rozpočet.',
			imageSrc: '',
			color: 'var(--hermes-orange-1)',
			icon: 'choice'
		},
		{
			title: 'Nadizajnujte si svoj priestor',
			text: 'Teraz začína zábava. Vyberte si zo špičkových, štandardných povrchových úprav, vybavenia a spotrebičov Vašich snov — všetko individuálne vyberané na základe dizajnu, výkonu, dostupnosti a udržatelnosti. Vylepši si svoj priestor pomocou naších balíčkov na personalizovanie svojho Kinokuke Domova. Potrebujete garáž? Hotovo. Snívate o záhrade? Hotovo a hotovo.',
			imageSrc: '',
			color: 'rgb(1 157 120)',
			icon: 'design'
		},
		{
			title: 'Získať povolenia a súhlasy',
			text: 'S Vašimi Kino Kuke Domov náčrtmi na papieri, zašleme návrhy pre mestské povolenia. Zatiaľ čo schvaľovací proces môže trvať rozne závisiac od lokality, my sa pokusíme čo najrýchlejšie posunúť od návrhov do prefab továrňe, rýchlejšie než si dokážete vybrať svoj Kino Kuke Domov.',
			imageSrc: '',
			color: '#778587',
			icon: 'approval'
		},
		{
			title: 'Vybudujte svoj domov',
			text: 'Tu je kde začína zábava. Vybudujeme tvoj Kino Kuke Domov v prefab továrňi vo Viedňi — pomocou montážnej linky, ktorá skráti čas, odpad a bolehlavy spojené s budovaním alebo remodelingom domu. Vítajte, nižšie náklady.',
			imageSrc: '',
			color: '#0499a9',
			icon: 'build'
		},
		{
			title: 'Doručte svoj domov',
			text: 'Toto je moment, ktorý ste očakávali. Váš Kino Kuke Domov dorazí z našej fabriky skoro kompletný — steny, okná, kanalizácia a spotrebiče. Vidieť to celé je zážitok, keď Vy a Vaša rodina budete svedkami transformácie prázdneho úseku krajiny v osobný ráj. Moderné bývanie.',
			imageSrc: '',
			color: '#277881',
			icon: 'delivery'
		},
		{
			title: 'Nainštalujte svoj domov',
			text: 'Keď je Váš Kino Kuke Domov z našej fabriky doručený a má svoje základy, je treba ešte niečo spraviť. Dokončíme zbytok — nainštalujeme spotrebiče, pridáme posledné úpravy aby sme sa uistili, že tvoj Kino Kuke Domov je pripravený na nasťahovanie.',
			imageSrc: '',
			color: 'rgb(0 177 142)',
			icon: 'install'
		},		
		{
			title: 'Nasťahujte sa do svojho Kino Kuke Domova',
			text: 'Vítajte doma. Kľúče su Vaše a ostatné už necháme na Vás.',
			imageSrc: '',
			color: 'var(--hermes-orange-2)',
			icon: 'home'
		},
	];

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	return (
		<div className="process-page__container">
			<HeadingBlock heading1="PROCES" heading2="Dizajn, výroba, inštalácia" />
			<ImageBanner 
				images={images}
				showOverlay
			/>
			<TextBlock 
				heading="Stojíme pri Vás pri každom kroku"
				text="Prerobili sme celý proces ako dizajnujeme, staviame a kupujeme domy. Bez omeškaní. Bez bolehlavov. Od dizajnu až po inštaláciu, my spravíme všetko.
				"
			/>
			<FullwidthHeading heading1={`krok po`} heading2={`kroku`}/>
			<ProcessSteps 
				steps={steps}
			/>

		</div>
	)
}

export default ProcessPage;