import { Layer, Image } from '@components/graphic';
import { strReplaceNewline } from '@utils';

const ImageBanner = (props) => {
  let { className, images, isBkg, heading, text, btnText, btnSrc, showOverlay, isHTML } = props;

  return (
    <section className={`image-banner__c ${className}`}>
      <div className='image-banner__images-container fill-parent'>
        {images.map((image, index) => {
          return isBkg ? (
            <div
              key={index}
              className='image-background fill-parent'
              style={{ background: `url(${image.src}) repeat` }}
            />
          ) : (
            <div key={index} className='image-wrapper fill-parent'>
              <Image src={image.src} withSizes />
              {showOverlay && <Layer className='image-banner__overlay' />}
            </div>
          );
        })}
      </div>
      <div className='image-banner__content'>
        {!isHTML && heading && (
          <h2 className='image-banner__title'>{strReplaceNewline(heading)}</h2>
        )}
        {isHTML && heading && (
          <h2 className='image-banner__title' dangerouslySetInnerHTML={{ __html: heading }} />
        )}

        {text && <p className='image-banner__text'>{strReplaceNewline(text)}</p>}
        {btnText && (
          <div className='image-banner__btn-wrapper btn-wrapper'>
            <a href={btnSrc} className='image-banner__btn cta-btn' role='button'>
              {btnText}
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default ImageBanner;
