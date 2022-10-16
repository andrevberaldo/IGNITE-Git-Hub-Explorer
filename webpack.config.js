const path = require('path'); //lib que auxilia o path do projeto

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.jsx'), //arquivo principal do projeto
    output: {
        path: path.resolve(__dirname, 'dist'), //qual a pasta será o output
        filename: 'bundle.js' //nome do arquivo de output
    },
    resolve: {
        extensions: ['.js','.jsx'] //quais extensões o webpack mapeará
    },
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