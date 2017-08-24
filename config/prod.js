const base = require('./base');
const merge = require('webpack-merge');
const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = merge(base, {
	plugins: [
		new CleanWebpackPlugin(['dist'], {
			root: path.resolve(__dirname, '..') //根目录
		}),
		new webpack.HashedModuleIdsPlugin({
			hashFunction: 'sha256',
			hashDigest: 'hex',
			hashDigestLength: 10
		}),
		new webpack.LoaderOptionsPlugin({
			minimize: true,
			debug: false
		}),
		new webpack.optimize.UglifyJsPlugin({
			beautify: false,
			mangle: {
				screw_ie8: true,
				keep_fnames: true
			},
			compress: {
				screw_ie8: true,
				drop_console: true
			},
			comments: false
		})
	]
});
