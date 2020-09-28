module.exports = {
  plugins: {
    autoprefixer: {},
    'postcss-px-to-viewport': {
      viewportWidth: 375,
      unitPrecision: 7,
      unitToConvert: 'px',
      viewportUnit: 'vw',
      fontViewportUnit: 'vw',
      minPixelValue: 1,
      mediaQuery: true,
      replace: true,
      propList: ['*'],
      exclude: [/node_modules/],
      selectorBlackList: ['wrap'],
      landscape: false
    }
  }
}
