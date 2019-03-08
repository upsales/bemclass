const webpack = require('webpack');

module.exports = {
	entry: './src/bemClass.js',
	module: {
		rules: [{
			exclude: /node_modules/,
			use: {
				loader: "babel-loader"
			}
		}]
	}
};