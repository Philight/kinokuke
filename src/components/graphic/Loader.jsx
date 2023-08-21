import { Image } from '@components/graphic';

import LogoImage from '@images/logo/kk-primetech--trans.png';

const ANIM_PULSE = {
  animate: {
    opacity: [ 0.4, 1, 0.4 ],
    scale: [ 0.95, 1.05, 0.95 ]
  },
  transition: {
    ease: 'linear',
    duration: 4,
    repeat: Infinity
  }
};

const Loader = (props) => {
  let { className } = props;

  return (
    <figure className={`loader__c full-screen f-center ${className}`}>
      <canvas className={'loader__background absolute-center fill-parent'} />
      <Image
        className={`loader__icon`}
        src={LogoImage}
        animate={ANIM_PULSE.animate}
        transition={ANIM_PULSE.transition}
      />
    </figure>
  );
};

export default Loader;
