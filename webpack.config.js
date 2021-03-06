const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
mode: 'development',
entry: './src/index.js',
output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
},
plugins: [
    new HtmlWebpackPlugin({
    template: './src/index.html'
    }),
],
devServer: {
    contentBase: './dist',
},
module: {
    rules: [
    {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
    },
    ],
},
};