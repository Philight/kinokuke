import { motion } from 'framer-motion';

const Image = (props) => {
  let { className, src, alt, style, onClick, animate, transition } = props;

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
        src={src}
        data-src={src}
        data-widths='[180, 360, 540, 720, 900, 1080, 1296, 1512, 1728, 2048]'
        data-aspectratio='{{ image.aspect_ratio }}'
        data-sizes='auto'
        alt={alt ?? 'Image not found'}
      />
    </motion.figure>
  );
};

export default Image;
