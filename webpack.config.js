const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		'index': './src/index.js'
	},
	output: {
		path: __dirname + '/dist',
		filename: 'build.js'
	},
	module: {
		loaders: [{
			test: /\.jsx$/,
			loader: 'babel-loader',
			exclude: /node_modules/,
			query: {
				presets: ['es2015', 'react']
			}
		}]
	},
	plugins: [
		new htmlWebpackPlugin({
			template:'./index.html'
		})
	]
}