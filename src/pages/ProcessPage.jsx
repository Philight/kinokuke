import { useRef } from 'react';

import ProcessSteps from '@components/ProcessSteps';
import { Icon } from '@components/graphic';
import { FullwidthHeading, HeadingBlock, TextBlock } from '@components/text';
import { ImageBanner, ImageCarousel } from '@components/media';

import backgroundImg from '@images/page_background/xs/process.jpg';

import phaseA_step1 from '@images/process/xs/vyberte_si_svoj_typ_steny.jpg';
import phaseA_step2 from '@images/process/xs/stresna_struktura.jpg';
import phaseA_step3 from '@images/process/xs/instalacia_exterieroveho_stolarstva.jpg';
import phaseA_step4 from '@images/process/xs/vyberte_si_farbu_fasady.jpg';
import phaseA_step5 from '@images/process/xs/klampiarske_prace.jpg';
import phaseA_step6 from '@images/process/xs/sadrove_maliarske_prace.jpg';
import phaseA_step7 from '@images/process/xs/instalacia_hadic.jpg';
import phaseA_step8 from '@images/process/xs/malovanie_drevenych_povrchov.jpg';

import phaseTurnkey_step1 from '@images/process/xs/elektroinstalacie.jpg';
import phaseTurnkey_step2 from '@images/process/xs/kuchyna_a_kupelna.jpg';
import phaseTurnkey_step3 from '@images/process/xs/podlaha_a_izbove_dvere.jpg';
import phaseTurnkey_step4 from '@images/process/xs/sanitarna_keramika.jpg';
import phaseTurnkey_step5 from '@images/process/xs/vytvorenie_zakladu.jpg';

// import wallA from "@images/wall-types/tip-a.png";
import wallTypeBackground from '@images/banners/wall_types_banner.png';
import wallA from '@images/wall_types/tip-a-cut.png';
// import wallB from "@images/wall-types/tip-b.png";
import wallB from '@images/wall_types/tip-b-cut.png';
// import wallPasiv from "@images/wall-types/tip-pasiv.png";
import wallPasiv from '@images/wall_types/tip-pasiv-cut.png';

const images = [
  {
    // src: 'https://www.bankrate.com/2021/02/11104559/What_is_a_modular_home.jpg?auto=webp&optimize=high&crop=16:9'
    src: backgroundImg
  }
];

const steps = [
  {
    title: 'Vyberte si svoj typ steny',
    text: 'Inštalácia externých a vnútorných stien podľa technickej špecifikácie a vybratého typu steny',
    //			imageSrc: 'https://boomtownroi.com/wp-content/uploads/2021/02/AdobeStock_292580462-scaled.jpeg',
    imageSrc: phaseA_step1,
    color: 'rgb(var(--color-hermes-orange))',
    icon: 'choice'
  },
  {
    title: 'Strešná štruktúra',
    text: `Inštalácia strešnej štruktúry - priehradové strešné prievlaky s inštaláćiou OSB dosiek, strešnej fólie, priečnych a pozdĺžnych lat ako základ inštalácie strechy
\nInštalácia strešnej krytiny - škridla`,
    //			imageSrc: 'https://www.unicomcorp.com/wp-content/uploads/2018/04/real-estate-customer-service.jpg',
    imageSrc: phaseA_step2,
    color: 'rgb(1 157 120)',
    icon: 'home'
  },
  {
    title: 'Inštalácia exteriérového stolárstva',
    text: 'Inštalácia exteriérového stolárstva - PVC (VEKA, Nemecko)',
    //			imageSrc: 'https://aw930cdnprdcd.azureedge.net/-/media/andersenwindows/images/parts-and-support/support/installation/diy/installation-diy-hero.jpg?modified=20190819152930&h=768&w=768&la=en&hash=7E9B319A9A5B01DD61FB1A9F33CA9D34',
    imageSrc: phaseA_step3,
    color: '#778587',
    icon: 'build'
  },
  {
    title: 'Vyberte si farbu fasády',
    text: `Kompletné fasádne práce s inštaláciou fasády vo farbe akú si zvolí zákazník
\nLemovanie odkvapov v demitovom fasádnom systéme`,
    // imageSrc: 'https://www.thoughtco.com/thmb/7wijXPfom2G2pUi_gIGR1m5THDI=/3000x2000/filters:fill(auto,1)/prefab-55759560-573635485f9b58723d282e9c.jpg',
    //			imageSrc: 'https://media1.fdncms.com/inlander/imager/u/original/21784940/home7-2-17823d3014553cd6.jpg',
    imageSrc: phaseA_step4,
    color: 'rgb(0 177 142)',
    icon: 'choice'
  },
  {
    title: 'Klampiarske práce',
    text: 'Kompletné klampiarske práce - inštalácia odkvapiek, čelných skiel, zálivov a veniec; všetky plechy sú vyrobené z pozinkovaného a plastifikovaného plechu vo farbe akú si zvolí zákazník',
    //			imageSrc: 'https://thearchitectsdiary.com/wp-content/uploads/2021/03/5-Reasons-You-May-Need-To-Hire-A-Metal-Roofing-Contractor-1.jpeg',
    imageSrc: phaseA_step5,
    color: '#0499a9',
    icon: 'build'
  },
  {
    title: 'Sadrové maliarske práce',
    text: 'Sadrové maliarske práce - inštalácia sadrokartónových dosiek vo vnútri stien, ich páskovanie, vyhladenie a maľovanie v jednej vrstve',
    //			imageSrc: 'https://www.ooba.co.za/app/uploads/2015/04/home-renovation.jpg',
    imageSrc: phaseA_step6,
    color: 'rgb(var(--color-hermes-blue))',
    icon: 'paint'
  },
  {
    title: 'Inštalácia hadíc',
    text: 'Inštalácia rebrovaných (flexibilných) hadíc pre elektroinštalácie',
    //			imageSrc: 'https://lirp.cdn-website.com/e5187d45/dms3rep/multi/opt/prewiring-new-construction-home-1920w.jpeg',
    imageSrc: phaseA_step7,
    color: 'rgb(var(--color-hermes-orange-dark))',
    icon: 'electrician'
  },
  {
    title: 'Maľovanie drevených povrchov',
    text: 'Maľovanie všetkých drevených povrchov s prostriedkami na ochranu dreva',
    //			imageSrc: 'https://www.nipponpaint.co.in/wp-content/uploads/2021/03/MicrosoftTeams-image-89.jpg',
    imageSrc: phaseA_step8,
    color: '#fd420f',
    icon: 'paint'
  }
];

const steps2 = [
  {
    title: 'Elektroinštalácie',
    text: 'Vykonanie elektroinštalácií s inštaláciou rozvádzačov, poistiek, FID prepínačov a elektrického príslušenstva (spínačov a zásuviek); distribúcia elektrických inštalácií je vykonávaná pre rozvádzač s poistkami a po dohode so zákazníkom možno nahlásiť a pripojiť zariadenia k externej elektrickej sieťi',
    //			imageSrc: 'https://www.lasergroup.co.nz/images/assets/3631/14',
    imageSrc: phaseTurnkey_step1,
    color: 'rgb(var(--color-hermes-orange))',
    icon: 'electrician'
  },
  {
    title: 'Kuchyňa a kúpeľna',
    text: `Inštalácia prívodu vody a kanalizačného zariadenia
\nInštalácia keramických dlaždíc v kuchyni a kúpeľni; v kuchyni je práca vykonaná do výšky 160cm, a v kúpeľni až po strop; výber keramických dlaždíc je na zákazníkovi`,
    //			imageSrc: 'https://media.product.which.co.uk/prod/images/original/gm-24e38335-7b0b-49a0-a2db-69c54f53d273-kitchen-fitters.jpg',
    imageSrc: phaseTurnkey_step2,
    color: '#0499a9',
    icon: 'install'
  },
  {
    title: 'Podlaha a izbové dvere',
    text: `Kladenie podláh - laminát I trieda hrúbka 8mm; cena zahrňuje inštaláciu všetkých vrstiev vodeodolnosti a tepelnej izolácie v podlahách
\nInštalácia izbových dvier`,
    //			imageSrc: 'https://www.paoson.com/blog/wp-content/uploads/2020/11/02Laminate-Flooring-Installation-16.jpg',
    imageSrc: phaseTurnkey_step3,
    color: '#778587',
    icon: 'floor'
  },
  {
    title: 'Sanitárna keramika',
    text: `Inštalácia sanitárnej keramiky a príslušenstva v kúpeľni (WC s nádržkou, sprcha s vaňou, drez, kotol, zrkadlo, sprchová batéria, drezová batéria)`,
    //			imageSrc: bathroomInstallation,
    imageSrc: phaseTurnkey_step4,
    color: 'rgb(var(--color-hermes-blue))',
    icon: 'build'
  },
  {
    title: 'Vytvorenie základu',
    text: `Pre obidve fázy dokážeme ponúknuť základovú konštrukciu, toto zahŕňa:
\n- Betonáž pásových základov s železobetónom MB20, prierez 30 / 80cm. Murovanie soklových stien a schodov s betónovým blokom 20x20x40cm. V turnkey fáze, sú soklové steny pokryté polystyrénom a vymaľované fasádnym náterom
\n- Betónovanie podlahovej dosky s železobetónom MB25, na vrstve štrku 10cm`,
    //      imageSrc: 'https://buildgreennh.com/wp-content/uploads/2021/11/prefab-home-location.jpg',
    // imageSrc: 'https://img.freepik.com/premium-photo/construction-new-modern-modular-house_127089-1917.jpg?w=2000',
    imageSrc: phaseTurnkey_step5,
    color: 'rgb(var(--color-hermes-green))',
    icon: 'foundation'
  }
];

const wallTypesBkg =
  'https://cdn.vox-cdn.com/thumbor/XZDin0MkaOZxbzGwV_Km5OXpB3A=/0x0:3600x2400/1200x800/filters:focal(1032x940:1608x1516)/cdn.vox-cdn.com/uploads/chorus_image/image/70129201/Framing_iStock_1142903080.0.jpg';
const carouselImages = [
  {
    src: wallB,
    columns: 1
  },
  {
    src: wallA,
    columns: 1
  },
  {
    src: wallPasiv,
    columns: 1
  }
];

const ProcessPage = (props) => {
  let { className } = props;
  const wallTypesRef = useRef(null);
  const introTextRef = useRef(null);

  const scrollTo = (sectionRef) => () => {
    if (sectionRef.current) {
      window.scrollTo({
        left: 0,
        top: window.pageYOffset + sectionRef.current.getBoundingClientRect().top - 65,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className={`process-page__c ${className}`}>
      <HeadingBlock heading1='PROCES' heading2='Dizajn, výroba, inštalácia' />
      <ImageBanner className='intro-image' images={images} showOverlay />
      <Icon
        className='nav-arrow highlight standard bottom'
        icon='chevron-right'
        onClick={scrollTo(introTextRef)}
      />
      <TextBlock
        ref={introTextRef}
        heading='Stojíme pri Vás pri každom kroku'
        text='Prerobili sme celý proces ako dizajnujeme, staviame a kupujeme domy. Bez omeškaní. Bez bolehlavov. Od dizajnu až po inštaláciu, my spravíme všetko.'
      />

      <FullwidthHeading heading1={`fáza`} heading2={`A`} />
      <ProcessSteps steps={steps} />

      <TextBlock
        heading='Ihneď pripravené na bývanie'
        text="Konštrukcia prefabrikovaného domu na báze turnkey, zahrňa všetky práce v 'šedej fáze' a navyše:
				"
      />

      <FullwidthHeading heading1={`fáza`} heading2={`turnkey`} />
      <ProcessSteps steps={steps2} />

      <FullwidthHeading heading1={`výber`} heading2={`stien`} />
      <ImageBanner
        className='design-studio-page__wall-types-description'
        images={[ { src: wallTypeBackground } ]}
        showOverlay
        heading='prefab domov'
        text='Chceme Vám dať bližší náhľad k technologií budovania prefabrikovaných domov, s charakteristikami inštalovaných materiálov. Kladieme špeciálny dôraz na typy stien, ktoré si môžete zvoliť pri výbere svojho domu.
<br/>Vy rozhodujete o type a hrúbke materiálov, ktoré Vám nainštalujeme - tie rozhodujú o kvalite tepelnej izolácie'
      />
      <Icon
        className='wall-types-arrow nav-arrow highlight standard bottom'
        icon='chevron-right'
        onClick={scrollTo(wallTypesRef)}
      />

      <ImageCarousel
        className='design-studio-page__wall-types-image'
        images={carouselImages}
        ref={wallTypesRef}
      />
      <TextBlock
        className='design-studio-page__wall-types-tooltip'
        heading=''
        text="Majte na vedomí, že výber 'najtenšieho' typu stenu - Type B, spĺňa všetky požiadavky energetickej výkonnosti.
<br/>V tomto prípade prefab domy spadajú do kategórie B energetickej výkonnosti."
      >
        <Icon icon='info-circle' className='tooltip' />
      </TextBlock>
    </div>
  );
};

export default ProcessPage;
