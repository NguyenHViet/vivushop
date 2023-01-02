const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
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
  plugins: [
    plugin(function({ addBase, addUtilities, addComponents, theme }) {
      // Add your custom styles here
      addComponents({
        '.btn': {
          fontSize: theme('fontSize.headline'),
          fontWeight: theme('fontWeight.semibold'),
          lineHeight: '22px',
          borderRadius: '8px',
          width: theme('width.full'),
          margin: '16px',
          padding: theme('spacing.m'),
          display: 'flex',
          justifyContent: 'center'
        },
        '.list-btn:last-child':{
          marginBottom: theme('spacing.m')
        },
        '.btn-primary': {
          color: theme('colors.white'),
          backgroundColor: theme('colors.peach')
        },
        '.btn-normal': {
          color: theme('colors.peach'),
          backgroundColor: theme('colors.karl')
        },
        '.large-title': {
          fontSize: theme('fontSize.large-title'),
          fontWeight: theme('fontWeight.bold'),
          lineHeight: '42px',
          padding: theme('spacing.m')
        }
      });
    })
  ],
}
