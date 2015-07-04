var path = require('path');
module.exports = {
    entry: {
        main: "./index.jsx"
    },
    output: {
        path: './',
        filename: "index.js"
    },
    module: {
        loaders: [
            { test: /\.es6$/, loader: 'es6-loader' },
            { test: /\.jsx?$/, loaders: ['jsx?harmony'] }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.es6', '.jsx']
    }
};