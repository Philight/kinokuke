import { useState, useRef, useEffect, forwardRef } from 'react';
import { Link } from 'react-router-dom';

import Layer from '@components/graphic/Layer';
import Icon from '@components/graphic/Icon';
import Functions from '@components/util/Functions';
import useDeviceDimensions from '@utils';

const getGridDimensions = (DEVICE_TYPE) => {
  switch (DEVICE_TYPE) {
  case 'MOBILE_SM':
  case 'MOBILE_LG':
    return { rows: 1, cols: 1 };
  case 'TABLET_SM':
  case 'TABLET_MD':
  case 'TABLET_LG':
    return { rows: 1, cols: 2 };
  case 'DESKTOP_SM':
  case 'DESKTOP_MD':
  case 'DESKTOP_LG':
  case 'DESKTOP_XL':
    return { rows: 1, cols: 4 };
  default:
    return { rows: 1, cols: 1 };
  }
};

const ImageCarousel = forwardRef((props, ref) => {
  let {
    className,
    images,
    showOverlay,
    showViewBox,
    showStartBtn,
    startBtnText,
    bidirection,
    heading,
    text,
    btnText,
    btnSrc,
    isHTML,
    columns,
    rows
  } = props;
  const { DEVICE_TYPE } = useDeviceDimensions();
  const COLUMNS = columns ?? getGridDimensions(DEVICE_TYPE).cols;
  const ROWS = rows ?? getGridDimensions(DEVICE_TYPE).rows;

  const [ slide, setSlide ] = useState(0);
  const [ totalSlides, setTotalSlides ] = useState(0);
  const [ moveBy, setMoveBy ] = useState(0);
  const [ moveOffset, setMoveOffset ] = useState(0);
  const [ isInitial, setIsInitial ] = useState(true);

  const [ imageDimensions, setImageDimensions ] = useState([]);
  const imgRefs = useRef([]);

  useEffect(() => {
    let slideCount = 0;
    for (const img of images) {
      slideCount = slideCount + img.columns;
    }
    setTotalSlides(slideCount);
  }, []);

  const updateImageData = (imgIndex, imgProperties) => {
    let oldArray = [ ...imageDimensions ];

    oldArray[imgIndex] = {
      ...oldArray[imgIndex],
      ...imgProperties,
      columnWidth: imgProperties.width / images[imgIndex].columns
    };

    setMoveBy(imgProperties.width / images[imgIndex].columns);

    setMoveOffset((window.innerWidth - imgProperties.width / images[imgIndex].columns) / 2);

    setImageDimensions(oldArray);
  };

  const startSlide = () => {
    if (isInitial) {
      setSlide(0);
      setIsInitial(false);
    }
  };

  const handleSlide = () => {
    if (isInitial) {
      startSlide();
    } else {
      setSlide(slide + 1 >= totalSlides ? 0 : slide + 1);
    }
  };

  return (
    <section
      className={`image-carousel__c ${className} f-grid rows-${ROWS} cols-${COLUMNS}`}
      ref={ref}
    >
      {showStartBtn && (
        <a
          className={`image-carousel__start-btn ${!isInitial ? 'disabled' : ''}`}
          onClick={startSlide}
        >
          {startBtnText}
        </a>
      )}

      {showViewBox && !isInitial && (
        <div className={`image-carousel__view-box absolute-fill`}>
          <Layer className={`image-carousel__view-box-left`} />
          <Layer className={`image-carousel__view-box-center`} />
          <Layer className={`image-carousel__view-box-right`} />
          <Link
            to='/process'
            rel='noopener noreferrer'
            className={`image-carousel__view-box-link absolute-fill`}
          />
        </div>
      )}

      <div className={`image-carousel__images-view carousel-view`}>
        <div
          className={`image-carousel__images-container carousel-slider`}
          style={{ transform: `translateX(${isInitial ? '0' : slide * -moveBy + moveOffset}px)` }}
        >
          {images.map((image, index) => (
            <div
              key={`f-grid-item-${index}`}
              className={`image-carousel__image-wrapper f-center f-grid-item`}
            >
              <img
                className={`image-carousel__image`}
                src={image.src}
                ref={(el) => (imgRefs.current[index] = el)}
                onLoad={() =>
                  index === 0 &&
                  updateImageData(index, {
                    width: imgRefs.current[index].offsetWidth,
                    height: imgRefs.current[index].offsetHeight
                  })
                }
              />
              {showOverlay && <div className='image-carousel__image-overlay absolute-fill' />}
              {image.url && (
                <Link to={image.url} className='absolute-fill'>
                  <Icon icon='tap-finger' className='tooltip' />
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className='image-carousel__content'>
        {!isHTML && heading && (
          <h2 className='image-carousel__content-title'>{Functions.strReplaceNewline(heading)}</h2>
        )}
        {isHTML && heading && (
          <h2
            className='image-carousel__content-title'
            dangerouslySetInnerHTML={{ __html: heading }}
          />
        )}

        {text && <p className='image-carousel__content-text'>{text}</p>}
        {btnText && (
          <Link to={btnSrc}>
            <button className='image-carousel__content-btn cta-btn'>{btnText}</button>
          </Link>
        )}
      </div>

      {!!bidirection && (
        <Icon
          icon='chevron-left'
          className='nav-arrow left flying highlight primary'
          onClick={handleSlide}
        />
      )}

      <Icon
        icon='chevron-right'
        className='nav-arrow right flying highlight primary'
        onClick={handleSlide}
      />
    </section>
  );
});

export default ImageCarousel;
