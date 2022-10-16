const path = require('path'); //lib que auxilia o path do projeto
const HtmlWebPackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
    mode: isDevelopment ? 'development' : 'production',
    devtool: isDevelopment ? 'eval-source-map' : 'source-map',
    entry: path.resolve(__dirname, 'src', 'index.tsx'), //arquivo principal do projeto
    output: {
        path: path.resolve(__dirname, 'dist'), //qual a pasta será o output
        filename: 'bundle.js' //nome do arquivo de output
    },
    resolve: {
        extensions: ['.js','.jsx', '.ts', '.tsx'] //quais extensões o webpack mapeará
    },
    devServer: {
        static: path.resolve(__dirname, 'public'),
        hot: true
    },
    plugins: [
       new HtmlWebPackPlugin({
        template: path.resolve(__dirname, 'public', 'index.html')
       }),
       isDevelopment && new ReactRefreshWebpackPlugin()
    ].filter(Boolean),
    module: {
        rules: [
            {
                test: /\.(j|t)sx$/, //de todos os arquivos, se acabar com .jsx entra no processamento
                exclude: /node_modules/, //exclui node modules do processamento
                use: {
                    loader: 'babel-loader',
                    options: {
                        plugins: [
                            isDevelopment && require.resolve('react-refresh/babel')
                        ].filter(Boolean)
                    }
                }, //ferramenta que processa em conjunto com webpack
            },
            {
                test: /\.scss$/, //de todos os arquivos, se acabar com .css entra no processamento
                exclude: /node_modules/, //exclui node modules
                use: ['style-loader', 'css-loader', 'sass-loader'], //ferramenta que processa em conjunto com webpack
            }
        ]
    }
}