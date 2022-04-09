/* eslint-disable no-undef */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require('tailwindcss/defaultTheme');

const screenSizes = {
  'full-screen-w': '100vw',
  'half-screen-w': '50vw',
  'quarter-screen-w': '25vw',
  'full-screen-h': '100vh',
  'half-screen-h': '50vh',
  'quarter-screen-h': '25vh',
};

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  darkMode: 'media',
  mode: 'jit',
  content: [
    './src/**/*.{ts,tsx,mdx,html,txt,css,js}',
    './src/.storybook/**/*.{ts,tsx,mdx,html,txt,css}',
  ],
  theme: {
    // Utilizing CSS properties here (screens) caused
    // the responsive tailwind classes to simply fail.
    // @todo: Make screens work with css variables.
    // screens: {
    //   xs: 'var(--screen-xs)',
    //   sm: 'var(--screen-sm)',
    //   md: 'var(--screen-md)',
    //   lg: 'var(--screen-lg)',
    //   xl: 'var(--screen-xl)',
    //   xxl: 'var(--screen-xxl)',
    //   xxxl: 'var(--screen-xxxl)',
    // },
    screens: {
      xs: '480px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xxl: '1440px',
      xxxl: '2180px',
      dark: { raw: '(prefers-color-scheme: light)' },
    },
    colors: {
      // Custom Brand colors can be added/edited here.
      nubs: {
        primary: 'var(--nubs-primary)',
        secondary: 'var(--nubs-secondary)',
        tertiary: 'var(--nubs-tertiary)',
        quaternary: 'var(--nubs-quaternary)',
        quinary: 'var(--nubs-quinary)',
        senary: 'var(--nubs-senary)',
        septenary: 'var(--nubs-septenary)',
        octonary: 'var(--nubs-octonary)',
        nonary: 'var(--nubs-nonary)',
        denary: 'var(--nubs-denary)',
      },
      ripple: {
        'surface': {
          'position': 'relative',
          'overflow': 'hidden',
          'display': 'inline-block',
          'vertical-align': 'bottom',
        },
        'surface-unbound': {
          overflow: 'visible',
        },
        'neutral': {
          'background-image':
            'radial-gradient(circle, rgba(255, 255, 255, 0.2) 0, rgba(255, 255, 255, 0.3) 40%, rgba(255, 255, 255, 0.4) 50%, rgba(255, 255, 255, 0.5) 60%, rgba(255, 255, 255, 0) 70%)',
        },
        'wave': {
          'background-image':
            'radial-gradient(circle, rgba(255, 255, 255, 0.2) 0, rgba(255, 255, 255, 0.3) 40%, rgba(255, 255, 255, 0.4) 50%, rgba(255, 255, 255, 0.5) 60%, rgba(255, 255, 255, 0) 70%);',
        },
      },
      // Custom Neutral colors can be added/edited here.
      neutral: {
        transparent: 'var(--neutral-transparent)',
        white: 'var(--neutral-white)',
        grayLight: 'var(--neutral-grayLight)',
        grayMedium: 'var(--neutral-grayMedium)',
        grayDark: 'var(--neutral-grayDark)',
        black: 'var(--neutral-black)',
      },
      // These are used for system alerts and should not be removed.
      ui: {
        error: 'var(--ui-errorBackground)',
        warning: 'var(--ui-warningBackground)',
        info: 'var(--ui-infoBackground)',
        infoBorder: 'var(--ui-infoBorder)',
        success: 'var(--ui-successBackground)',
        errorText: 'var(--ui-errorText)',
        errorBorder: 'var(--ui-errorBorder)',
        warningText: 'var(--ui-warningText)',
        warningBorder: 'var(--ui-warningBorder)',
        infoText: 'var(--ui-infoText)',
        successText: 'var(--ui-successText)',
        successBorder: 'var(--ui-successBorder)',
      },
      // Demo styles specific to Storybook implementation.
      // Do not remove.
      demo: {
        white: 'var(--demo-white)',
        black: 'var(--demo-black)',
        darkBlue: 'var(--demo-darkBlue)',
        mediumBlue: 'var(--demo-mediumBlue)',
        lightBlue: 'var(--demo-lightBlue)',
        darkGray: 'var(--demo-darkGray)',
        mediumGray: 'var(--demo-mediumGray)',
        lightGray: 'var(--demo-lightGray)',
      },
      // The defaults are completely overwritten, so manually including
      // sets from Tailwind CSS we want to use.
      // You may remove any/all of these items assuming you have removed
      // or changed any references above that depend on these.
      gray: {
        50: 'var(--gray-50)',
        100: 'var(--gray-100)',
        200: 'var(--gray-200)',
        300: 'var(--gray-300)',
        400: 'var(--gray-400)',
        500: 'var(--gray-500)',
        600: 'var(--gray-600)',
        700: 'var(--gray-700)',
        800: 'var(--gray-800)',
        900: 'var(--gray-900)',
      },
      blue: {
        50: 'var(--blue-50)',
        100: 'var(--blue-100)',
        200: 'var(--blue-200)',
        300: 'var(--blue-300)',
        400: 'var(--blue-400)',
        500: 'var(--blue-500)',
        600: 'var(--blue-600)',
        700: 'var(--blue-700)',
        800: 'var(--blue-800)',
        900: 'var(--blue-900)',
      },
      red: {
        50: 'var(--red-50)',
        100: 'var(--red-100)',
        200: 'var(--red-200)',
        300: 'var(--red-300)',
        400: 'var(--red-400)',
        500: 'var(--red-500)',
        600: 'var(--red-600)',
        700: 'var(--red-700)',
        800: 'var(--red-800)',
        900: 'var(--red-900)',
      },
      yellow: {
        50: 'var(--yellow-50)',
        100: 'var(--yellow-100)',
        200: 'var(--yellow-200)',
        300: 'var(--yellow-300)',
        400: 'var(--yellow-400)',
        500: 'var(--yellow-500)',
        600: 'var(--yellow-600)',
        700: 'var(--yellow-700)',
        800: 'var(--yellow-800)',
        900: 'var(--yellow-900)',
      },
      green: {
        50: 'var(--green-50)',
        100: 'var(--green-100)',
        200: 'var(--green-200)',
        300: 'var(--green-300)',
        400: 'var(--green-400)',
        500: 'var(--green-500)',
        600: 'var(--green-600)',
        700: 'var(--green-700)',
        800: 'var(--green-800)',
        900: 'var(--green-900)',
      },
      indigo: {
        50: 'var(--red-50)',
        100: 'var(--red-100)',
        200: 'var(--red-200)',
        300: 'var(--red-300)',
        400: 'var(--red-400)',
        500: 'var(--red-500)',
        600: 'var(--red-600)',
        700: 'var(--red-700)',
        800: 'var(--red-800)',
        900: 'var(--red-900)',
      },
      purple: {
        50: 'var(--purple-50)',
        100: 'var(--purple-100)',
        200: 'var(--purple-200)',
        300: 'var(--purple-300)',
        400: 'var(--purple-400)',
        500: 'var(--purple-500)',
        600: 'var(--purple-600)',
        700: 'var(--purple-700)',
        800: 'var(--purple-800)',
        900: 'var(--purple-900)',
      },
      pink: {
        50: 'var(--pink-50)',
        100: 'var(--pink-100)',
        200: 'var(--pink-200)',
        300: 'var(--pink-300)',
        400: 'var(--pink-400)',
        500: 'var(--pink-500)',
        600: 'var(--pink-600)',
        700: 'var(--pink-700)',
        800: 'var(--pink-800)',
        900: 'var(--pink-900)',
      },
    },
    fontSize: {
      'xs': ['var(--fs-xs)', { lineHeight: 'var(--lh-xs)' }],
      'sm': ['var(--fs-sm)', { lineHeight: 'var(--lh-sm)' }],
      'base': ['var(--fs-base)', { lineHeight: 'var(--lh-base)' }],
      'lg': ['var(--fs-lg)', { lineHeight: 'var(--lh-lg)' }],
      'xl': ['var(--fs-xl)', { lineHeight: 'var(--lh-xl)' }],
      '2xl': ['var(--fs-2xl)', { lineHeight: 'var(--lh-2xl)' }],
      '3xl': ['var(--fs-3xl)', { lineHeight: 'var(--lh-3xl)' }],
      '4xl': ['var(--fs-4xl)', { lineHeight: 'var(--lh-4xl)' }],
      '5xl': ['var(--fs-5xl)', { lineHeight: 'var(--lh-5xl)' }],
      '6xl': ['var(--fs-6xl)', { lineHeight: 'var(--lh-6xl)' }],
      '7xl': ['var(--fs-7xl)', { lineHeight: 'var(--lh-7xl)' }],
      '8xl': ['var(--fs-8xl)', { lineHeight: 'var(--lh-8xl)' }],
      '9xl': ['var(--fs-9xl)', { lineHeight: 'var(--lh-9lx)' }],
    },
    fontWeight: {
      thin: 'var(--fw-extralight)',
      extralight: 'var(--fw-thin)',
      light: 'var(--fw-light)',
      normal: 'var(--fw-normal)',
      medium: 'var(--fw-medium)',
      semibold: 'var(--fw-semibold)',
      bold: 'var(--fw-bold)',
      extrabold: 'var(--fw-extrabold)',
      black: 'var(--fw-black)',
    },
    extend: {
      boxShadow: {
        'lg': '0px 8px 32px rgba(0, 0, 0, 0.06)',
        'focus': '0 0 0 1px rgb(33, 74, 222)',
        'focus-2': '0 0 0 2px rgb(33, 74, 222)',
        'focus-error': '0 0 0 1px rgb(225, 9, 9)',
        'focus-light': '0 1px 3px 0 rgb(0 0 0 / 10%)',
      },
      gradient: {
        gradientBlack: 'var(--radial-gradient-black)',
        gradientWhite: 'var(--radial-gradient-white)',
        gradientDark: 'var(--radial-gradient-dark)',
        gradientLight: 'var(--radial-gradient-light)',
        gradientWarning: 'var(--radial-gradient-warning)',
        gradientInfo: 'var(--radial-gradient-info)',
        gradientSuccess: 'var(--radial-gradient-success)',
        gradientSecondary: 'var(--radial-gradient-secondary)',
      },
      gridTemplateColumns: {
        '1-2': '4fr 8fr',
        '2-1': '8fr 4fr',
      },
      fontFamily: {
        display: ['Manrope', 'sans-serif', ...defaultTheme.fontFamily.sans],
        body: ['"Open Sans"', 'sans-serif', ...defaultTheme.fontFamily.serif],
        header: ['Overpass', 'sans-serif', ...defaultTheme.fontFamily.sans],
        urbanist: ['Urbanist', 'sans-serif', ...defaultTheme.fontFamily.sans],
      },
      height: {
        ...screenSizes,
      },
      maxHeight: {
        ...screenSizes,
      },
      width: {
        ...screenSizes,
      },
      maxWidth: {
        ...screenSizes,
      },
      opacity: {
        40: '0.4',
      },
    },
  },
  plugins: [],
};
