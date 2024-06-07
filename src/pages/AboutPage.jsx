import { useRef } from 'react';

import CompanyValues from '@components/CompanyValues';
import { ImageBanner } from '@components/media';
import { HeadingBlock, TextBlock } from '@components/text';
import { Icon } from '@components/graphic';

import pageBkg from '@images/page_background/xs/about.jpg';
import valueV1 from '@images/company_values/xs/beginning.jpg';
import valueV2 from '@images/company_values/xs/home.jpg';
import valueV3 from '@images/company_values/xs/life.jpg';

const images = [
  {
    //			src: 'https://thumbs.dreamstime.com/z/successful-architects-team-top-view-four-architect-checking-project-looking-camera-92877774.jpg'
    //			src: 'https://i0.wp.com/bostonrealestatetimes.com/wp-content/uploads/2021/10/Colliers-Italy.jpg?fit=2160%2C1200&ssl=1',
    src: pageBkg
    //			src: 'https://vietnamconstruction.vn/wp-content/uploads/2016/01/Project-management-for-construction.jpg'
  }
];

const companyValues = [
  {
    title: 'Lepší Začiatok',
    text: 'Rozumieme, aky náročný je proces vybrať si ten správný domov.<br/>Dbáme na to ako vyzerá, akú energiu vyžaruje a ako sa v ňom budete cítiť.<br/>U nás - stojíme vždy pri Vás.',
    icon: 'v1',
    //    imageSrc: 'https://dsqqu7oxq6o1v.cloudfront.net/preview-562653-9Knu8vNR8PdSgTuM-large.JPG',
    imageSrc: valueV1,
    isFixed: false
  },
  {
    title: 'Lepší domov',
    text: 'Budovanie každého domu nám dáva hlboký pocit naplnenia, každý deň sa usilujeme prispieť k lepšiemu prostrediu, podporovať komunity a to všetko s vedomím pre spoločenskú integritu',
    icon: 'v2',
    //    imageSrc: 'https://i.pinimg.com/originals/c5/4b/f3/c54bf387f6fd7e8563e2c42d7ee93f17.jpg',
    imageSrc: valueV2,
    isFixed: false
  },
  {
    title: 'Lepší život',
    text: 'Každý z nás zdieľame rovnaký názor, že každý nový domov je nová príležitosť vybudovať niečo lepšie.<br/> Na nové a lepšie začiatky',
    icon: 'v3',
    //    imageSrc: 'https://www.nerdwallet.com/assets/blog/wp-content/uploads/2021/05/GettyImages-905902144-2400x1440.jpg',
    imageSrc: valueV3,
    isFixed: false
  }
];

const AboutPage = (props) => {
  let { className } = props;
  const introSectionRef = useRef(null);
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
    <div className={`about-page__c ${className}`}>
      <HeadingBlock heading1='O NÁS' heading2='Život v Primetech' />
      <ImageBanner className='intro-image' images={images} showOverlay />
      <Icon
        className='nav-arrow highlight standard bottom'
        icon='chevron-right'
        onClick={scrollTo(introSectionRef)}
      />

      <TextBlock
        className='our-values-text'
        ref={introSectionRef}
        heading='Naše hodnoty'
        text='Všetci z nás si chceme vybudovať lepší život. Život naplnený všetkým a všetkými na ktorých záleží najviac. A miesto, ktoré môžeme nazývať domov, ktoré bude všetko spájať tými najlepšími možnými spôsobmi. Rozumieme ako dôležitý je domov pre Vás. Pre nás znamená tiež veľa. Naše domovy sú vyjadrením vedomostí, ktoré máme o tom ako ľudia chcú žiť. Pre nás to sú individuálné umelecké diela vystavené vo svete, aby ich mohli všetci vidieť a tešiť sa z nich.
<br/>Každy z nás zdieľame silný názor, že každý nový domov je nová príležitosť vybudovať niečo lepšie.'
      />
      {companyValues.map((value, index) => (
        <CompanyValues
          key={`${index}-${value.icon}`}
          id={`${index}-${value.icon}`}
          title={value.title}
          text={value.text}
          icon={value.icon}
          imageSrc={value.imageSrc}
        />
      ))}
    </div>
  );
};

export default AboutPage;
