const base = require('./base');
const merge = require('webpack-merge');
const webpack = require('webpack');

module.exports = merge(base, {
	//for hot reload
	entry: {
		main: [
			'react-hot-loader/patch',
			'./src/index.js'
		]
	},
	devServer: {
		compress: false,
		host: '0.0.0.0',
		port: 8080,
		historyApiFallback: true
	},
	plugins: [new webpack.NamedModulesPlugin()],
	// devtool: 'eval-source-map'
	devtool: 'inline-source-map'
});
