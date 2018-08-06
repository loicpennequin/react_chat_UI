const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const GoogleFontsPlugin = require('google-fonts-plugin').default;
const webpack = require('webpack');
const sass = require('node-sass');

module.exports = env => ({
	entry: {
		app: './src/index.js'
	},
	mode: env.NODE_ENV,
	devtool: 'inline-source-map',
	devServer: {
		contentBase: './dist',
		port: 3000,
		hot: true,
		historyApiFallback: true
	},
	module: {
		rules: [
			//CSS Modules
			{
				test: /\.sass$/,
				exclude: /app.sass/,
				use: [
					{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader',
						options: {
							sourceMap: true,
							modules: true,
							localIdentName: '[name]-[local]--[hash:base64:5]'
						}
					},
					{
						loader: 'sass-loader'
					}
				]
			},
			//GLobal Styles
			{
				test: /app.sass/,
				use: [
					{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader'
					},
					{
						loader: 'sass-loader'
					}
				]
			},
			//JS Files
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						babelrc: true,
						cacheDirectory: true
					}
				}
			},
			//i18n
			{
				test: /locales/,
				loader: '@alienfast/i18next-loader'
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin(['dist']),
		new HtmlWebpackPlugin({
			title: 'Infinity React',
			template: 'src/index.html'
		}),
		new webpack.HotModuleReplacementPlugin(),
		new GoogleFontsPlugin('google-fonts.config.json')
	],
	output: {
		filename: '[name].[hash].js',
		chunkFilename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	optimization: {
		runtimeChunk: 'single',
		splitChunks: {
			cacheGroups: {
				vendor: {
					test: /[\\/]node_modules[\\/]/,
					name: 'vendors',
					chunks: 'all'
				}
			}
		}
	}
});
