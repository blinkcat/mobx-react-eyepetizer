const base = require('./base');
const merge = require('webpack-merge');
const webpack = require('webpack');

module.exports = merge(base, {
	//for hot reload
	entry: {
		main: ['react-hot-loader/patch', './src/app.dev.js']
	},
	devServer: {
		hot: true,
		compress: false,
		host: '0.0.0.0',
		port: 8080,
		historyApiFallback: true
	},
	plugins: [new webpack.NamedModulesPlugin(), new webpack.HotModuleReplacementPlugin()],
	devtool: 'eval-source-map'
});
