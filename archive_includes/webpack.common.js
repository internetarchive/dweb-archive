const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const srcPath = path.resolve(__dirname, 'src')
const lessSrcPath = path.join(srcPath, 'less')
const jsSrcPath = path.join(srcPath, 'js')
const buildPath = path.resolve(__dirname, 'build')
const includesPath = path.resolve(__dirname)
const nodeModulesPath = path.resolve(__dirname, 'node_modules')

module.exports = {
  mode: 'development',

  // Define which files we build and serve on the site
  entry: {
    archive: [
      // JS and LESS together since they use the same name, will be split via loaders
      path.join(jsSrcPath, 'archive.js'),
      path.join(lessSrcPath, 'archive.less'),
    ],

    tv: [
      // JS and LESS together since they use the same name, will be split via loaders
      path.join(jsSrcPath, 'tv.js'),
      path.join(lessSrcPath, 'tv.less'),
    ],

    polyfill: path.join(jsSrcPath, 'polyfill.js'),
    catalog:  path.join(jsSrcPath, 'catalog.js'),
    play8:    path.join(jsSrcPath, 'play8.js'),
    playset:  path.join(jsSrcPath, 'playset.js'),
    search:   path.join(jsSrcPath, 'search.js'),
    ThreeD:   path.join(jsSrcPath, 'ThreeD.js'),
    tvsearch: path.join(jsSrcPath, 'tvsearch.js'),
    webamp:   path.join(jsSrcPath, 'webamp.js'),
  },

  // Define where we output the built JS files
  output: {
    // JS subdirectory to allow for future separation of JS and CSS
    filename: 'js/[name].js',
    path: buildPath,
  },

  module: {
    rules: [
      // Use script loader on non-src, non-node module JS, for
      // backwards-compatibility with old code that wasn't written
      // as modules.
      {
        test: /\.js$/,
        include: includesPath,
        exclude: [
          nodeModulesPath,
          srcPath,
        ],
        use: [
          'script-loader',
          {
            loader: 'babel-loader',
            options: {
              babelrc: false,
              plugins: ['transform-class-properties'],
              presets: ['react', ['es2015', { modules: false }]],
            },
          },
        ],
      },

      // Use Babel on all src/ JS
      {
        test: /\.js$/,
        include: srcPath,
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: false,
            plugins: ['transform-class-properties'],
            presets: ['react', 'es2015'],
          },
        },
      },

      // Transform LESS into CSS then save the CSS in a file
      {
        test: /\.less$/,
        loader: [
          {
            loader: 'file-loader',
            options: {
              name: 'css/[name].css',
            },
          },
          'extract-loader',
          {
            loader: 'css-loader',
            options: {
              // Don't try to process/inline assets referenced with url()
              url: false,
            },
          },
          'less-loader',
        ],
      },
    ],
  },

  plugins: [
    // Clean out the build directory each time. This ensures that
    // you don't leave extraneous files from old builds in the directory.
    new CleanWebpackPlugin([buildPath]),
  ],

  // Turn on dev source maps by default
  devtool: 'inline-source-map',
}
