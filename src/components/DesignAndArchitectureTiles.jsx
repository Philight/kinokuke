import { Link } from 'react-router-dom';

import { HeadingUnderline } from '@components/text';
import { Image } from '@components/graphic';

const DesignAndArchitectureTiles = (props) => {
  let { tile, className, showText } = props;

  return tile?.type === 'image' ? (
    <Image
      className={`design-and-architecture__tile image-tile ${className}`}
      src={tile.imageSrc}
      withSizes
    />
  ) : (
    <div
      className={`design-and-architecture__tile content-tile f-col ${className}`}
      style={{ '--tile-color': tile.backgroundColor }}
    >
      <h2>{tile.title}</h2>
      <HeadingUnderline color='#FFF' className='' />
      <h3>{tile.slogan}</h3>
      <p className={`${showText ? '' : 'show-desktop'}`}>{tile.text}</p>
      {tile.ctaText && (
        <div className='btn-wrapper'>
          <Link to={tile.ctaSrc} className='design-and-architecture__cta'>
            <span className=''>{tile.ctaText}</span>
          </Link>
        </div>
      )}
    </div>
  );
};

export default DesignAndArchitectureTiles;
