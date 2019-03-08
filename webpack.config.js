const webpack = require('webpack');

module.exports = {
	entry: './src/bemClass.js',
	target: 'node',
	output: {
		library: 'bemclass',
		libraryTarget: 'umd',
	},
	module: {
		rules: [{
			exclude: /node_modules/,
			use: {
				loader: "babel-loader"
			}
		}]
	}
};