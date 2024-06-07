import GoogleMap from '@components/plugin/GoogleMap';
import { ImageBanner } from '@components/media';
import { HeadingWithBackground } from '@components/text';

import bannerImg from '@images/page_background/xs/contact.jpg';

const AboutPage = (props) => {
  let { className } = props;

  const images = [
    {
      src: bannerImg
    }
  ];

  const location = {
    address: 'KK PrimeTech\nVeithgasse 6, 1030 Wien, Austria\nFN 327348',
    lat: 48.1984812,
    lng: 16.3793685
  };

  return (
    <div className={`contact-page__c ${className}`}>
      <ImageBanner className='background-image' images={images} showOverlay />
      <div className='contact-page__inner'>
        <HeadingWithBackground heading='Môžete nás nájsť na' />
        <GoogleMap location={location} zoom={18.25} />
      </div>
    </div>
  );
};

export default AboutPage;
