# Curso Framework

![](https://refactoringui.nyc3.cdn.digitaloceanspaces.com/tailwind-logo.svg)

É um framework CSS que utiliza uma abordagem **_Utility First_** ou **_Functional CSS_**. 
É uma abordagem de escrita de CSS em que se procura fazer o uso de classes utilitárias que representam os atributos do CSS, trazendo os conceitos do paradigma funcional para o contexto do CSS.


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

3. Instale os pacotes necessários executando o comando abaixo no terminal. Isso irá instalar o [PostCSS] (https://postcss.org/), o PostCSS CLI (para executar o script de compilação) e os 3 plug-ins principais para PostCSS, que são TailwindCSS, AutoPrefixer e PurgeCSS.

     ```npm i postcss postcss-cli tailwindcss autoprefixer @fullhuman/postcss-purgecss```

4. Execute o comando abaixo no terminal para gerar um arquivo **_tailwind.config.js_**, que é opcional, mas permite que você substitua ou estenda as configurações básicas no **Tailwind**, como fontes, cores, espaçamento etc.

    ```npx tailwind init```

5. 

