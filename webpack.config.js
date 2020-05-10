const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const VENDOR_LIBS = [
    'axios',
    'bootstrap',
    // 'font-awesome',
    'jquery',
    'react',
    'react-dom',
    'react-redux',
    'react-router-dom',
    'redux',
    'redux-thunk'
]

/*********************************
* Module
*********************************/
const _module = {
    rules: [
        {
            use: 'babel-loader',
            test: /\.js$/,
            exclude: '/node_modules/'
        },
        {
            use: ['style-loader', 'css-loader'],
            test: /\.css$/
        },
        {
            loader: 'file-loader',
            test: /\.(jpe|jpg|gif|png|woff|woff2|eot|ttf|svg|wav|mp3|ico)(\?.*$|$)/
        }
    ],
}

/*********************************
* Output
*********************************/
const output = {
    path: path.join(__dirname, 'dist'),
    chunkFilename: '[name].[chunkhash].bundle.js',
}

/*********************************
* Entry
*********************************/
const entry = {
    bundle: './src/index.js',
    vendor: VENDOR_LIBS
};

/*********************************
* Plugins
*********************************/
const plugins = [
    new webpack.ProvidePlugin({
        '$': 'jQuery',
        'jQuery': 'jquery',
        'window.$': 'jquery',
        'window.jQuery': 'jquery'
    }),
    new HtmlWebpackPlugin({
        template: 'src/index.html'
    })
];

/*********************************
* Optimization
*********************************/
const optimization = {
    splitChunks: {
        cacheGroups: {
            bundle: {
                test: /[\\/]node_modules[\\/]/,
                name: 'vendor',
                enforce: true,
                chunks: 'all'
            }
        }
    }, 
    runtimeChunk: { name: "manifest" } // chỉ update runtime bundle.js
};

module.exports = {
    entry: entry,
    output: output,
    module: _module,
    plugins: plugins,
    optimization: optimization
}