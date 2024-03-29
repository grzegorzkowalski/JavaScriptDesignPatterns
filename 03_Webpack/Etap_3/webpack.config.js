const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

const linkToTask = `../../04_Modules/src/index.js`

module.exports = {
    entry: {
        main: path.resolve(__dirname, linkToTask),
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'webpack Boilerplate',
            template: path.resolve(__dirname, './src/index.html'), // template file
            filename: 'index.html', // output file
        }),
        new ESLintPlugin({
            files: 'src/**/*.js',
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
        ],
    },
    mode: 'development',
    devServer: {
        historyApiFallback: true,
        static: {
            directory: path.resolve(__dirname, './dist'),
        },
        open: true,
        compress: true,
        hot: true,
        port: 8080,
    },
}


