const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
    entry: __dirname + '/archive.js',
    module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: 'babel-loader'
                        //options: {
                        //    presets: ['@babel/preset-env']
                        //}
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
                { from: 'includes/jquery.*js', to: './'},
                { from: 'includes/node_modules_dist', to: 'includes/node_modules'} // Note in node_modules need react/dist/react.js
            ],
            { }
        )
    ]
};
