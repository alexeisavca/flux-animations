var path = require('path');
module.exports = {
    entry: {
        main: "./entry.js"
    },
    output: {
        path: './',
        filename: "index.js"
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'es6-loader' }
        ]
    }
};