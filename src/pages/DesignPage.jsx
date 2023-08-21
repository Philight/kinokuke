import { useState, useEffect, useRef } from 'react';

import DesignValues from '@components/DesignValues';
import DesignAndArchitectureTiles from '@components/DesignAndArchitectureTiles';
import { Icon } from '@components/graphic';
import { ImageBanner, ImageCarousel } from '@components/media';
import { FullwidthHeading, HeadingBlock, TextBlock } from '@components/text';

import introBkg from '@images/page-bkg/design-features-page-bkg.png';

import processStep1 from '@images/process-steps/process-step-1.png';
import processStep2 from '@images/process-steps/process-step-2.png';
import processStep3 from '@images/process-steps/process-step-3.png';
import processStep4 from '@images/process-steps/process-step-4.png';
import processStep5 from '@images/process-steps/process-step-5.png';
import processStep6 from '@images/process-steps/process-step-6.png';
import processStep7 from '@images/process-steps/process-step-7.png';
import processStep8 from '@images/process-steps/process-step-8.png';

import BLImage from '@images/design-values/balanced-living.png';
import GLImage from '@images/design-values/green-life.png';
import HOImage from '@images/design-values/home-hq.png';
import HSImage from '@images/design-values/home-spa.png';

import LSImage from '@images/design-values/life-space.png';
import LWImage from '@images/design-values/live-well.png';
import MCImage from '@images/design-values/master-chef.png';
import SHImage from '@images/design-values/smart-home.png';

const images = [
  {
    //			src: 'https://www.nwhm.com/sites/default/files/2018-06/DFeatures_Banner_2160x723px_1_2.jpg'
    src: introBkg
  }
];

const processPhases = [
  {
    src: processStep1,
    columns: 1,
    url: '/process'
  },
  {
    src: processStep2,
    columns: 1,
    url: '/process'
  },
  {
    src: processStep3,
    columns: 1,
    url: '/process'
  },
  {
    src: processStep4,
    columns: 1,
    url: '/process'
  },
  {
    src: processStep5,
    columns: 1,
    url: '/process'
  },
  {
    src: processStep6,
    columns: 1,
    url: '/process'
  },
  {
    src: processStep7,
    columns: 1,
    url: '/process'
  },
  {
    src: processStep8,
    columns: 1,
    url: '/process'
  }
];

const tiles = [
  {
    type: 'image',
    imageSrc:
      'https://www.impressiveinteriordesign.com/wp-content/uploads/2014/09/Eco-Friendly-House-With-A-Contemporary-Design-1.jpg'
  },
  {
    type: 'content',
    title: 'GREEN LIFE',
    slogan: 'Udržateľnosť. Energetická úspornosť. Zeleň.',
    text: 'Program, ktorý sa zaväzuje realizovať udržateľné stavebné prvky - od energeticky úsporných spotrebičov až po solárne vylepšenia, ktoré v konečnom dôsledku majú pozitívny efekt na životné prostredie.',
    imageSrc:
      'https://www.impressiveinteriordesign.com/wp-content/uploads/2014/09/Eco-Friendly-House-With-A-Contemporary-Design-1.jpg',
    backgroundColor: '#a8b53a'
  }
];

const designValues = [
  {
    heading: 'Life Space',
    title: 'Možnosti podlažných plánov, ktoré sa prispôsobia Vášmu životu',
    text: 'Life Space ponúka flexibilný dizajn, ktorý spĺňa potreby dnešných domácností na základe toho koľko reálne využívaju priestor',
    imageSrc: LSImage
  },
  {
    heading: 'Green Life',
    title: 'Udržateľnosť. Energetická úspornosť. Zeleň.',
    text: 'Program, ktorý sa zaväzuje realizovať udržateľné stavebné prvky - od energeticky úsporných spotrebičov až po solárne vylepšenia, ktoré v konečnom dôsledku majú pozitívny efekt na životné prostredie.',
    imageSrc: GLImage
  },
  {
    heading: 'Balanced Living',
    title: 'Princípy starodávného umenia a vedy',
    text: 'Balanced Living aplikuje princípy Feng Shui, aby zaručila veľa šťastia pre všetkých členov domácnosti.',
    imageSrc: BLImage
  },
  {
    heading: 'Smart Home',
    title: 'Modernizovať dnešné domy nápadmi zo zajtrajška',
    text: 'Uvádzame Home TECH balíček - štandardný smart-home technologický balíček ponúkaný v každom novom domove. Progresívny integračný systém domova, ktorý nám umožňuje centralizovať a kontrolovať všetko od služieb až po bezpečnost a zábavu pre pohodlie a úsporu základov. Možností je nekonečno.',
    imageSrc: SHImage
  },
  {
    heading: 'Home HO',
    title: 'Funkčné príležitosti pre Home Office vašich snov',
    text: 'CAT 5/6 Elektrické vedenie pre Hi-Speed Internet, TV zásuvky v celom dome, Surround Sound naprieč celým domom, domáca automatizácia, HDMI Pre-Wire',
    imageSrc: HOImage
  },
  {
    heading: 'Live Well',
    title: 'Navrhnuté pre Vaše zdravie',
    text: 'Relaxačné Outdoor priestory, solárne panely, Systémy na filtráciu a čistenie vzduchu, Systémy na filtráciu a čistenie vody, Systém reverznej osmózy',
    imageSrc: LWImage
  },
  {
    heading: 'Home Spa',
    title: 'Vaše domáce SPA',
    text: 'Krásne Dizajnérske povrchové úpravy v základných a stredných kúpeľniach, Kremenné a Mramorové dosky, Drop-In Vaňe, Priestranné sprchy s upravenými funkciami, Priľahlé šatne',
    imageSrc: HSImage
  },
  {
    heading: 'Master Chef',
    title: 'Pretože Kuchyňa je Srdcom Domova',
    text: 'Balíky zariadení z nehrdzavejúcej ocele vrátane Rúry, Mikrovlnná rúra, Sporák, Digestor a umývačka riadu, Kremenné kuchynné dosky and Nástenné panely',
    imageSrc: MCImage
  }
];

const DesignPage = (props) => {
  let { className, enableAutoplay, interval } = props;

  const [ contentShown, setContentShown ] = useState(false);
  const timeoutRef = useRef(null);
  const introSectionRef = useRef(null);

  const scrollTo = (sectionRef) => () => {
    if (sectionRef.current) {
      //			sectionRef.current.scrollIntoView({behavior: "smooth", block: "nearest"})
      window.scrollTo({
        left: 0,
        top: window.pageYOffset + sectionRef.current.getBoundingClientRect().top - 65,
        behavior: 'smooth'
      });
    }
  };

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    if (enableAutoplay) {
      resetTimeout();

      timeoutRef.current = setTimeout(() => setContentShown((prevValue) => !prevValue), interval);
    }

    return () => {
      resetTimeout();
    };
  }, [ contentShown ]);

  return (
    <div className={`design-page__c ${className}`}>
      <HeadingBlock heading1='DIZAJN' heading2='Dizajn v PrimeTech' />
      <ImageBanner className='design-page__intro-image' images={images} showOverlay />
      <Icon
        className='nav-arrow highlight standard bottom'
        icon='chevron-right'
        onClick={scrollTo(introSectionRef)}
      />

      <TextBlock
        ref={introSectionRef}
        heading='Nadizajnované podľa toho ako chcete žiť'
        text='Zaväzujeme sa naplno k umeniu dizajnu a transformácií novo vybudovaného domovu k domovu tak vzácného a výnimočného ako je rodina, ktorá bude v ňom bývať a prosperovať.
				<br/><br/>Veríme v to, že keď prídete domov, mali by ste prísť domov k sebe.
				<br/>Táto mantra slúži na povzbudenie najvyššieho levelu osobného vyjadrovania sa napriek našími kupcami domov a zapája našu široko rozsiahlú, indivizualizovanú ponuku dizajnových služieb vrátane green life, living canvas, balanced living, and life space.
				<br/><br/>Podporujeme architektonickú integritu a osobnosť každého domovu a veríme, že každý domov je unikátny pre každú rodinu. Veríme, že rozhodnutia v dizajne naších kupcov sú tvarované miestami, ktoré precestovali, hĺbkou ich životných skúseností a ľuďmi, ktorých ľúbili.'
      />
      <FullwidthHeading heading1={`dizajn štúdio`} heading2={`proces`} />

      <ImageCarousel
        className='design-page__process-phases'
        images={processPhases}
        showViewBox
        showStartBtn
        startBtnText='štart'
      />

      <FullwidthHeading heading1={`udržateľný`} heading2={`dizajn`} />
      <div className='design-page__tiles f-col'>
        {tiles.map((tile, tileIndex) => (
          <DesignAndArchitectureTiles key={`tile-${tileIndex}`} tile={tile} showText />
        ))}
      </div>

      <FullwidthHeading heading1={`pravidlá`} heading2={`dizajnu`} />
      <DesignValues tiles={designValues} enableAutoplay interval='3000' />
    </div>
  );
};

export default DesignPage;
