const path = require('path');
const webpack = require('webpack');
const NyanProgressPlugin = require('nyan-progress-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const rootPath = path.join(__dirname, '..');
const prod = process.env.NODE_ENV === 'production';
const dev = !prod;

module.exports = {
	entry: {
		main: './src/app.js',
		react: ['react', 'react-dom'],
		state: ['mobx', 'mobx-react'],
		tp: ['lodash', 'axios', 'react-router']
	},

	output: {
		filename: `[name]${dev ? '' : '.[chunkhash:10]'}.js`,
		path: path.resolve(rootPath, 'dist'),
		publicPath: ''
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							[
								'env',
								{
									targets: {
										// browsers: ['Chrome>=50']
										browsers: ['ie>9']
									},
									modules: false
									// uglify: true
								}
							],
							'react',
							'stage-2'
						],
						plugins: ['transform-decorators-legacy']
					}
				}
			},
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: {
						loader: 'css-loader',
						options: {
							modules: true,
							localIdentName: '[name]__[local]--[hash:base64:5]'
						}
					}
				})
			},
			{
				test: /\.(html)$/,
				use: {
					loader: 'html-loader',
					options: {
						attrs: [':data-src']
					}
				}
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif|woff|woff2|eot|ttf|otf)$/,
				use: {
					loader: 'url-loader',
					options: {
						limit: 8192, //8k
						name: '[name].[ext]',
						outputPath: 'images/'
					}
				}
			}
		]
	},
	plugins: [
		new NyanProgressPlugin(),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(dev ? 'developmentÏ' : 'production')
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: ['tp', 'state', 'react']
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'runtime'
		}),
		new ExtractTextPlugin(`[name]${dev ? '' : '.[contenthash:10]'}.css`),
		new HtmlWebpackPlugin({
			title: 'mobx-react-eyepetizer',
			template: 'src/template/index.ejs',
			filename: 'index.html',
			inject: false
		})
	],
	resolve: {
		alias: {
			containers: rootPath + '/src/containers',
			components: rootPath + '/src/components',
			stores: rootPath + '/src/stores',
			services: rootPath + '/src/services',
			utils: rootPath + '/src/utils'
		}
	}
};
