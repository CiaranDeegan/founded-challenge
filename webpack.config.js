module.exports = {
    entry: './public/js/main.jsx',
    output: {
        path: __dirname + '/public/js',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: '/node_modules/',
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['react']
                    }
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader',
            },
            {
                test: /\.css$/,
                loader: 'css-loader',
                query: {
                    modules: true,
                    localIdentName: '[name]__[local]___[hash:base64:5]'
                }
            }
        ]
    },
    mode: 'development',
    watch: true
}