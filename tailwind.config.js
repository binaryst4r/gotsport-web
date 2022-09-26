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
      mono: {
        black: '#000000',
        white: '#ffffff',
        100: '#fafafa',
        200: '#f7f7f7',
        300: '#efefee',
        400: '#d0d0ce',
        500: '#b1b2b3',
        600: '#717171',
        700: '#404040'
      },
      success: '#198623',
      warning: '#c25608',
      error: '#ca364c',
      info: '#177c8f',
      alert: {
        danger: {
          border: '#fdd6d6',
          background: '#fee2e1',
          text: '#813838'
        },
        success: {
          background: '#dbf2e3',
          border: 'none',
          text: '#ffffff'
        }
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
