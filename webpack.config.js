require("@babel/polyfill");
var path = require('path');
const webpack = require('webpack'); //to access built-in plugins

module.exports = {
    entry: ["@babel/polyfill", "./src/Root.jsx"],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.bundle.js'
    },
    devServer: {
       contentBase: './dist'
    },
    mode: 'development',
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ['babel-loader'] },
            {
                test: /.jsx?$/,
                loaders: ['babel-loader'],
                include: [path.resolve(__dirname, "src")]
            }
        ]
    }
};
