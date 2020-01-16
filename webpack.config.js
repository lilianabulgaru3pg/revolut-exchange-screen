const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: __dirname + "/src/index.js",
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ["babel-loader", "eslint-loader"],
                exclude: [
                    /node_modules/
                ]
            },
            {
                test: /\.html$/,
                use: [{ loader: "html-loader", options: { minimize: true } }]
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + "/src/public/index.html",
            inject: 'body'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new CleanWebpackPlugin()
    ],
    devtool: "inline-source-map",
    devServer: {
        contentBase: './src/public',
        port: 7700,
        historyApiFallback: true,
        hot: true
    }
};