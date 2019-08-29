const path = require('path');

const main = {
    mode: 'development',
    target: 'electron-main',
    entry: path.join(__dirname, 'src', 'index'),
    output: {
        filename: 'index.ts',
        path: path.resolve(__dirname, 'dist')
    },
    node: {
        __dirname: false,
        __filename: false
    },
    module: {
        rules: [{
            test: /.ts?$/,
            include: [
                path.resolve(__dirname, 'src'),
            ],
            exclude: [
                path.resolve(__dirname, 'node_modules'),
            ],
            loader: 'ts-loader',
        }]
    },
    resolve: {
        extensions: ['.js', '.ts']
    },
};

const renderer = {
    mode: 'development',
    target: 'electron-renderer',
    entry: path.join(__dirname, 'src', 'renderer', 'index'),
    output: {
        filename: 'index.ts',
        path: path.resolve(__dirname, 'dist', 'renderer')
    },
    resolve: {
        extensions: ['.json', '.js', '.jsx', '.css', '.ts', '.tsx']
    },
    module: {
        rules: [{
            test: /\.(tsx|ts)$/,
            use: [
                'ts-loader'
            ],
            include: [
                path.resolve(__dirname, 'src'),
                path.resolve(__dirname, 'node_modules'),
            ],
        }]
    },
};

module.exports = [
    main, renderer
];