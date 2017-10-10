var htmlWebpackPlugin = require("html-webpack-plugin");

var path = require('path');
module.exports = {
	entry: path.join(__dirname,'app/js/app.js'),
	output: {
		filename: 'js/[name].bundle.js',
		path: __dirname+'/dest'
	},
	plugins: [
		new htmlWebpackPlugin({
			ilename: './index.html',
			template: 'app/index.html'
		})
	],
    module: {
        loaders: [
            {
                test: /\.html$/,
                exclude: /node_modules/,
                loader: 'html-loader'
            },
            {
            	test: /\.css$/,
            	loader:'style-loader!css-loader'
            },
            {
                test: /\.(png|jpg|woff|woff2|svg|ttf|eot)$/,
                loader: 'url-loader?limit=40000'
            }
        ],
    }
}