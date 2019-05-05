const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
    entry: __dirname + '/archive.js',
    module: {
            rules: [
                {
                    test: /\.js[x]*$/,
                    exclude: /(node_modules\/[a-z]|@[a-hj-z]|bower_components)/, //TODO-IAUX only trying to not-exclude @internetarchive
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-react', '@babel/preset-env'],
                        }
                    }
                }
            ]
    },
    node: {
        //I copied this section from someone else's version that worked for WebTorrent, definately need fs, unclear if need others.
        //global: true,
        crypto: 'empty',
        fs: 'empty',
        process: true,
        module: false,
        clearImmediate: false,
        setImmediate: false,
        console: false
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                uglifyOptions: {
                    compress: {
                        unused: false,
                        collapse_vars: false // debug has a problem in production without this.
                    }

                    //compress: false  or alternatively remove compression, it only makes about a 5% difference
                }
            })
        ]
    },
    output: {
        filename: 'dweb-archive-bundle.js',
        path: __dirname + '/dist'
    },
    //plugins: [HTMLWebpackPluginConfig]

    plugins: [
        new CopyWebpackPlugin(
            [
                { from: 'archive.html', to: './' },
                { from: 'archivesw.html', to: './' },
                { from: 'bootloader.html', to: './'},
                { from: 'dweb-archive-styles.css', to: './'},
                { from: 'favicon.ico', to: './'},
                { from: 'images/', to: 'images/'},
                { from: 'includes/fonts/', to: 'includes/fonts'},
                { from: 'includes/jw/', to: 'includes/jw'},
                { from: 'includes/archive*css', to: './'},
                { from: 'includes/.+[css|gif]', to: './'},
                { from: 'includes/archive.*js', to: './'},
                { from: 'includes/archive.*js.map', to: './'},
                { from: 'includes/bootstrap.*js', to: './'},
                { from: 'includes/jquery*', to: './'},
                { from: 'includes/node_modules_dist', to: 'includes/node_modules'} // Note in node_modules need react/dist/react.js
            ],
            { }
        )
    ],
    resolve: {
        extensions: ['.js', '.jsx']
    }
};
