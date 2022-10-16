const path = require('path'); //lib que auxilia o path do projeto
const HtmlWebPackPlugin = require('html-webpack-plugin');

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
    mode: isDevelopment ? 'development' : 'production',
    devtool: isDevelopment ? 'eval-source-map' : 'source-map',
    entry: path.resolve(__dirname, 'src', 'index.jsx'), //arquivo principal do projeto
    output: {
        path: path.resolve(__dirname, 'dist'), //qual a pasta será o output
        filename: 'bundle.js' //nome do arquivo de output
    },
    resolve: {
        extensions: ['.js','.jsx'] //quais extensões o webpack mapeará
    },
    devServer: {
        static: path.resolve(__dirname, 'public')
    },
    plugins: [
       new HtmlWebPackPlugin({
        template: path.resolve(__dirname, 'public', 'index.html')
       })
    ],
    module: {
        rules: [
            {
                test: /\.jsx$/, //de todos os arquivos, se acabar com .jsx entra no processamento
                exclude: /node_modules/, //exclui node modules
                use: 'babel-loader', //ferramenta que processa em conjunto com webpack
            }
        ]
    }
}