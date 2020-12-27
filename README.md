# Curso Framework

![](https://refactoringui.nyc3.cdn.digitaloceanspaces.com/tailwind-logo.svg)

O TailwindCSS é um framework que utiliza uma abordagem de escrita e uso do CSS em que se procura, primeiramente, fazer uso das chamadas classes utilitárias (**_Utility First_**), classes estas que representam atributos do CSS, como **border**, **background**, **border-radius** e uma série de outras propriedades. Essa abordagem possui inúmeros sinônimos: **_Immutable CSS, Functional CSS, Atomic CSS_** entre outros.

## Referências e Documentação Oficial:

[Website](https://tailwindcss.com) - Website Oficial do Framework TailwindCSS

[Repositório](https://github.com/tailwindcss/tailwindcss) - Repositório Oficial do Framework TailwindCSS.

## Conteúdo do Curso

* Introdução;
* Conceitos Fundamentais;
* Layout;
* Flexbox com Tailwind;
* Grid com Tailwind;
* Customização;
* Alinhamento;
* Espaçamento;
* Dimensões;
* Tipografia;
* Background;
* Bordas;
* Efeitos;
* Tabelas;
* Transições e Animações;
* Transformações;
* Interatividade;

## Como instalar o TailwindCSS

1. Se caso ainda não o tenha feito, você precisará instalar o [NodeJS](https://nodejs.org/en/) em seu computador. Utilize sempre a versão recomendada LTS.

2. Inicialize o **_npm_** na pasta do seu projeto executando o comando abaixo no terminal. Isso criará um arquivo **_package.json_** e permitirá que você instale posteriormente os pacotes necessários.

    ```npm init -y```

3. Instale os pacotes necessários executando o comando abaixo no terminal. Isso irá instalar o [PostCSS](https://postcss.org/), o **PostCSS CLI** (para executar o script de compilação) e os 3 plugins principais para PostCSS, que são: **TailwindCSS**, **AutoPrefixer** e o **PurgeCSS**.

     ```npm i postcss postcss-cli tailwindcss autoprefixer @fullhuman/postcss-purgecss```

4. Execute o comando abaixo no terminal para gerar o arquivo **_tailwind.config.js_**, que é opcional, mas permite que você substitua ou estenda as configurações básicas no **Tailwind**, como fontes, cores, espaçamento etc.

    ```npx tailwind init```

5. Crie o arquivo `postcss.config.js` que será utilizado para a criação da versão Minify (minificada) do seu arquivo final CSS compilado. Use o seguinte código:

    ```
    module.exports = {
        plugins: [
            require('tailwindcss'),
            require('autoprefixer'),
            require('@fullhuman/postcss-purgecss')({
                content: [
                '**/*.html' // whatever your template language
                ],
            defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
        })
        ]
    }
    ```
6. Crie o arquivo `tailwind.css` que irá conter as diretivas do **Tailwind**. Use o seguinte código:

    ```
    @tailwind base;

    @tailwind components;

    @tailwind utilities;
    ```
7. Adicione um **_script_** chamado de **_start_** no seu arquivo **package.json** criado na etapa 1. Este script irá gerar um arquivo **CSS Final** com todas as classes do **Tailwind**, dentro de uma pasta chamada **src**. :

    ```
    "scripts": {"start":"npx tailwindcss build tailwind.css -o src/css/style.css"},
    ```
8. Crie o seu arquivo **_CSS Final Compilado_** executando o script através do comando abaixo no terminal: 

    ```npm run start```

9. Adicione um **_script_** chamado de **_build_** no seu arquivo **package.json** criado na etapa 1. Este script irá gerar um arquivo **CSS Final Minify** utilizando o **PostCSS** com todas as classes do **Tailwind**, dentro de uma pasta chamada **dist**. :
    
    ```
    "scripts": {"build":"postcss tailwind.css -o dist/css/style.css"},
    ```

10. Crie o seu arquivo **_CSS Final Compilado Minify_** executando o script através do comando abaixo no terminal:

    ```npm run build``` 

11. Pronto agora você deve ter um arquivo **_CSS Final Compilado_** na pasta **_src/css_** e um arquivo **_CSS Final Compilado Minify_** na pasta **_dist/css_**. Este último possui somente as configurações básicas utilizadas do **Tailwind**, junto com as classes de utilitário que você está usando em seus modelos.


## Extensão IntelliSense para o VSCode

A extensão **_TailwindCSS IntelliSense_** para o VS Code aprimora a experiência de desenvolvimento do Tailwind fornecendo ao usuário do Visual Studio Code recursos avançados, como preenchimento automático, destaque de sintaxe e linting.

# Principais Funcionalidades:

* **_Autocompletar_**: Sugestões inteligentes para nomes de classes, bem como funções e diretivas CSS.
* **_Linting_**: Destaca os erros e possíveis **bugs** em seu CSS e em sua marcação.
* **_Hover Preview_**: Veja o CSS completo para um nome de classe do Tailwind passando o mouse sobre ele.
* **_Realce de sintaxe_**: Fornece definições de sintaxe para que os recursos do Tailwind sejam destacados corretamente.


## Conceitos Fundamentais



