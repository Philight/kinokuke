import { GalleryMasonry, ImageBanner } from '@components/media';
import { HeadingWithBackground } from '@components/text';
import { SOCIAL } from '@data';

import backgroundImg from '@images/page_background/gallery.jpg';

const images = [
  {
    //    src: 'https://admin.domtera.rs/server//storage/site/galerija/nova-dimenzija-planinskih-kuca-2.jpeg'
    src: backgroundImg
  }
];

const GalleryPage = (props) => {
  let { className } = props;

  return (
    <div className={`gallery-page__c ${className}`}>
      <ImageBanner className='background-image' images={images} />

      <div className='gallery-page__inner-section section'>
        <HeadingWithBackground heading='Galéria' />
        <GalleryMasonry gallery={SOCIAL} loadBtnText='Zobraziť viac' />
      </div>
    </div>
  );
};

export default GalleryPage;
