# Curso Framework

![](https://refactoringui.nyc3.cdn.digitaloceanspaces.com/tailwind-logo.svg)

O TailwindCSS é um framework que utiliza a abordagem **_Utility First_** ou **_Functional CSS_**. 
É a forma de escrita do CSS onde procura-se fazer o uso de classes "utilitárias" que representam os atributos do CSS, trazendo os conceitos do paradigma funcional para o contexto do CSS.


## Referências e Documentação Oficial:

[Website](https://tailwindcss.com) - Website Oficial do Framework Tailwind CSS

[Repositório](https://github.com/tailwindcss/tailwindcss) - Repositório Oficial do Framework Tailwind CSS.

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

## Como instalar o Tailwind CSS

1. Se Caso ainda não o tenha feito, você precisará instalar o [NodeJS](https://nodejs.org/en/) em seu computador. Utilize a versão recomendada LTS.

2. Inicialize o **_npm_** no seu projeto executando o comando abaixo no terminal. Isso criará um arquivo **_package.json_** e permitirá que você instale os pacotes necessários.

    ```npm init -y```

3. Instale os pacotes necessários executando o comando abaixo no terminal. Isso irá instalar o [PostCSS](https://postcss.org/), o **PostCSS CLI** (para executar o script de compilação) e os 3 plugins principais para PostCSS, que são: **TailwindCSS**, **AutoPrefixer** e o **PurgeCSS**.

     ```npm i postcss postcss-cli tailwindcss autoprefixer @fullhuman/postcss-purgecss```

4. Execute o comando abaixo no terminal para gerar o arquivo **_tailwind.config.js_**, que é opcional, mas permite que você substitua ou estenda as configurações básicas no **Tailwind**, como fontes, cores, espaçamento etc.

    ```npx tailwind init```

5. Crie o arquivo `postcss.config.js` que será utilizado para criação da versão Minify do seu arquivo final CSS compilado. Use o seguinte código:

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
7. Adicione um **_script_** chamado de **_start_** no seu arquivo **package.json**. Este script irá gerar um arquivo **CSS final** com todas as classes do **Tailwind**, dentro de uma pasta chamada **src**. :

    ```
    "scripts": {"start":"npx tailwindcss build tailwind.css -o src/css/style.css"},
    ```
8. Crie o seu arquivo **_CSS Final Compilado_** executando o comando abaixo no terminal: 

    ```npm run start```

9. Adicione um **_script_** chamado de **_build_** no seu arquivo **package.json**. Este script irá gerar um arquivo **CSS final minify** utilizando o **PostCSS** com todas as classes do **Tailwind**, dentro de uma pasta chamada **dist**. :
    
    ```
    "scripts": {"build":"postcss tailwind.css -o dist/css/style.css"},
    ```

10. Crie o seu arquivo **_CSS Final Compilado Minify_** executando o comando abaixo no terminal:

    ```npm run build``` 

11. Pronto agora você deve ter um arquivo **CSS Final Compilado** na pasta **_src/css_** e um arquivo **_CSS Final Compilado Minify_** na pasta **_dist/css_**. Este último possui somente as configurações básicas utilizadas do **Tailwind**, junto com quaisquer classes de utilitário que você está usando em seus modelos.

## Conceitos Fundamentais



