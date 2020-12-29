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

Abaixo observe o exemplo de um trecho de código que centralizamos um container com a utility **_mx-auto_** e adicionamos um padding com a utility **_p-4_**. 

```
    <div class="container mx-auto p-4 font-bold bg-green-300 md:bg-blue-400">
        <p> Mudando da cor verde para azul no md:(breakpoint)</p>
    </div>
```

### 3.2 Box Sizing

Com as classes **border-box** e **box-content**, podemos declarar como o elemento calcula o seu tamanho total.

![class box-sizing](https://user-images.githubusercontent.com/64049906/103250906-a89aee00-494c-11eb-8a1f-e0b5fc786f1f.png)

Use a utility **box-border** para definir o **box-sizing** de um elemento como **border-box**, instruindo o navegador a incluir as bordas e o padding do elemento quando você atribuir a ele uma altura ou largura.

Isso significa que um elemento de 100px × 100px com uma borda de 2px e 4px de padding em todos os lados será renderizado como 100px × 100px, com uma área de conteúdo interno de 88px × 88px.

Use a utility **box-content** para definir o **box-sizing** de um elemento para **content-box**, instruindo o navegador a adicionar bordas e padding na parte superior da largura ou altura especificada do elemento.

Isso significa que um elemento 100px × 100px com uma borda de 2px e 4px de preenchimento em todos os lados será renderizado como 112px × 112px, com uma área de conteúdo interno de 100px × 100px.

Abaixo observe um trecho de que código onde aplicamos os conceitos de **box-border** e **box-content**:
  
    <div class="container box-border mx-auto p-8 m-8 bg-purple-500"> 
        <p>Exemplo de um container com border-box e margem e padding de 2rem</p>
    </div>
    <div class="container box-content mx-auto p-8 m-8 bg-yellow-300">
        <p>Exemplo de um container com box-content e margem e padding de 2rem </p>
    </div>
   
![box-sizing](https://user-images.githubusercontent.com/64049906/103288928-5f828280-49bc-11eb-8487-4fbe26c256e0.png)

### 3.3 Display

Utility para controlar o tipo de **display box** de um elemento.


![display 1](https://user-images.githubusercontent.com/64049906/103290024-f3554e00-49be-11eb-8b4d-6a4c166e61d9.png)

![Display 2](https://user-images.githubusercontent.com/64049906/103290042-ffd9a680-49be-11eb-85e7-f5175d896e15.png)

Colocando classes com valores da propriedade **display**, como **block**, podemos controlar este comportamento do elemento. Então um elemento com classe **inline-block**, se comporta igual a um elemento com estilo **_display: inline-block_**. As outras propriedades seguem a mesma lógica.

Abaixo observe um trecho de que código onde aplicamos o conceito de **_display: inline-block_**:

    <div class="container mx-auto p-8 m-8 bg-yellow-200">
        <div class="bg-red-400 inline-block p-2 m-2"> Bloco 01 </div>

        <div class="bg-blue-500 inline-block p-2 m-2"> Bloco 02 </div>

        <div class="bg-green-500 inline-block p-2 m-2"> Bloco 03 </div>
    </div>

![Exemplo inline block](https://user-images.githubusercontent.com/64049906/103295010-75e30b00-49c9-11eb-9ee1-d57b63446a21.png)


### 3.4 Floats e Clear

As utilities **float** e **clear** servem para controlar o empacotamento do conteúdo em torno de um elemento.

![floats](https://user-images.githubusercontent.com/64049906/103293435-51396400-49c6-11eb-95ed-4851dce33a0c.png)

Podemos controlar a propriedade **float** do elemento com classes **float-(*)**. Onde o * é o tipo de float que desejamos, como por exemplo: **right**, **left** ou **none**. A classe **clear** segue o mesmo padrão, podendo-se ser: **right**, **left**, **none** ou **both**, por exemplo.

![float](https://user-images.githubusercontent.com/64049906/103294481-50093680-49c8-11eb-9dca-4680947f50df.png)


![clear](https://user-images.githubusercontent.com/64049906/103318701-a0eb5000-4a05-11eb-8023-691901da9259.png)

![clear types](https://user-images.githubusercontent.com/64049906/103318718-b19bc600-4a05-11eb-8605-b70858cfbce3.png)

Abaixo observe um trecho de que código onde aplicamos o conceito de **_float right_** e **_clear-none_**:


    <div class="container mx-auto p-8 m-8 bg-gray-400">
        <img class="float-right" src="/src/img/tailwind.png" alt="logo tailwind">
        <p class="clear-none"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries, but also the leap into electronic typesetting, 
            remaining essentially unchanged. 
            It was popularised in the 1960s with the release of Letraset sheets containing 
            Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker 
            including versions of Lorem Ipsum.</p>
    </div>

![ex float clear](https://user-images.githubusercontent.com/64049906/103320039-55877080-4a0a-11eb-88bb-30e9accba62b.png)

### 3.5 Object Fit

### 3.6 Object Position

### 3.7 Overflow