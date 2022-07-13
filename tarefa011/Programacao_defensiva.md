# Programção Defensiva 🛡

## O que é programação defensiva?

> "Nunca confie nos dados inseridos pelo usuário"

Para que seu código possa ser utilizado, existem certos métodos e classes que são públicos, destinados a se comunicarem com o mundo externo, e outros que só precisam ser utilizados internamente. Todos esses métodos e classes públicos são as portas de entrada para seu código, e estão lidando com território desconhecido.

Uma maneira inteligente de garantir que o fluxo esperado dos dados seja seguido é validar qualquer dado que seja enviado pelas fontes externas, criando uma barreira de proteção. Se essa barreira funcionar direitinho, os métodos e classes internas não precisarão fazer outras validações, pois os dados que serão repassados a eles são limpos e confiáveis.

## Como Tratar erros?

Podemos adotar diferentes abordagens para tratar erros encontrados durante o funcionamento do nosso sitema com relação aos dados de entrada que recebemos, dentre essas abordagens podemos citar:

- Converter para o valor mais próximo

- Retornar uma valor padrão para a operação

- Retornar um código de erros

- Finalizar a aplicação
