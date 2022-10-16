# NOTES

## STEPS
* Criar estrutura do projeto diretório raiz.
* Criar repositório criando o pkg.json --> **yarn init -y** || npm init -y
* Instalar React --> **yarn add react**
* Instalar React-Dom --> **yarn add react-dom**


### OBS: *REACT-DOM é a biblioteca que faz o react se comunique com o DOM (document object model) e é utilizada como dependencia no react.js*
* Criar a pasta SRC onde será colocado os códigos fontes do projeto.
* Criar a pasta PUBLIC onde o **index.html** será criado e onde os assets publicos serão colocados
* Criar **index.html** na pasta public com estrutura de html 5. O VScode possui o bind **html:5 + TAB**.
* Instalar o Babel



### OBS: Babel é uma biblioteca que garante a **compatibilidade** com versões antigas de browsers. Ele é instalado como dependencia de desenvolvimento pois ele roda antes do build. Para instalar o babel: **yarn add @babel/core @babel/cli @babel/preset-env -D**

* Criar o arquivo **babel.config.js** na pasta root do projeto
* Inserir as condifgurações no arquivo:

```
module.exports = {
    presets: [
        '@babel/preset-env'
    ]
}
```

* Para o Babel funcionar com react devemos adicionar o preset: @babel/preset-react através do yarn e colocar o preset no export do babel.config.js

## Instalar WebPack
* O Webpack é uma ferramenta que possibilita o import de arquivos pelo módulo, não apenas funções Js mas tb arquivos JSON, JPEG, SASS e etc, sendo seu output um unico arquivo pronto para ser executado no
* **yarn add webpack webpack/cli -D**
* Criar o webpack.config.js

```
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
```




