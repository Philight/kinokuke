import { useRef } from 'react';
import { useParams } from 'react-router-dom';

import FloorPlan from '@components/FloorPlan';
import ModelDescription from '@components/ModelDescription';
import ContactUsModal from '@components/ContactUsModal';
import { Icon } from '@components/graphic';
import { GalleryCarousel, ImageBanner } from '@components/media';
import { FullwidthHeading, HeadingBlock } from '@components/text';
import { HOUSES } from '@data';

const ModelPage = (props) => {
  let { className } = props;

  const { id } = useParams();
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

  let thisHouse = {};
  for (let house of HOUSES) {
    if (house.title === id) {
      thisHouse = house;
    }
  }

  return (
    <div className={`model-page__c ${className}`}>
      <HeadingBlock heading1='PrimeTech DOMOV' heading2={id} />
      <ImageBanner images={[ { src: thisHouse.src } ]} />
      <Icon
        className='nav-arrow highlight standard bottom'
        icon='chevron-right'
        onClick={scrollTo(introSectionRef)}
      />

      {/* ContactUsModal */}
      <ContactUsModal houseModel={thisHouse.title} />

      {/* Overview */}
      <div className='model-page__details-container f-col' ref={introSectionRef}>
        <ModelDescription model={thisHouse} />

        {/* Gallery */}
        <GalleryCarousel
          className='model-page__details-carousel'
          gallery={thisHouse.gallery}
          enableArrows
          enableNavigation
        />
      </div>

      {/* Technical characteristics */}
      <FullwidthHeading heading1={`technická`} heading2={`špecifikácia`} />
      <FloorPlan
        technicalCharacteristics={thisHouse.technicalCharacteristics}
        roomDetails={thisHouse.roomDetails}
        plan={thisHouse.plan}
      />
    </div>
  );
};

export default ModelPage;
