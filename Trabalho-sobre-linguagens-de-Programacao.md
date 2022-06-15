# Trabalho sobre linguagens de Programação

Este trabalho irá abordar as características de 5 linguagens de programação de forma generalista, fornecendo uma explicação mais detalhada dos aspectos de apenas uma das linguagens definidas.

## As 5 linguagens

As cinco linguagens que serão abordas nesse trabalho são as seguinte:

1. Python
2. C
3. C++
4. Java
5. Java Script 

## Python

Python é uma linguagem Open-Source de propósito geral usado bastante em data science, machine learning, desenvolvimento de web, desenvolvimento de aplicativos, automação de scripts, fintechs e mais.

StackOverflow considerou Python a linguagem de renome que mais cresce, e a linguagem que os programadores mais desejam aprender. Como por exemplo em 2014 nos Estados Unidos, 8 das 10 melhores universidades de ciência da computação ensinam o python em cursos introdutórios.

## C

A linguagem C foi criada por Dennis Ritchie nos laboratórios da Bell Telephone em 1972.

C foi criada com um propósito: ser usada no desenvolvimento de uma nova versão do sistema operacional Unix. A primeira versão do Unix utilizava Assembly. Então podemos dizer que desde o principio C foi uma linguagem criada por programadores para programadores.

A linguagem C é considerada de propósito geral, ou seja é uma linguagem capaz de ser usada para praticamente qualquer tipo de projeto.

É extremamente portável, ou seja um programa escrito em linguagem C pode ser facilmente usado em qualquer plataforma.

Utilizando linguagem C podemos criar sistemas operacionais, aplicativos de todos os tipos, drivers e outros controladores de dispositivos, programar microcontroladores, etc.

Além de toda essa flexibilidade, C é capaz de gerar programas extremamente rápidos em tempo de execução, possui uma sintaxe simples e poderosa, com instruções de alto nível.

A linguagem C influenciou de forma direta muitas linguagens como C++, Java, C# , Objective C, e muitas outras linguagens de programação tem sua sintaxe e estruturas influenciadas por C.

## C++

Na década de 1980, *Bjarne Stroustrup* queria criar uma versão distribuída do Kernel Unix. Por ser uma tarefa demasiadamente complexa, ele queria escolher uma linguagem que trouxesse facilidades na hora de escrever o código, mas ao mesmo tempo performática.

Linguagens como Simula ofereciam facilidades de codificação, porém eram bastante lentas. Já C era suficientemente rápida, então *Bjarne Stroustrup* começou a adicionar funcionalidades de código à linguagem C. Assim, C++ (chamado na época de *C with Classes*) foi criado para ser uma linguagem com ótima performance, porém com recursos de alto nível suficientes a ponto de facilitar o desenvolvimento de sistemas complexos.

C++ é uma das linguagens mais versáteis que existem, permitindo desenvolver desde tarefas simples como aplicações na linha de comando ou web, até sistemas complexos de tempo real, muito usadas no mercado financeiro.

## Java

Java é uma linguagem de programação e um ambiente computacional criado pela Sun Microsystems na década de 90, sendo posteriormente adquirido pela Oracle.

Devido a possibilidade de escrever o código apenas uma vez e rodá-lo em diferentes dispositivos, a tecnologia logo se tornou popular, passando a ser implementada em praticamente qualquer lugar, desde sites e computadores até datacenters, celulares, calculadoras, videogames, etc.

Como linguagem de programação, o código Java é baseado em classes e orientado a objetos, com foco em segurança, portabilidade e alta performance.

Também tem como principais características uma sintaxe similar a C/C++, extensa biblioteca de rotinas e APIs para trabalhar com recursos de rede, e um poderoso gerenciamento automático de memória.

## JavaScript

A linguagem Java Script foi escolhida como a linguagem que será abordada de forma mais detalhada.

### Definição de alto nível

JavaScript é uma linguagem de programação que permite a você implementar itens complexos em páginas web — toda vez que uma página da web faz mais do que simplesmente mostrar a você informação estática — mostrando conteúdo que se atualiza em um intervalo de tempo, mapas interativos ou gráficos 2D/3D animados, etc. — você pode apostar que o JavaScript provavelmente está envolvido. É a terceira camada do bolo das tecnologias padrões da web, duas das quais (HTML e CSS) nós falamos com muito mais detalhes em outras partes da Área de Aprendizado.

### Para que é usado JavaScript

O JavaScript está em vária aplicações que qualquer pessoa que tenha visitado páginas web interativas ou aplicativos móveis provavelmente terá experimentado. Embora o desenvolvimento de sites – incluindo a adição de elementos como formas interativas e animações – seja o uso mais tradicional para o JavaScript, ele também encontra uso em:

- **Jogos baseados em navegador da Web** - incluindo jogos 2D e 3D
- **Desenvolvimento de aplicativos móveis** - benéfico porque é agnóstico da plataforma telefônica
- **Apresentações** - a criação de plataformas de slides animados baseados na web

Embora a maioria dos aplicativos JavaScript sejam do lado do cliente, o JavaScript também é útil em aplicativos do lado do servidor, tais como a criação de servidores web.

### ****Vanilla JavaScript****

O Vanilla JavaScript é uma implementação leve de linguagem JavaScript pura sem bibliotecas adicionais. Aqui, o termo “Vanilla” refere-se ao JavaScript não-personalizado.

Muitas grandes empresas utilizam Vanilla JS, incluindo Google, Microsoft, Apple, Amazon, entre outras. O Vanilla JavaScript é uma excelente maneira de aprender os conceitos básicos da [](https://kinsta.com/pt/blog/melhor-linguagem-de-programacao/#javascript)programação JavaScript antes de adicionar recursos mais avançados oferecidos em bibliotecas.

### ****O JavaScript DOM****

O DOM, ou Document Object Model, atua como uma interface entre uma linguagem de programação como o JavaScript e um documento subjacente – especificamente, documentos HTML e XML.

DOM é um padrão W3C, definido como “uma plataforma e interface neutra em termos de linguagem que permite aos programas e scripts acessar e atualizar dinamicamente o conteúdo, a estrutura e o estilo de um documento”. Os documentos consistem de uma coleção de elementos e propriedades individuais (texto, botões, links, etc.).

### ****Promessas no JavaScript****

Uma promessa é um objeto que produz um resultado em um momento futuro. Na terminologia JavaScript, as promessas são conhecidas como produzir e consumir código.

As funções podem demorar um tempo não especificado e significativo para serem concluídas. O código de consumo aguarda os resultados do código de produção assíncrona antes de executar suas funções. As promessas definem a relação entre o código de produção e o código de consumo.

As promessas têm três estados possíveis: pendente, cumprido ou rejeitado. Na definição de uma promessa, são especificados dois argumentos: resolver ou rejeitar. Pendente é o estado inicial de uma promessa e significa que a promessa não foi cumprida nem rejeitada. Cumprida implica que a promessa retornou resolvida. Rejeitada significa que a promessa retornou. Uma promessa que não se encontra mais no estado pendente é considerada cumprida.

Um exemplo de sintaxe para criar uma promessa é:

```jsx
var newPromise = new Promise(
    function(resolve, reject) {
        // condition to be tested
    }
);
```
