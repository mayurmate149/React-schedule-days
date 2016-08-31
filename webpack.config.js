var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var BUILD_DIR = path.resolve(__dirname, './target');
var APP_DIR = path.resolve(__dirname, './assets/javascript/components/');

var config = {
    devtool: 'cheap-eval-source-map',
    entry: [
        APP_DIR + '/index.jsx',
    ],
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {

                test: /\.jsx?$|\.js?$/,
                loader: 'babel',
                include: APP_DIR,
                exclude: /bundle\.js$/
            },
            {
                test: /\.css$/,
                loaders: ['style', 'css']
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false,
            },
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ]
};

module.exports = config;