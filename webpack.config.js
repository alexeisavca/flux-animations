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
            { test: /\.jsx?$/, loaders: ['jsx?harmony'] }
            {
                test: /\.es6$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel'
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.es6', '.jsx']
    }
};