const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

var plugins = [];

if (process.env.NODE_ENV === 'production') plugins.push(new UglifyJsPlugin());

module.exports = {
    entry: './src/js/app.js',
    devtool: 'inline-source-map',
    stats: {
        children: false,
    },
    resolve: {
        alias: {
            app_less: path.resolve(__dirname, 'src/less/app.less'),
        }
    },
    module: {
        rules: [
            {
                // That will prevent lodash from becoming global! Important with webpack
                // https://github.com/webpack/webpack/issues/3017#issuecomment-285955859 (comment by the lodash dev)
                parser: {
                    amd: false
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        js: 'babel-loader'
                    }
                }
            },
            {
                test: /\.js$/,
                include: [
                    path.resolve(__dirname, "src/js"),
                ],
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            },
        ]
    },
    plugins,
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'public'),
    }
};