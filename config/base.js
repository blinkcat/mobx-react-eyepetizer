const path = require('path');
const webpack = require('webpack');
const NyanProgressPlugin = require('nyan-progress-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const prod = process.env.NODE_ENV === 'production';
const dev = !prod;
const extractLESS = new ExtractTextPlugin(`global${dev ? '' : '.[contenthash:10]'}.css`);
const extractCSS = new ExtractTextPlugin(`[name]${dev ? '' : '.[contenthash:10]'}.css`);
const HtmlWebpackPlugin = require('html-webpack-plugin');
const rootPath = path.join(__dirname, '..');

module.exports = {
	entry: {
		main: './src/index.js',
		react: ['react', 'react-dom'],
		state: ['mobx', 'mobx-react'],
		tp: ['lodash', 'axios', 'react-router-dom', 'classnames']
	},

	output: {
		filename: `[name]${dev ? '' : '.[chunkhash:10]'}.js`,
		path: path.resolve(rootPath, 'dist'),
		publicPath: '/'
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
										browsers: ['ie>=10']
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
				test: /\.less$/,
				use: extractLESS.extract({
					fallback: 'style-loader',
					use: [
						{
							loader: 'css-loader',
							options: {
								sourceMap: dev
							}
						},
						{
							loader: 'postcss-loader',
							options: {
								sourceMap: dev,
								config: {
									path: `${__dirname}/postcss.config.js`
								}
							}
						},
						{
							loader: 'less-loader',
							options: {
								sourceMap: dev
							}
						}
					]
				})
			},
			{
				test: /\.css$/,
				include: path.resolve(rootPath, 'src'),
				use: extractCSS.extract({
					fallback: 'style-loader',
					use: [
						{
							loader: 'css-loader',
							options: {
								modules: true,
								localIdentName: '[name]-[hash:base64:5]',
								sourceMap: dev,
								importLoaders: 1
							}
						},
						{
							loader: 'postcss-loader',
							options: {
								sourceMap: dev,
								config: {
									path: `${__dirname}/postcss.config.js`
								}
							}
						}
					]
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
				test: /\.(png|svg|jpg|jpeg|gif)$/,
				use: {
					loader: 'url-loader',
					options: {
						limit: 8192, //8k
						name: '[name].[ext]',
						outputPath: 'images/'
					}
				}
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				use: {
					loader: 'url-loader',
					options: {
						limit: 8192, //8k
						name: '[name].[ext]',
						outputPath: 'fonts/'
					}
				}
			}
		]
	},
	plugins: [
		new NyanProgressPlugin(),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(dev ? 'development' : 'production')
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: ['tp', 'state', 'react']
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'runtime'
		}),
		// new ExtractTextPlugin(`[name]${dev ? '' : '.[contenthash:10]'}.css`),
		extractLESS,
		extractCSS,
		new HtmlWebpackPlugin({
			title: 'mobx-react-eyepetizer',
			template: 'src/template/index.ejs',
			filename: 'index.html',
			inject: false
		})
	],
	resolve: {
		extensions: ['.js', '.json', '.jsx'],
		alias: {
			Containers: path.resolve(rootPath, 'src/containers'),
			Components: path.resolve(rootPath, 'src/components'),
			Stores: path.resolve(rootPath, 'src/stores'),
			Services: path.resolve(rootPath, 'src/services'),
			Utils: path.resolve(rootPath, 'src/utils'),
			Less: path.resolve(rootPath, 'src/less')
		}
	}
};
