/**
 * Lazy loading - IntersectionObserver ?
 */

import { forwardRef, useLayoutEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import LazyLoad from 'vanilla-lazyload';

import { ACTIVE_BREAKPOINTS, BREAKPOINTS } from '@data';

const LAZY_LOAD_CONFIG = {
  elements_selector: '.lazy'
};

const getFilename = (s) => s.split('\\').pop().split('/').pop();

const Image = forwardRef((props, ref) => {
  let { className, src, alt, style, onClick, animate, transition, imgRef, onLoad } = props;
  // console.log(src)

  const isMounted = useRef(false);

  useLayoutEffect(() => {
    if (!document.lazyLoadInstance) {
      document.lazyLoadInstance = new LazyLoad(LAZY_LOAD_CONFIG);
    }

    if (!isMounted.current) {
      // do componentDidMount logic
      isMounted.current = true;
      document.lazyLoadInstance.update();
      console.log('DidMount');
    } else {
      // do componentDidUpdate logic
      document.lazyLoadInstance.update();
      console.log('DidUpdate');
    }
  }, [ src ]);

  /*
    640px   xs
    768px   sm
    1024px  md
    1366px  lg
    1600px  xl
    1920px  2xl
  */
  const SRC_SETS = [
    { size: 'xs', width: '640w' },
    { size: 'sm', width: '768w' },
    { size: 'md', width: '1024w' },
    { size: 'lg', width: '1366w' },
    { size: 'xl', width: '1600w' },
    { size: '2xl', width: '1920w' }
  ];

  /**
   * Image names should be /path/to/image/[image_name]--[size].[format]
   */
  const getSrcSets = () => {
    const sizePrefix = '--';
    const splitName = getFilename(src).split('.');
    const [ fileName, fileExtension ] = [ splitName[0], splitName.pop() ];
    const basename = fileName.split(sizePrefix)[0];

    return SRC_SETS.map((set) => {
      const original = `${fileName}.${fileExtension}`;
      const replacement = `${basename}${sizePrefix}${set.size}.${fileExtension} ${set.width}`;
      return src.replace(original, replacement);
    }).join(',');
  };

  /**
   * Breakpoints related - layout changes on screens
   */
  const getSizes = () => {
    for (const bp of ACTIVE_BREAKPOINTS) {
      `(min-width: ${BREAKPOINTS[bp].px}px) 100vw`;
    }

    return ACTIVE_BREAKPOINTS.map((bp) => `(min-width: ${BREAKPOINTS[bp].px}px) 100vw`).join(
      ','
    );
  };

  return (
    <motion.figure
      className={`image__c js-enabled ${className}`}
      style={style}
      onClick={onClick}
      animate={animate}
      transition={transition}
    >
      <img
        className='image__img lazyload lazypreload'
        ref={imgRef}
        onLoad={onLoad}
        src={src}
        alt={alt ?? 'Image'}
        loading='lazy'
        /*
        srcSet={`images/wdesc/lake-sm.jpg 300w,
  images/wdesc/lake-md.jpg 600w,
  images/wdesc/lake-lg.jpg 900w,
  images/wdesc/lake-xl.jpg 1200w`}
*/
        srcSet={getSrcSets()}
        //        sizes={`(min-width: 1200px) 740px, (min-width: 768px) 700px, calc(100vw - 36px)`}
        sizes={getSizes()}
        data-src={src}
        data-srcset={getSrcSets()}
        data-sizes={getSizes()}
        data-widths={`[${SRC_SETS.map((set) => set.width)}]`}
        data-aspectratio='{{ image.aspect_ratio }}' // calc from image ?
      />
    </motion.figure>
  );
});

export default Image;
