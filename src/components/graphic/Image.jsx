/**
 * Lazy loading - IntersectionObserver ?
 */

import { forwardRef, useLayoutEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import LazyLoad from 'vanilla-lazyload';

import { BREAKPOINTS, DEFAULT_SIZES_BREAKPOINTS, SRC_SETS } from '@data';

const LAZY_LOAD_CONFIG = {
  elements_selector: '.lazy'
};

const getFilename = (s) => s.split('\\').pop().split('/').pop();

const Image = forwardRef((props, ref) => {
  let {
    className,
    src,
    alt,
    style,
    onClick,
    animate,
    transition,
    imgRef,
    onLoad,
    withSizes,
    sizesBreakpoints
  } = props;

  const isMounted = useRef(false);
  const [fallback, setFallback] = useState(null);

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

  const sizesBps = sizesBreakpoints ?? DEFAULT_SIZES_BREAKPOINTS;

  const sizePrefix = '--';
  const splitName = getFilename(src).split('.');
//console.log('src', src);
//console.log('splitName', splitName);
  const [ fileExtension, fileName ] = [ splitName.pop(), splitName.join('.') ];
  const basename = fileName.split(sizePrefix)[0];
//console.log('fileExtension', fileExtension);
//console.log('fileName', fileName);
/*
  '@images/social/social-24.png'
  '@images/social/social-24--xl.png'
  '@images/social/social-24--xl.raw.png'

  '@images/social/md/social-24--md.png'

*/
  const defaultSrc = withSizes ? src.replace(`${fileName}.${fileExtension}`, `md/${basename}${sizePrefix}md.${fileExtension}`) : src;



  /**
   * Image names should be /path/to/image/[image_name]--[size].[format]
   * @returns {string} img srcset
   */
  const getSrcSets = (format) => {
    if (!withSizes) return;
//    const splitName = getFilename(src).split('.');
//    const [ fileName, fileExtension ] = [ splitName[0], splitName.pop() ];
    const imageExtension = format ?? fileExtension;

    const mapped = SRC_SETS.map((set) => {
      const original = `${fileName}.${fileExtension}`;
      const replacement = `${set.size}/${basename}${sizePrefix}${set.size}.${imageExtension} ${set.width}`;
      return src.replace(original, replacement);
    }).join(',');

//    console.log(mapped)

    return mapped;
  };

  /**
   * Breakpoints related - image layout on different screens
   * @todo Add margins, gutter
   * @returns {string} img sizes attribute
   * @example "(min-width: 1200px) 740px, (min-width: 768px) 700px, calc(100vw - 36px)"
   */
  const getSizes = () => withSizes &&
    Object.keys(DEFAULT_SIZES_BREAKPOINTS)
      .map(bp => `(min-width: ${BREAKPOINTS[bp].px}px) ${sizesBps[bp] ?? '100vw'}`)
      .join(',');

  const renderSources = (format) => withSizes ? <source type={`image/${format}`} srcSet={fallback ?? getSrcSets(format)} sizes={getSizes()} /> : <></>;

  return (
    <motion.picture
      className={`image__c ${className}`}
      ref={ref}
      style={style}
      onClick={onClick}
      animate={animate}
      transition={transition}
    >
      {renderSources('webp')}
      {/*renderSources('jpeg')*/}
      {renderSources('png')}
      <img
        className='image__img lazyload lazypreload'
        ref={imgRef}
        src={defaultSrc}
        alt={alt ?? 'Image'}
        loading='lazy'
//        srcSet={getSrcSets()}
//        sizes={getSizes()}
        data-widths={withSizes && `[${SRC_SETS.map((set) => set.width)}]`}
        data-aspectratio='{{ image.aspect_ratio }}' // calc from image ?
        onLoad={onLoad}
        onError={e => { 
          console.log('error', defaultSrc);
          e.target.onerror = null; 
          setFallback(defaultSrc);
        }}
      />
    </motion.picture>
  );
});

export default Image;
