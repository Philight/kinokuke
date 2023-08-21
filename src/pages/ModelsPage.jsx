import { useRef } from 'react';

import ModelsHouses from '@components/ModelsHouses';
import ContactUsModal from '@components/ContactUsModal';
import { Icon } from '@components/graphic';
import { ImageBanner } from '@components/media/';
import { HeadingBlock, TextBlock } from '@components/text';
import { HOUSES } from '@data';

const images = [
  {
    src: 'https://cdn.vox-cdn.com/thumbor/fII7oFYbKBfkfZQ8hV0WVq23CQs=/0x0:3200x2133/1200x675/filters:focal(1688x734:2200x1246)/cdn.vox-cdn.com/uploads/chorus_image/image/66417434/154.0.jpg'
  }
];

const ModelsPage = (props) => {
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
    <div className={`models-page__c ${className}`}>
      <HeadingBlock heading1='DIZAJN' heading2='Nájdi Svoj Domov' />
      <ImageBanner className='intro-image' images={images} showOverlay />
      <Icon
        className='nav-arrow highlight standard bottom'
        icon='chevron-right'
        onClick={scrollTo(introSectionRef)}
      />
      <ContactUsModal />

      <TextBlock
        ref={introSectionRef}
        heading='primetech domov'
        text='KK PrimeTech ponúka 8 iných modelov aby boli vhodné pre rôzne pozemky, životné štýly a rozpočty.
				<br/><br/>Vymeniť starý dom za nový domov svojich snov? My Vám pomôžeme.
				<br/>Staviate si druhý domov v krajine? S tým Vám tiež pomôžeme.'
      />

      <ModelsHouses houses={HOUSES} />
    </div>
  );
};

export default ModelsPage;
