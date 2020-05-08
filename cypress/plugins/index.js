const webpack = require('webpack');
const webpackPreprocessor = require('@cypress/webpack-preprocessor');

module.exports = on => {
    const options = {
        webpackOptions: {
            module: {
                rules: [
                    {
                        test: /\.(js|jsx)$/,
                        exclude: /node_modules/,
                        loader: 'babel-loader',
                        options: {
                            plugins: ['@babel/plugin-syntax-dynamic-import'],
                        },
                    },
                ],
            },
            plugins: [new webpack.optimize.LimitChunkCountPlugin({ maxChunks: 1 })],
        },
        watchOptions: {},
    };
    on('file:preprocessor', webpackPreprocessor(options));
};
