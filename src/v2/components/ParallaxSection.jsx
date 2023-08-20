import React from 'react';

// const LOGO_URL = './../assets/images/kinokuke-logo.png';
// import LOGO from './../assets/images/kinokuke-logo-bw.png';

const ParallaxSection = React.forwardRef((props, ref) => {
  //	let { className, redirectUrl, socialFacebookUrl, socialInstagramUrl, title, subtitle, description, subdescription } = props;
  let { className, data, showOverlay } = props;

  return (
    <section className={`parallax-section__container ${className}`} ref={ref}>
      {/* <div className="image-wrapper"><img src={data.imageSrc} /></div>*/}
      <div
        className='image-wrapper'
        style={{
          backgroundImage: `url(${data.imageSrc})`,
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }}
      >
        {showOverlay && <div className='image-overlay absolute-overlay' />}
      </div>
      <div className='parallax-section__inner-section section absolute-overlay'>
        <div className='parallax-section__content'>
          <h2>{data.title}</h2>
          <p>{data.text}</p>
        </div>
      </div>
      {/*
			<div className="parallax-section__inner-section section">
				<div className="parallax-section__content">
					<h2>{data.title}</h2>
				</div>
			</div>
*/}
    </section>
  );
});

export default ParallaxSection;
