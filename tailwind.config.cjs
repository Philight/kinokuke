const plugin = require("tailwindcss/plugin");
const colors = require("tailwindcss/colors");
const { parseColor } = require("tailwindcss/lib/util/color");

import { BREAKPOINTS } from './src/data/BREAKPOINTS';

/* Converts HEX color to RGB */
function toRGB(HEXColor) {
  HEXColor = HEXColor.replace('#','');
  if (HEXColor.length === 3) {
    HEXColor = HEXColor.split('').map(function (hex) {
      return hex + hex;
    }).join('');
  }
  var bigint = parseInt(HEXColor, 16);
  var r = (bigint >> 16) & 255;
  var g = (bigint >> 8) & 255;
  var b = bigint & 255;

  return [r, g, b].join(' ');
}

function withOpacityValue(variable, opacityValue) {
  return ({ opacityValue }) => {
    if (opacityValue === undefined) {
      return `rgb(var(${variable}))`
    }
    return `rgb(var(${variable}) / ${opacityValue})`
  }
}

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,vue,svelte}'],
  theme: {
    extend: {
      colors: {
        contrast: 'rgba(var(--color-contrast) / <alpha-value>)',
        notice: 'rgba(var(--color-accent) / <alpha-value>)',
        shopPay: 'var(--color-shop-pay)',
        white: 'rgba(255 255 255 / <alpha-value>)',
        'white-primary': 'rgba(var(--color-white-primary) / <alpha-value>)',
        'white-transparent': 'rgba(var(--color-white-primary) / .5)',
//        'white-transparent': `rgba(${toRGB('var(--color-white-primary)')} / 0.5)`,
//        'white-transparent': `rgba(${theme('colors.white-primary')}, 0.5)`,
//        'white-transparent': `theme('colors.white-primary / 50')`,
//        'white-transparent': `rgb(${toRGB(colors['white-primary'])} / .10)`,
//        'white-transparent': withOpacityValue('--color-white-primary', 50),
//        'white-transparent': module.exports.theme.extend.colors,
        black: 'rgba(0 0 0 / <alpha-value>)',
        'black-primary': 'rgba(var(--color-black-primary) / <alpha-value>)',
        'black-transparent': `rgba(${toRGB('var(--color-black)')} / 0.5)`,
        primary: 'rgba(var(--color-primary) / <alpha-value>)',
        'primary-transparent': `rgba(${toRGB('var(--color-primary)')} / 0.5)`,
        tertiary: 'rgba(var(--color-tertiary) / <alpha-value>)',
        'tertiary-transparent': `rgba(${toRGB('var(--color-tertiary)')} / 0.5)`,
        'gray-light': 'var(--color-gray-light)',
        'button-outline': 'var(--color-gray-lighter)',

        'hermes-orange': 'rgba(var(--color-hermes-orange) / <alpha-value>)',
        'hermes-orange-dark': 'rgba(var(--color-hermes-orange-dark) / <alpha-value>)',
        'hermes-orange-light': 'rgba(var(--color-hermes-orange-light) / <alpha-value>)',
        'hermes-orange-lighter': 'rgba(var(--color-hermes-orange-lighter) / <alpha-value>)',
        'hermes-red': 'rgba(var(--color-hermes-red) / <alpha-value>)',
        'hermes-green': 'rgba(var(--color-hermes-green) / <alpha-value>)',
        'hermes-green-dark': 'rgba(var(--color-hermes-green-dark) / <alpha-value>)',
        'hermes-blue': 'rgba(var(--color-hermes-blue) / <alpha-value>)',
        'hermes-blue-light': 'rgba(var(--color-hermes-blue-light) / <alpha-value>)',
        'hermes-blue-lighter': 'rgba(var(--color-hermes-blue-lighter) / <alpha-value>)',
        'hermes-blue-dark': 'rgba(var(--color-hermes-blue-dark) / <alpha-value>)',
        'gray': 'rgba(var(--color-gray) / <alpha-value>)',
        'gray-light': 'rgba(var(--color-gray-light) / <alpha-value>)',
        'gray-dark': 'rgba(var(--color-gray-dark) / <alpha-value>)',
      },
      screens: {
        sm: '32em',
        md: '48em',
        lg: '64em',
        xl: '80em',
        '2xl': '96em',
        'sm-max': { max: '48em' },
        'sm-only': { min: '32em', max: '48em' },
        'md-only': { min: '48em', max: '64em' },
        'lg-only': { min: '64em', max: '80em' },
        'xl-only': { min: '80em', max: '96em' },
        '2xl-only': { min: '96em' },
        'mob-lg': { min: BREAKPOINTS['MOBILE_LG'].em + 'em' }, //  480px
        'tab-sm': { min: BREAKPOINTS['TABLET_SM'].em + 'em' }, //  600px
        'tab-md': { min: BREAKPOINTS['TABLET_MD'].em + 'em' }, //  768px
        'tab-lg': { min: BREAKPOINTS['TABLET_LG'].em + 'em' }, //  900px
        'desk-sm': { min: BREAKPOINTS['DESKTOP_SM'].em + 'em' }, //  1024px
        'desk-md': { min: BREAKPOINTS['DESKTOP_MD'].em + 'em' }, //  1200px
        'desk-lg': { min: BREAKPOINTS['DESKTOP_LG'].em + 'em' }, //  1440px
        'desk-xl': { min: BREAKPOINTS['DESKTOP_XL'].em + 'em' }, //  1920px
      },
      spacing: {
        nav: 'var(--height-nav)',
        screen: 'var(--screen-height, 100vh)',
        'screen-1/4': '25vh',
        'screen-3/10': '30vh',
        'screen-2/5': '40vh',
        'screen-1/2': '50vh',
        'screen-7/10': '70vh',
        'page-outer': 'var(--space-outer)',
        full: '100%',
        '9/10': '90%',
        18: '4.5rem',
        112: '28rem',
        128: '32rem',
        144: '36rem',
        160: '40rem',
      },
      height: {
        screen: 'var(--screen-height, 100vh)',
        'screen-no-nav':
        'calc(var(--screen-height, 100vh) - var(--height-nav))',
        'screen-1/2': '50vh',
        'screen-1/3': 'calc(100vh / 3)',
        'screen-2/3': 'calc(100vh / 3 * 2)',
        'screen-1/4': '25vh',
        'screen-3/4': '75vh',
        'screen-1/5': '20vh',
        'screen-2/5': '40vh',
        'screen-3/5': '60vh',
        'screen-4/5': '80vh',
        'screen-3/10': '30vh',
      },
      width: {
        mobileGallery: 'calc(100vw - 3rem)',
      },
      fontFamily: {
        heading: 'var(--font-family-heading)',
        body: 'var(--font-family-body)',
        btn: 'var(--font-family-btn)',
        tag: 'var(--font-family-tag)',
      },
      fontSize: {
        display: ['var(--font-size-display)', '1.1'],
        heading: ['var(--font-size-heading)', '1.25'],
        lead: ['var(--font-size-lead)', '1.333'],
        copy: ['var(--font-size-copy)', '1.5'],
        fine: ['var(--font-size-fine)', '1.333'],
        'base-plus': ['1.0625rem', '1.625rem'], // 17px
        'xs-plus': ['0.8125rem', '1.125rem'], // 13px
        '2xs': ['0.6875rem', '0.875rem'], // 11px
        '3xs': ['0.625rem', '0.75rem'], // 10px
        '5xl-minus': ['2.75rem', '1'], // 44px
      },
      fontWeight: {
        'body-weight': 'var(--font-body-weight)',
        'body-weight-bold': 'var(--font-body-weight-bold)',
        'heading-weight': 'var(--font-heading-weight)',
      },
      letterSpacing: {
        1: '0.1em',
        2: '0.2em',
        3: '0.3em',
        4: '0.4em',
        5: '0.5em',
      },
      maxWidth: {
        'prose-narrow': '45ch',
        'prose-wide': '80ch',
        'screen-2xl': '1440px',
        'screen-3xl': '1536px',
        custom: 'var(--max-width)',
      },
      boxShadow: {
        border: 'inset 0px 0px 0px 1px rgb(var(--color-primary) / 0.08)',
        darkHeader: 'inset 0px -1px 0px 0px rgba(21, 21, 21, 0.4)',
        lightHeader: 'inset 0px -1px 0px 0px rgba(21, 21, 21, 0.05)',
      },
      blur: {
        xs: '2px',
      },
      gridTemplateRows: {
        '12': 'repeat(12, minmax(0, 1fr))',
        '24': 'repeat(24, minmax(0, 1fr))',
      },
      gridTemplateColumns: {
        '16': 'repeat(16, minmax(0, 1fr))',
        '24': 'repeat(24, minmax(0, 1fr))',
      },      
      gridRow: {
        'span-7': 'span 7 / span 7',
        'span-8': 'span 8 / span 8',
        'span-9': 'span 9 / span 9',
        'span-10': 'span 10 / span 10',
        'span-11': 'span 11 / span 11',
        'span-12': 'span 12 / span 12',
        'span-13': 'span 13 / span 13',
        'span-14': 'span 14 / span 14',
        'span-15': 'span 15 / span 15',
        'span-16': 'span 16 / span 16',
        'span-17': 'span 17 / span 17',
        'span-18': 'span 18 / span 18',
        'span-19': 'span 19 / span 19',
        'span-20': 'span 20 / span 20',
        'span-21': 'span 21 / span 21',
        'span-22': 'span 22 / span 22',
        'span-23': 'span 23 / span 23',
        'span-24': 'span 24 / span 24',
      },      
      gridColumn: {
        'span-13': 'span 13 / span 13',
        'span-14': 'span 14 / span 14',
        'span-15': 'span 15 / span 15',
        'span-16': 'span 16 / span 16',
        'span-17': 'span 17 / span 17',
        'span-18': 'span 18 / span 18',
        'span-19': 'span 19 / span 19',
        'span-20': 'span 20 / span 20',
        'span-21': 'span 21 / span 21',
        'span-22': 'span 22 / span 22',
        'span-23': 'span 23 / span 23',
        'span-24': 'span 24 / span 24',        
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
        '110': '110',
        '200': '200',
      },
    },
  },
  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        ":root": {
//          "--clr-primary": toRGB(colors['white-primary']),
        },
      });
    }),
  ],
};
