var path = require('path');
module.exports = {
    entry: {
        main: "./index.es6"
    },
    output: {
        path: './',
        filename: "index.js"
    },
    module: {
        loaders: [
            {
                test: /\.es6$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel'
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.es6']
    }
};