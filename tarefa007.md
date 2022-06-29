# Análise do vídeo "6 dicas fundamentais para um código de qualidade"

O vídeo usa como base um artigo escrito po Daan, um desenvolvedor backend da Holanda, que analisa alguns fatores que devem ser levados em consideração durante o processo de desenvolvimento para que o código produzido tenha melhor qualidade. Abaixo estão listados os fatores apontados por Daan e discutidos por Felipe Deschamps em seu vídeo.

## As 6 dicas

### Dica #1 - Princípio dos quatro olhos

O princípio dos quatro olhos faz referência ao número de pessoas que deveriam ser responsáveis por revisar o código escrito por uma outra pessoa. Dessa forma, se um programador escreve uma nova funcionalidade, correção de bug ou um trecho com outra finalidade, 2 outras pessoas deveriam ser responsáveis por revisar o que foi escrito por esse programador.
O Felipe (criador do vídeo) ainda trás uma citação de Linus Torvald conhecido como "Linus Law", que diz:

> "Com um quantidade suficiente de olhos
> todos os erros são razos".

O que complementa a ideia de que ter um número considerável de pessoas analisando o que foi feito por uma outra facilita o processo de resolução de possíveis problemas.

### Dica #2 - Integração contínua

O conceito de Integração contínua, em ingles "Continuous Integration" (CI), é importante para prevenir, como diz o autor do artigo, discussões em que são apontados problemas como *"Mas funcionou no servidor de desenvolvimento"* ou *"Mas funciona na minha máquina"*. Isso acontece porque, integração contínua consiste em integração do trabalho feito pelos programadores da equipe, assim são executados testes frequentemente para todas as alterações feitas por eles.

### Dica #3 - Convenções no código

As convenções de código cumprem seu papel em uniformizar a escrita do código facilitando a leitura já que todos trabalhando no projeto estão seguindo um conjunto de regras de escrita bem determinada. Porém, é importante que todos que estão trabalhando no projeto estejam de acordo com as convenções definidas.

### Dica #4 - Testes, testes e testes

O autor do artigo nos diz o seguinte

> "Quanto menor a quantidade de bugs em um código, maior é a sua qualidade."

Essa afirmação nos leva a pensar sobre a importância dos testes dentro do fluxo de densenvolvimento já que os testes são responsáveis por previnir e identificar bugs. Assim seguindo o que foi dito pelo autor do artigo podemos entender que a presença de testes dentro dos espaços de desenvolvimento está diretamente relacionada com a qualidade do código.

![tests](https://miro.medium.com/max/1400/0*v6btYB1Xtb9crWQv.png)

O artigo nos apresenta a pirâmide de testes, que pode ser vista acima. Essa pirâmide nos mostra que a maior quantidade de testes que devem estar presentes em um projeto são os testes unitários, isso devido a seu preço e sua velocidade, esse tipo de teste costuma ser barato e veloz.

### Dica #5 - Analisar Bugs

Podemos afirmar que bugs são inevitáveis dentro de um projeto, logo, oq eu realmente importa é a forma como lidamos com esses bugs. O autor do artigo infatiza que a análise de bugs é essencial para o desenvolvimento de desenvolvedores, que utilizam dessa análise para aprender com seus erros. Para enfatizar essa ideia ele nos trás uma citação de Henry Fors que diz o seguinte

> "O único erro real é aquela com o qual nós não aprendemos nada."

Além disso, outro fator descutido nessa seção é a priorização de bugs uma vez que é preciso analisar a gravidade de um bug e soluciona-lo de acordo com a prioridade atribuída a ele.

### Dica #6 - Métricas de código

Esse trecho faz referência a algumas métricas já definifas que podem ser úteis para analisar a qualidade do código, como métricas de defeito ou métricas de complexidade.

## Quais pontos são novidade para mim ?

Dentro os pontos abordados no vídeo posso considerar que os seguintes tópicos são novidade para mim:

- Princípio dos quatro olhos
- Analisar Bugs
- Métricas de código

## Quais dicas eu já conhecia ?

Dentre as 6 dicas que foram abordadas no vídeo, eu já tive contato com:

- Integração contínua
- Convenções no código
- Testes

## Conclusão

Considero de extrema importância todos os tópicos que foram abordados pelo vídeo, todos os 6 pontos são de alta relevância quando se tratando de desenvolvimento e manutenção de código. A partir deles podemos perceber que para alcançar a alta qualidade de código nos projetos que desenvolvemos é preciso manter uma constante rotina de revisão em equipe do que está sendo entregue, é preciso que o projeto siga um conjunto de padronizações e que todos os integrantes da equipe responsável pelo projeto estejam por dentro e de acordo com as convenções definidas, precisamos testar, prioritariamente de forma rápida e barata, o código que está sendo entregue, também precisamos aprender sobre a díficil tarefa de priorizar bugs e usar a análise deles para que os desenvolvedores, juntamente com o projeto, evoluam, e também é essencial que seja feita uma análise geral do projeto para entendamos atributos como defeitos e nível de complexidade daquilo que está sendo contruído.
