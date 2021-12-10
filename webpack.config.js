const path = require('path')
//node
const nodeExternals = require('webpack-node-externals')
//nodemon
const NodemonPlugin = require('nodemon-webpack-plugin')
//variables de entorno
const Dotenv = require('dotenv-webpack')


/** @type {import('webpack').Configuration} */

module.exports = {
    name: 'express-server',
    entry: './src/index.ts',
    target: 'node',
    externals: [ nodeExternals()],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
        clean: true
    },
    resolve: {
        extensions: ['.ts','.js']
    },
    module: {
        rules: [
             //babel
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            //typescript
            {
                test: /\.ts$/,
                use: [
                    'ts-loader'
                ]
            }
        ]
    },
    plugins: [
        new NodemonPlugin({
            script: './dist/index.js',
            watch: path.resolve('./dist')
        }),
        new Dotenv()
    ]
}