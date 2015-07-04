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
            { test: /\.es6$/, loader: 'es6-loader' }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.es6']
    }
};