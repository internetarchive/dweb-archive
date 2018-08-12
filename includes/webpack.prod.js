/* eslint-disable import/no-unresolved */

const merge = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge.smart(common, {
  mode: 'production',

  output: {
    // Use minified name
    filename: 'js/[name].min.js',
  },

  module: {
    rules: [
      {
        test: /\.less$/,
        loader: [
          {
            loader: 'file-loader',
            options: {
              // Use minified name
              name: 'css/[name].min.css',
            },
          },
          'extract-loader',
          {
            loader: 'css-loader',
            options: {
              // Minify CSS
              minimize: true,
              // Don't try to process/inline assets referenced with url()
              url: false,
            },
          },
          'less-loader',
        ],
      },
    ],
  },

  // Switch to production-friendly source maps
  devtool: 'source-map',
})
