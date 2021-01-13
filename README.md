# Curso Framework

![](https://refactoringui.nyc3.cdn.digitaloceanspaces.com/tailwind-logo.svg)

O TailwindCSS é um framework que utiliza uma abordagem de escrita e uso do CSS em que se procura, primeiramente, fazer uso das chamadas classes utilitárias (**_Utility First_**), classes estas que representam atributos do CSS, como **border**, **background**, **border-radius** e uma série de outras propriedades. Essa abordagem possui inúmeros sinônimos: **_Immutable CSS, Functional CSS, Atomic CSS_** entre outros.

## Boas Referências e a Documentação Oficial:

[Website](https://tailwindcss.com) - Website Oficial do Framework TailwindCSS

[Repositório](https://github.com/tailwindcss/tailwindcss) - Repositório Oficial do Framework TailwindCSS.

[TailBlocks](https://github.com/mertJF/tailblocks) - TailwindCSS Blocks.


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


### 3.1 Breakpoints

Os **breakpoints** são os tamanhos de tela que envolvem as classes de utilitários. Os valores para os breakpoints são apresentados abaixo:

![breakpoints](https://user-images.githubusercontent.com/64049906/103425006-e9317c00-4b85-11eb-9342-c64de4ff9c6f.png)


### 3.2 Container

O container é um elemento que possui uma determinada largura, e que serve para incluir elementos dentro. Com as classes de responsividade **_(sm, md, lg e xl)_** podemos setar um **_max-with_** no elemento. É aplicado utilizando-se a classe **container**. Observe que, ao contrário dos **containers** que você pode ter usado em outras estruturas, o **container** do Tailwind não se centraliza automaticamente e não tem nenhum preenchimento horizontal integrado.

![class container tailwind](https://user-images.githubusercontent.com/64049906/103250553-cc5d3480-494a-11eb-8871-ef77882f2854.png)

Abaixo observe o exemplo de um trecho de código que centralizamos um container com a utility **_mx-auto_** e adicionamos um padding com a utility **_p-4_**. 

```
    <div class="container mx-auto p-4 font-bold bg-green-300 md:bg-blue-400">
        <p> Mudando da cor verde para azul no md:(breakpoint)</p>
    </div>
```

### 3.3 Box Sizing

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

### 3.4 Display

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


### 3.5 Floats e Clear

As utilities **float** e **clear** servem para controlar o empacotamento do conteúdo em torno de um elemento.

![floats](https://user-images.githubusercontent.com/64049906/103293435-51396400-49c6-11eb-95ed-4851dce33a0c.png)

Podemos controlar a propriedade **float** do elemento com classes **float-(*)**. Onde o * é o tipo de float que desejamos, como por exemplo: **right**, **left** ou **none**. A classe **clear** segue o mesmo padrão, podendo-se ser: **right**, **left**, **none** ou **both**, por exemplo.

![float](https://user-images.githubusercontent.com/64049906/103294481-50093680-49c8-11eb-9dca-4680947f50df.png)


![clear](https://user-images.githubusercontent.com/64049906/103318701-a0eb5000-4a05-11eb-8023-691901da9259.png)

![clear types](https://user-images.githubusercontent.com/64049906/103318718-b19bc600-4a05-11eb-8605-b70858cfbce3.png)

Abaixo observe um trecho de que código onde aplicamos o conceito de **_float-right_** e **_clear-none_**:


    <div class="container mx-auto p-8 m-8 bg-gray-400">
        <img class="float-right" src="/src/img/tailwind.png" alt="logo tailwind">
        <p class="clear-none"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries, but also the leap into electronic typesetting, 
            remaining essentially unchanged. 
            It was popularised in the 1960s with the release of Letraset sheets containing 
            Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker 
            including versions of Lorem Ipsum.</p>
    </div>

![ex float clear](https://user-images.githubusercontent.com/64049906/103320039-55877080-4a0a-11eb-88bb-30e9accba62b.png)

### 3.6 Object Fit

É uma utility para controlar como o conteúdo de um elemento substituído (img ou tag de vídeo) deve ser redimensionado.

![object fit](https://user-images.githubusercontent.com/64049906/103425668-462f3100-4b8a-11eb-83ea-0832ed11c88c.png)

**_object-contain_**: Utilizado para redimensionar o conteúdo de um elemento para que o mesmo fique contido em seu container.

![contain](https://user-images.githubusercontent.com/64049906/103425787-277d6a00-4b8b-11eb-8f99-165699bb95fe.png)


**_object-cover_**: Utilizado para redimensionar o conteúdo de um elemento para que o mesmo possa cobrir o seu container.

![cover](https://user-images.githubusercontent.com/64049906/103425896-d326ba00-4b8b-11eb-81fc-e2dd45614b8e.png)

**_object-fill_**: Utilizado para esticar o conteúdo de um elemento para que o mesmo possa caber em todo o seu container.

![fill](https://user-images.githubusercontent.com/64049906/103425927-16812880-4b8c-11eb-9805-9e372d36514d.png)


**_object-scale-down_**: Utilizado para exibir o conteúdo de um elemento em seu tamanho original, mas pode reduzi-ló para caber em seu container, se necessário.

![contain](https://user-images.githubusercontent.com/64049906/103425787-277d6a00-4b8b-11eb-8f99-165699bb95fe.png)

### 3.7 Object Position

É uma utility para controlar como o conteúdo de um elemento substituído deve ser posicionado em seu container.

![position](https://user-images.githubusercontent.com/64049906/103427514-e3449680-4b97-11eb-9d46-9d87f8bf5b29.png)

Abaixo observe um exemplo de código com as possibilidades de posicionamento dentro de um container:
    
    <div class="container flex flex-wrap mx-auto m-4 p-4 bg-gray-400">
        <img class="w-32 h-32 m-4 object-none object-left-top bg-red-400"src="/src/img/placeholder-square-amber.svg" alt="bloco amarelo">
        <img class="w-32 h-32 m-4 object-none object-top bg-blue-600"src="/src/img/placeholder-square-amber.svg" alt="bloco amarelo">
        <img class="w-32 h-32 m-4 object-none object-right-top bg-green-300"src="/src/img/placeholder-square-amber.svg" alt="bloco amarelo">
        <img class="w-32 h-32 m-4 object-none object-left bg-yellow-300"src="/src/img/placeholder-square-amber.svg" alt="bloco amarelo">
        <img class="w-32 h-32 m-4 object-none object-center bg-purple-800"src="/src/img/placeholder-square-amber.svg" alt="bloco amarelo">
        <img class="w-32 h-32 m-4 object-none object-right bg-green-900"src="/src/img/placeholder-square-amber.svg" alt="bloco amarelo">
        <img class="w-32 h-32 m-4 object-none object-left-bottom bg-red-700"src="/src/img/placeholder-square-amber.svg" alt="bloco amarelo">
        <img class="w-32 h-32 m-4 object-none object-bottom bg-yellow-300"src="/src/img/placeholder-square-amber.svg" alt="bloco amarelo">
        <img class="w-32 h-32 m-4 object-none object-right-bottom bg-indigo-600"src="/src/img/placeholder-square-amber.svg" alt="bloco amarelo">
    </div>

![position 2](https://user-images.githubusercontent.com/64049906/103427557-39193e80-4b98-11eb-94a4-677b0674b404.png)


### 3.8 Overflow

É uma utility para controlar como um elemento trata um conteúdo muito grande para o seu container. Podemos criar ou eliminar **scroll**, controlar eixos tudo através das classes abaixo:

![overflow](https://user-images.githubusercontent.com/64049906/103458792-dc299f80-4ce1-11eb-85a8-0d36de0fed8d.png)


### 3.9 Overscroll

É uma utility para controlar como o navegador se comporta ao atingir o limite de uma área de rolagem. Podemos controlar através das classes abaixo:

![overscroll](https://user-images.githubusercontent.com/64049906/103459696-7e985180-4ce7-11eb-94ed-39ec3e49893b.png)


### 3.10 Position

É uma utility para controlar como um elemento é posicionado no DOM. Podemos controlar através das classes abaixo:

![position](https://user-images.githubusercontent.com/64049906/103460651-4ea07c80-4cee-11eb-9a69-5269003edded.png)


### 3.11 Top, right, bottom, left

É uma utility para controlar o posicionamento de elementos com a classe **absolute** em um container com a classe **relative**.

Use as utilities {top | right | bottom | left | inset} -0 para ancorar elementos absolutamente posicionados contra qualquer uma das arestas do elemento pai posicionado mais próximo.

Combinando com os utilities de preenchimento e margem do **Tailwind**, provavelmente podemos controlar com precisão os elementos posicionados de forma absoluta. Abaixo alguns exemplos:

![position](https://user-images.githubusercontent.com/64049906/103490764-75e17180-4df4-11eb-80ec-4e6e34d52eb3.png)


### 3.12 Visibility

É uma utility para controlar a visibilidade de um elemento. Podemos alterar a propriedade **visibility** com duas classes: visible e invisible. Utilizamos para exibir ou esconder elementos.

![visible](https://user-images.githubusercontent.com/64049906/103491018-6105dd80-4df6-11eb-8513-2fc43e20bad4.png)


### 3.13 Z-index
É uma utility para controlar a ordem de empilhamento de um elemento.

![zindex](https://user-images.githubusercontent.com/64049906/103589918-ea82e180-4ec2-11eb-8db3-125c19987a92.png)

![exzindex](https://user-images.githubusercontent.com/64049906/103589967-0a1a0a00-4ec3-11eb-8852-2683389cf8d4.png)


## 4. Flexbox

### 4.1 Display

É uma utility que define o elemento como um flex container.

![flex](https://user-images.githubusercontent.com/64049906/103591479-aa256280-4ec6-11eb-992d-ec4115bdcfa2.png)

### 4.2 Flex Direction

É uma utility para controlar a direção dos flex-itens.

![flex direction](https://user-images.githubusercontent.com/64049906/103591578-efe22b00-4ec6-11eb-8179-8879e867c886.png)

Abaixo observe um exemplo de código com as possibilidades de uso do flex-direction:

     <div class="container flex flex-row mx-auto m-4 bg-green-300">
        <div class="bg-green-600 m-2 h-10 w-10 text-white text-xl text-center"> 1 </div>
        <div class="bg-green-600 m-2 h-10 w-10 text-white text-xl text-center"> 2 </div>
        <div class="bg-green-600 m-2 h-10 w-10 text-white text-xl text-center"> 3 </div>
    </div>
   
    <div class="container flex flex-col mx-auto m-4 bg-blue-300">
        <div class="bg-blue-600 m-2 text-white text-xl text-center"> 1 </div>
        <div class="bg-blue-600 m-2 text-white text-xl text-center"> 2 </div>
        <div class="bg-blue-600 m-2 text-white text-xl text-center"> 3 </div>
    </div>
    
     <div class="container flex flex-row-reverse mx-auto m-4 bg-red-300">
        <div class="bg-red-600 m-2 h-10 w-10 text-white text-xl text-center"> 1 </div>
        <div class="bg-red-600 m-2 h-10 w-10 text-white text-xl text-center"> 2 </div>
        <div class="bg-red-600 m-2 h-10 w-10 text-white text-xl text-center"> 3 </div>
    </div>
      
       <div class="container flex flex-col-reverse mx-auto m-4 bg-yellow-300">
        <div class="bg-yellow-600 m-2 text-white text-xl text-center"> 1 </div>
        <div class="bg-yellow-600 m-2 text-white text-xl text-center"> 2 </div>
        <div class="bg-yellow-600 m-2 text-white text-xl text-center"> 3 </div>
    </div>
![flexcolrow](https://user-images.githubusercontent.com/64049906/103592914-b3183300-4eca-11eb-907e-88a7c0ea88cf.png)

### 4.3 Flew Wrap

É uma utility para controlar como os itens flexíveis são agrupados e se adaptarão ao container. Com o **flex-no-wrap** os itens tendem a ficar na mesma linha. Com o **flex-wrap** os itens vão se encaixando em linhas abaixo, conforme o tamanho do container.

![flexwrap](https://user-images.githubusercontent.com/64049906/103593384-13f43b00-4ecc-11eb-9b1a-3ea7b5864342.png)


### 4.4 Flex

É uma utility para controlar como os flex itens aumentam e diminuem.

![flex](https://user-images.githubusercontent.com/64049906/103709230-7a3e9380-4f88-11eb-8e18-01a42b35faeb.png)

Use o **flex-initial** para permitir que um flex item encolha, mas não aumente, levando em consideração seu tamanho inicial.

Use o **flex-1** para permitir que um flex item aumente e diminua conforme o necessário, ignorando seu tamanho inicial.

Use o **flex-auto** para permitir que um flex item aumente e diminua, levando em consideração seu tamanho inicial.

### 4.5 Flew-grow

É uma utility para controlar como os flex itens crescem.

![flexgrow](https://user-images.githubusercontent.com/64049906/103710324-1ff30200-4f8b-11eb-8f98-45822adc2b32.png)

Use o **flex-grow** para permitir que um flex item cresça para preencher qualquer espaço disponível.

Use o **flex-grow-0** para evitar que um item flexível cresça.

### 4.6 Flew-shrink

É uma utility para controlar como os flex itens diminuem.

![flex shrink](https://user-images.githubusercontent.com/64049906/103710585-c2ab8080-4f8b-11eb-9b96-677f5ca79b05.png)

Use o **flex-shrink** para permitir que um flex item encolha, se necessário.

Use o **flex-shrink-0** para evitar que um flex item encolha.

### 4.7 Order

É uma utility para controlar a ordem dos flex itens.

![order](https://user-images.githubusercontent.com/64049906/103711513-fdaeb380-4f8d-11eb-8ce1-601852c9b939.png)

Abaixo observe um trecho de código onde os flex itens são reorganizados:

    <div class="container flex flex-row flex-wrap mx-auto m-4 bg-gray-400">
        <div class="bg-purple-600 m-2 h-16 w-36 text-white text-xl text-center order-1"> 1 </div>
        <div class="bg-purple-600 m-2 h-16 w-36 text-white text-xl text-center order-4"> 2 </div>
        <div class="bg-purple-600 m-2 h-16 w-36 text-white text-xl text-center order-5"> 3 </div>
        <div class="bg-purple-600 m-2 h-16 w-36 text-white text-xl text-center order-6"> 4 </div>
        <div class="bg-purple-600 m-2 h-16 w-36 text-white text-xl text-center order-2"> 5 </div>
        <div class="bg-purple-600 m-2 h-16 w-36 text-white text-xl text-center order-3"> 6 </div>
        <div class="bg-purple-600 m-2 h-16 w-36 text-white text-xl text-center order-7"> 7 </div>
    </div>
![order-ex](https://user-images.githubusercontent.com/64049906/103711609-3d759b00-4f8e-11eb-9702-a86e4bbbecea.png)


## 5. Grid

### 5.1 Grid Template-Columns

É uma utility para especificar as colunas em um layout de grid.

![grid-columns](https://user-images.githubusercontent.com/64049906/103713352-7d3e8180-4f92-11eb-979b-9b4d0cc8c389.png)

A classe **grid-cols-x** define o número de colunas em um grid. Onde **x** é o número de colunas desejadas. A classe pai precisa conter a classe grid.

Abaixo um código para exemplificar o uso do **grid-cols-x**, juntamente com as propriedades de responsividade:

    <div class="grid lg:grid-cols-3 gap-4 mx-auto p-4 bg-gray-200 sm:grid-cols-1 md:grid-cols-2">
        <div class="bg-blue-400 text-center font-bold text-2xl"> 1</div>
        <div class="bg-blue-400 text-center font-bold text-2xl"> 2</div>
        <div class="bg-blue-400 text-center font-bold text-2xl"> 3</div>
        <div class="bg-blue-400 text-center font-bold text-2xl"> 4</div>
        <div class="bg-blue-400 text-center font-bold text-2xl"> 5</div>
        <div class="bg-blue-400 text-center font-bold text-2xl"> 6</div>
        <div class="bg-blue-400 text-center font-bold text-2xl"> 7</div>
        <div class="bg-blue-400 text-center font-bold text-2xl"> 8</div>
        <div class="bg-blue-400 text-center font-bold text-2xl"> 9</div>
    </div>

Para o breakpoint **_lg_**:

![grid lg](https://user-images.githubusercontent.com/64049906/103715588-69494e80-4f97-11eb-81ba-c0651fba0092.png)

Para o breakpoint **_md_**:

![grid md](https://user-images.githubusercontent.com/64049906/103715643-8d0c9480-4f97-11eb-8946-a8b37660e08a.png)

Para o breakpoint **_sm_**:

![grid sm](https://user-images.githubusercontent.com/64049906/103715666-985fc000-4f97-11eb-8919-eb2a3f4c98d9.png)

### 5.2 Grid Columns Star/End

É uma utility para controlar como os elementos são dimensionados e colocados nas colunas do grid.

Com a **col-span-x** podemos controlar o tamanho da coluna. Onde x é o tamanho, baseado no número de colunas definido na classe pai. Lembrando que essa classe vai nos elementos filhos do container grid.

![columns](https://user-images.githubusercontent.com/64049906/103716531-ad3d5300-4f99-11eb-9867-9e8aa161f9d7.png)

Use os utilities **col-start- {n}** e **col-end- {n}** para fazer um elemento começar ou terminar na enésima linha da grade. Eles também podem ser combinados com os utilities **col-span- {n}** para abranger um número específico de colunas.

Observe que as linhas do grid CSS começam em 1, não em 0, portanto, um elemento de largura total em um grid de 6 colunas começaria na linha 1 e terminaria na linha 7.

    <div class="grid grid-cols-3 gap-2 m-4 p-4 mx-auto bg-gray-200">
        <div class="bg-red-300 text-center font-bold text-2xl col-start-2 col-end-4"> 1</div>
        <div class="bg-red-300 text-center font-bold text-2xl col-span-2"> 2</div>
        <div class="bg-red-300 text-center font-bold text-2xl"> 3</div>
        <div class="bg-red-300 text-center font-bold text-2xl"> 4</div>
        <div class="bg-red-300 text-center font-bold text-2xl col-start-3"> 5</div>
        <div class="bg-red-300 text-center font-bold text-2xl"> 6</div>
        <div class="bg-red-300 text-center font-bold text-2xl col-span-3"> 7</div>
        <div class="bg-red-300 text-center font-bold text-2xl"> 8</div>
        <div class="bg-red-300 text-center font-bold text-2xl"> 9</div>
    </div>

![colstart](https://user-images.githubusercontent.com/64049906/103899802-4f118c80-50cd-11eb-8987-d1956c2978b2.png)

### 5.3 Grid Template Rows

É uma utility para especificar as linhas em um layout de grid.

![gridrow](https://user-images.githubusercontent.com/64049906/103900041-b29bba00-50cd-11eb-8c8b-00207598d465.png)

Use os utilities **grid-rows- {n}** para criar grids com **n linhas** de tamanhos iguais.

![rows](https://user-images.githubusercontent.com/64049906/103900507-4077a500-50ce-11eb-9987-d608a378f0bb.png)

### 5.4 Grid Row Star/End

É uma utility para controlar como os elementos são dimensionados e colocados nas linhas do grid.

![row](https://user-images.githubusercontent.com/64049906/103901278-5043b900-50cf-11eb-9d25-0dd843c96c94.png)


![row2](https://user-images.githubusercontent.com/64049906/103901435-8719cf00-50cf-11eb-98fb-a664b3dd5fbc.png)

### 5.5 Grid Auto Flow

É uma utility para controlar como os elementos em um grid são colocados automaticamente.

![autoflow](https://user-images.githubusercontent.com/64049906/103901644-ca743d80-50cf-11eb-9483-22ff32d96390.png)

Use os utilities **grid-flow-{keyword}** para controlar como o algoritmo de posicionamento automático funciona para um layout de grid.

### 5.6 Grid Auto Columns

É uma utility para controlar o tamanho de colunas do grid criadas implicitamente.

![auto columns](https://user-images.githubusercontent.com/64049906/103903818-c5fd5400-50d2-11eb-865a-714fc649077b.png)

### 5.7 Grid Auto Rows

É uma utility para controlar o tamanho das linhas do grid criadas implicitamente.

![autorows](https://user-images.githubusercontent.com/64049906/103904354-8be08200-50d3-11eb-8ec5-1eb41689b48e.png)

### 5.8 Gap

É uma utility para controlar o espaçamento entre linhas e colunas do grid. Inserimos a classe **gap-x**, no container principal. Onde **x** é o tamanho do espaçamento. É possível também mudar o espaçamento pelo eixo x ou y.


## 6. Customização do Tailwind

### 6.1 Customização do Theme

A customização do **Tailwind** ocorre com a edição do arquivo **_tailwind.config.js_**. Neste arquivo temos algumas seções específicas:

* **Theme**: Customização dos estilos do projeto;

* **Extend**: Extensão das nossas classos do projeto;

* **Plugins**: Adicionar plugins do **Tailwind** externos;

* **Prefix**: Adionar um prefixo as classes do **Tailwind**;

Obs: Após qualquer alteração na no arquivo **_tailwind.config.js_** deve-se fazer o build para que as customizações possam ser observadas no arquivo final na pasta dist.

Na customização do **theme** vamos inserir regras parecidas com as do **Tailwind**, gerando o efeito de estender o framework.

Se colocarmos regras com o mesmo nome, iremos gerar um **override**, ou seja, uma substituição.

Por padrão, seu projeto herdará automaticamente os valores da configuração padrão do [the default theme configuration](https://github.com/tailwindlabs/tailwindcss/blob/v1/stubs/defaultConfig.stub.js#L5). Se quiser personalizar o **theme** padrão, você tem algumas opções diferentes, dependendo de seus objetivos.


