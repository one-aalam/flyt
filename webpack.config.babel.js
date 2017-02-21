var path = require('path');

export default () => (
    {
        entry: './src/index.js',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'flyt.js',
            libraryTarget: 'umd',
            library: 'flyt',
            umdNamedDefine: true
        },
        module: {
            rules: [
                {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
            ]
        },
    }
);