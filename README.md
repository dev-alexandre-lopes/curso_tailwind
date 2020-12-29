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


## 1. Introdução

### 1.1 Como instalar o TailwindCSS

1. Se caso ainda não o tenha feito, você precisará instalar o [NodeJS](https://nodejs.org/en/) em seu computador. Utilize sempre a versão recomendada LTS.

2. Inicialize o **_npm_** na pasta do seu projeto executando o comando abaixo no terminal. Isso criará um arquivo **_package.json_** e permitirá que você instale posteriormente os pacotes necessários.

    ```npm init -y```

3. Instale os pacotes necessários executando o comando abaixo no terminal. Isso irá instalar o [PostCSS](https://postcss.org/), o **PostCSS CLI** (para executar o script de compilação) e os 3 plugins principais para PostCSS, que são: **TailwindCSS**, **AutoPrefixer** e o **PurgeCSS**.

     ```npm install postcss@latest postcss-cli@latest tailwindcss@latest autoprefixer@latest @fullhuman/postcss-purgecss@latest```

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
7. Crie a seguinte estrura de pastas: 

    a) Pasta **src**: Deve conter o código html do projeto e o CSS final compilado do Tailwind;

    b) Pasta **dist**: Deve conter o CSS final compilado e minificado do Tailwind;

8. Crie o arquivo **_index.html_** dentro da pasta **src**, digite o código do projeto.

9. Adicione um **_script_** chamado de **_start_** no seu arquivo **package.json** criado na etapa 1. Este script irá gerar um arquivo **CSS Final** com todas as classes do **Tailwind**, dentro da pasta **src** criada no item 7. :

    ```
    "scripts": {"start":"npx tailwindcss build tailwind.css -o src/css/style.css"},
    ```
10. Crie o seu arquivo **_CSS Final Compilado_** executando o _script_ através do comando abaixo no terminal: 

    ```npm run start```

11. Faça o link dentro do arquivo html para o arquivo CSS Final compilado do Tailwind gerado no item 10 que encontra-se na pasta **/src/css**.

12. O Tailwind já está em funcionamento, para verificar o resultado utilize o Live Server do VS Code para visualizar a página HTML com o código padrão abaixo:

    ```
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Framework TailwindCSS</title>
        <link rel="stylesheet" href="/src/css/style.css">
    </head>
    <body>
     <h1 class="text-xl text-blue-800 ml-60"> HTML Boilerplate </h1>
    </body>
    </html>
    ```

13. Adicione um **_script_** chamado de **_build_** no seu arquivo **package.json** criado na etapa 1. Este script irá gerar um arquivo **CSS Final Minify** utilizando o **PostCSS** com todas as classes do **Tailwind**, dentro da pasta **dist** criada no item 7. :
    
    ```
    "scripts": {"build":"postcss tailwind.css -o dist/css/style.css"},
    ```

14. Crie o seu arquivo **_CSS Final Compilado Minify_** executando o script através do comando abaixo no terminal:

    ```npm run build``` 

15. Pronto agora você deve ter um arquivo **_CSS Final Compilado_** na pasta **_src/css_** e um arquivo **_CSS Final Compilado Minify_** na pasta **_dist/css_**. Este último possui somente as configurações básicas utilizadas do **Tailwind**, junto com as classes de utilitário que você está usando em seus modelos, podendo ser utilizado em modo de produção.


### 1.2 Extensão IntelliSense para o Visual Studio Code

A extensão **_TailwindCSS IntelliSense_** para o Visual Studio Code aprimora a experiência de desenvolvimento do Tailwind fornecendo ao usuário recursos avançados, como preenchimento automático, destaque de sintaxe e linting.

![intellisense 0bd2cbf8c277e6c1330e345ab3cd7684](https://user-images.githubusercontent.com/64049906/103180961-bfb8dd80-4871-11eb-9644-990aae1bd952.png)

#### 1.2.1 Principais Funcionalidades:

* **_Autocompletar_**: Sugestões inteligentes para nomes de classes, bem como funções e diretivas CSS.
* **_Linting_**: Destaca os erros e possíveis **bugs** em seu CSS e em sua marcação.
* **_Hover Preview_**: Veja o CSS completo para um nome de classe do Tailwind passando o mouse sobre ele.
* **_Realce de sintaxe_**: Fornece definições de sintaxe para que os recursos do Tailwind sejam destacados corretamente.


## 2. Conceitos Fundamentais

### 2.1 Tudo é Classe no TailwindCSS:

A estilização no projeto com o Tailwind é tudo feito por meio de **_classes_**. Temos classes para **cor de fonte** e até mesmo para **pseudo seletores (hover)**. É possível também criar classes próprias com base nas existentes.


### 2.2 O Conceito de Utility First:

A premissa do Tailwind é construir componentes complexos com um conjunto de classes utilitárias. Podemos citar o exemplo do [BootStrap](https://getbootstrap.com/) que utiliza componentes prontos, aumentando substancialmente a dificuldade de customização em projetos extensos. No caso do **Tailwind** já utilizamos um conjunto de classes que proporciona a possibilidade de criação de variações de componentes (customização) de forma simples, ou seja, componente únicos. O tempo de desenvolvimento também é menor comparado a criação de um arquivo CSS puro.

### 2.3 Prioridade para Dispositivos Móveis: Mobile First

Todas as classes podem ser aplicadas a um determinado **breakpoint**. As classes padrões do Tailwind são: **_sm, md, lg e xl_**. Lembrando que as classes são **_mobile first_**, ou seja,  aplicadas para resoluções acima destes **breakpoints**. Não utilizamos nenhum **breakpoint** para atingir o mobile. Na fase de projeto deve-se pensar sempre do menor para o maior **breakpoint** que será utilizado.

**_Breakpoints_**: **sm**: 640px, **md**: 768px, **lg**: 1024px, **xl**: 1280px,


### 2.4 Pseudos Classes e Eventos:

Podemos utilizar as pseudo-classes com o Tailwind bastando adicionar as seguintes classes: **_hover, focus, active, group-houver, group-focus, focus-within, focus-visible, motion-safe, motion-reduce, disable, visited, checked, first-child, last-child, odd-child, even-child_**, 

### 2.5 Componentização:

Com o Tailwind não devemos utilizar componentes prontos. Primeiramente desenvolvemos o que precisamos e depois podemos **_transformar em um componente_** (via apply). Essa abordagem é interessante pois nem sempre tudo é definido no CSS, talvez precisamos de uma estrutura de HTML diferenciada.

## 3. Layout

### 3.1 Container

O container é um elemento que possui uma determinada largura, e que serve para incluir elementos dentro. Com as classes de responsividade **_(sm, md, lg e xl)_** podemos setar um **_max-with_** no elemento. É aplicado utilizando-se a classe **container**. Observe que, ao contrário dos **containers** que você pode ter usado em outras estruturas, o **container** do Tailwind não se centraliza automaticamente e não tem nenhum preenchimento horizontal integrado.

![class container tailwind](https://user-images.githubusercontent.com/64049906/103250553-cc5d3480-494a-11eb-8871-ef77882f2854.png)



