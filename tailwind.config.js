/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  theme: {
    extend: {},
    color: {
      red: '#f02828',
      blue: '#419bf9',
      green: '#c8cf2d',
      peach: '#ee6723',
      orange: '#f69833',
      'light-orange': '#fdbd39',
      yellow: '#fecf33',
      gandalf: '#979197',
      teflon: '#554d56',
      clooney: '#c1bec1',
      karl: '#edeced',
      whitey: '#f7f7f7',
      snowman: '#fbfbfb',
      white: '#ffffff'
    },
    fontSize: {
      'large-title': '34px',
      title1: '28px',
      title2: '22px',
      title3: '20px',
      headline: '17px',
      body: '17px',
      callout: '16px',
      subhead: '15px',
      footnote: '13px',
      caption1: '12px',
      caption2: '11px'
    },
    extends: {
      spacing: {
        base: '4px',
        s: '12px',
        m: '16px',
        l: '20px',
        xl: '24px',
        xxl: '64px'
      }
    }
  },
  plugins: [],
}
