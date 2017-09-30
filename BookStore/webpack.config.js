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
                loader: 'html-loader'
            }
        ],
    }
}