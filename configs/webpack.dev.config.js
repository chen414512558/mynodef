const HtmlWebackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    output: {
        publicPath: '/dist/'
    },
    plugins: [
        new HtmlWebackPlugin()
    ]
}