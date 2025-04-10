/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    ],
  theme: {
    extend: {
      fontFamily: {
        'PlayfairDisplay': ['PlayfairDisplay', 'sans-serif'],
        'Satoshi' : ['Satoshi', 'sans-serif'],
      },
      colors: {
        black: 'var(--black)',
        white: 'var(--white)',
        'white/40': 'var(--white-40)',
        pinky: 'var(--pinky)',
        'btn-bg-header': 'var(--btn-bg-header)',
        'btn-border': 'var(--btn-border)',
      },
      // container: {
      //   center: true,
      //   padding: {
      //     DEFAULT: '1.25rem',
      //     md: '2.5rem',
      //     lg: '5rem',
      //     xl: '6.25vw', 
      //   },
      //   screens: {
      //     md: '1024px',
      //     lg: '1280px',
      //   },
      // },
      screens: {
        // MIN WIDTH
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1440px',
        '2xl': '1536px',
        '3xl': '1920px',
        'xxl': '2560px',
  
        // MAX WIDTN
        'max-xxl': { max: '2559px'},
        'max-xl': { max: '1439px' },
        'max-lg': { max: '1023px' },
        'max-md': { max: '767px' },
        'max-sm': { max: '639px' },
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.heading-h1': addFontVariation(8, '0.9', '400', 2, 'CeraPro, sans-serif', '0em'),
        '.button-try': addFontVariation(1.5, '1.2', '700', 1.5, 'Satoshi, sans-serif', '-3%'),
        '.button-free': addFontVariation(1.25, '1.2', '700', 1.25, 'Satoshi, sans-serif', '-1%'),
        '.button-head': addFontVariation(1, '1', '700', 1, 'Satoshi, sans-serif', '-2%'),
        '.header-version': addFontVariation(0.625, '1', '700', 0.625, 'Satoshi, sans-serif', '-2%'),
        '.hover-text': addFontVariation(0.75, '1', '700', 0.75, 'Satoshi, sans-serif', '-2%'),
        '.footer-big': addFontVariation(1, '1.2', '500', 1, 'Satoshi, sans-serif', '0em'),
        '.footer-small': addFontVariation(0.75, '1.2', '400', 0.75, 'Satoshi, sans-serif', '0em'),
        '.paragraph-p1': addFontVariation(1, '1.2', '500', 1, 'Satoshi, sans-serif', '0em'),
        '.paragraph-h2': addFontVariation(1.25, '1.2', '700', 1.25, 'Satoshi, sans-serif', '-1%'),
        '.heading-h2': addFontVariation(6.25, '0.9', '500', 3, 'Satoshi, sans-serif', '-4%'),
        '.heading-h3': addFontVariation(3, '1', '500', 3, 'Satoshi, sans-serif', '-2%'),
        '.strong-h2': addFontVariation(6.25, '1', '600', 3, 'PlayfairDisplay, sans-serif', '0em'),
        '.strong-h3': addFontVariation(3, '1', '600', 3, 'PlayfairDisplay, sans-serif', '0em'),
        '.extra-h2': addFontVariation(1.25, '1', '500', 1, 'Satoshi, sans-serif', '0em'),
        '.subtitle': addFontVariation(2, '1.2', '700', 2, 'Satoshi, sans-serif', '-2%'),
        '.strong-sub': addFontVariation(2, '1.2', '700', 2, 'PlayfairDisplay, sans-serif', '-2%'),
      };
      addUtilities(newUtilities, ['responsive']);
    },

  ]
}

function addFontVariation(lg, lh, weight, sm, fontFamily, letterSpacing) {
  const maxRes = 1280 / 16;
  const minRes = 375 / 16;
  const currentSize = `calc(${sm}rem + (${
    lg - sm
  }) * ((100vw - ${minRes}rem) / (${maxRes - minRes})))`;
  const maxed = `max(${sm}rem, ${currentSize})`;

  return {
    'font-family': fontFamily,
    'font-size': maxed,
    'line-height': lh,
    'font-weight': weight,
    'letter-spacing': letterSpacing,
    '-webkit-font-smoothing': 'antialiased',
    '-moz-osx-font-smoothing': 'grayscale',
    'font-smooth': 'never',
  };
}

