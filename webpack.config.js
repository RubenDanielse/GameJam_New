var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: './src/script.es6',
    output: {
        path: __dirname + '/client/dist',
        filename: 'script.js'
    },
    module: {
        loaders: [{
            test: /\.es6$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            options: {
                presets: ['env']
            }
        }]
    },
    plugins: [
        // new BrowserSyncPlugin({
        // host: 'localhost',
        // port: 3000,
        // files: ['*.html', 'css/*.css'],
        // server: { baseDir: ['./'] }
        // }),
        // new UglifyJSPlugin({
        //     compress: {
        //         warnings: false
        //     }
        // })
    ]
};