const path = require('path')
const distPath = path.resolve(__dirname, 'client/dist')

module.exports = (env) => {
  return {
    entry: {
      main: './client/main.js'
    },
    output: {
      path: distPath,
      filename: '[name].[hash:5].js'
    },
    devServer: {
      contentBase: distPath,
      port: 3001,
      open: true
    }
  }
}