module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        proxima: [ 'proxima-nova', 'sans-serif']
      }
    },
    colors: {
      transparent: 'transparent',
      primary: '#177c8f',
      secondary: '#2c363c',
      tertiary: '#36444b',
      blue: '#192F63',
      "lightest-blue": '#BCD8FF',
      "light-blue": '#238CE0',
      "dark-blue": '#02234E',
      green: '#70AF5F',
      "light-green": '#C3DEBC',
      salmon: '#DB6B6B',
      gold: '#D5BA10',
      yellow: '#F5DC3D',
      "blue-gray": '#D9E1E7',
      "dark-blue-gray": '#99B2C6',
      mono: {
        black: '#000000',
        white: '#ffffff',
        100: '#fafafa',
        200: '#f7f7f7',
        300: '#EDEEF2',
        400: '#d0d0ce',
        500: '#b1b2b3',
        600: '#717171',
        700: '#404040'
      },
      success: '#198623',
      warning: '#c25608',
      error: '#C40000',
      info: '#177c8f',
      badge: {
        primary: {
          text: '#ffffff',
          bg: '#70AF5F'
        },
        secondary: {
          text: '#5C89C7',
          bg: '#BCD8FF'
        },

        gray: {
          text: '#ffffff',
          bg: '#8B8B8B'
        },
        muted: {
          text: '#8B8B8B',
          bg: '#E0E0E0'
        },
        danger: {
          text: '#ffffff',
          bg: '#C4000'
        }
      },
      alert: {
        danger: {
          background: '#FEF2F2',
          text: '#991B1B'
        },
        success: {
          background: '#dbf2e3',
          text: '#70AF5F'
        },
        warning: {
          background: '#FEFCE8',
          text: '#A4670F'
        },
        info: {
          background: '#EFF6FF',
          text: '#1D4ED8'
        },
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
