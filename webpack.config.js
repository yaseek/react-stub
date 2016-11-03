const path = require('path')

const webpack = require('webpack')

var indexHtml = path.join(__dirname, "assets", "index.html");

var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: [
        path.join(__dirname, "app/index.js"),
    ],
    output: {
        path: 'build',
        publicPath: "/assets/",
        filename: "app.js"
    },
    plugins: [
        new ExtractTextPlugin('./css/app.css'),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify("production")
        })
    ],
    module: {
        loaders: [
            //{ test: /\.css$/, loader: "style!css" },
            //{test: /\.jsx$/, loader: 'jsx-loader'},

            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel', // 'babel-loader' is also a valid name to reference
                query: {
                    presets: [
                        'es2015',
                        'react',
                        'stage-0'
                    ]
                }
            },
            {
                test: /\.ya?ml$/,
                loader: 'yml'
            },
            {
                test: /\.less$/, 
                loader: ExtractTextPlugin.extract('style', 'css!less')
                //loader: "style!css!less"
            },
            //{ test: /^bootstrap\.config\.js$/, loader: 'bootstrap-webpack' },


            { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,   loader: "url?limit=10000&minetype=application/font-woff" },
            { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,   loader: "url?limit=10000&minetype=application/font-woff2" },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&minetype=application/octet-stream" },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,    loader: "file" },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&minetype=image/svg+xml" }
        ]
    }
};