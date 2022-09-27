const path = require('path');

module.exports = {
    entry: { main: './src/pages/index.js' },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
            publicPath: ''
      },
    mode: 'development',
    devServer: {
        static: path.resolve(__dirname, './src'),
        compress: true,
        port: 8080,  
        open: true 
    }
}