const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPiugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',

    entry: { main: './src/pages/index.js' },
     output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
        publicPath: '',
    },
   
    devServer: {
        static: path.resolve(__dirname, 'dist'),
        open: true,
        compress: true,
        port: 8080,
    },
    module: {
        rules: [  
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: '/node_modules/'
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPiugin.loader, {
                    loader: 'css-loader',
                    options: { importLoaders: 1},
                }, 'postcss-loader'],
                
            },
            {
                test: /\.(png|svg|jpg)$/,
                type: 'asset/resource',
                generator:{

                 filename: 'images/[name].[hash][ext]',
                }
            },
            {
                test: /\.(woff|woff2)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[name].[hash][ext]'
                }
            },
        ]
    },
    plugins: [
       new CleanWebpackPlugin(),
       new HtmlWebpackPlugin( {
        template: './src/index.html'
        }),
       new MiniCssExtractPiugin()
    ]
   
}
   // указали первое место, куда заглянет webpack, — файл index.js в папке src