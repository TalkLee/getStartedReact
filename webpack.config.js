module.exports = {
    entry: "./entry.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [,
            { test: /\.js$/, exclude: /node_modules|bower_components/, loader: 'babel', query: { cacheDirectory: true, presets: ['es2015', 'stage-2'] } }
        ],
        babel: {
            presets: ['es2015']
        }
    }
};