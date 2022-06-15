### Tarefa 004: Git Branching - 03/06/2021

1. Qual o nome do branch padrão do Git?
   - A branch padrão de git se chama "master", mais recentemente o git adotou o nome "main"
2. O que o comando **<code>git branch nome</code>** realiza?
   - É criada uma nova branch com o nome informado
3. Como criar um branch a partir de um commit específico?
   - Para fazer isso passamos o id do commit durante a criação da nova branch
4. Em um repositório, qual o efeito do comando **<code>git checkout -b bugfix/234</code>**?
   - Esse comando também criará uma nova branch com o nome "bugfix/234"
5. Qual o comando para se alternar para um branch de nome **experimento2**?
   - Para fazer isso executamos o seguinte comando
     ```
      git checkout experimento2
     ```
6. Em um repositório com dois branches, **b1** e **b2**, onde b1 é o corrente, qual o efeito do comando **<code>git branch</code>**?
   - Esse comando listará todas as branches ativas do projeto
7. O que o comando **<code>git checkout -b</code>** nome faz?
   - Esse comando criará uma nova branch com o nome informado
8. Qual a função do <code>**comando git branch -d teste</code>**?
   - Esse comando irá deletar a branch teste caso ela exista
9. Durante o desenvolvimento de um software é comum, por exemplo, utilizar um novo recurso por meio de experimentação. Talvez uma nova tecnologia, uma nova biblioteca que pode ser útil ao que está em desenvolvimento, ou até mesmo uma nova versão de um produto já empregado. Para que o uso deste novo recurso não interfira com o que é considerado pronto, um branch pode ser criado para a experimentação. Código que for criado para a experimentação existirá apenas no branch criado. Se eventualmente o experimento demonstrar um resultado satisfatório, as alterações realizadas no branch poderão ser incorporadas no que é considerado pronto, ou seja, no branch principal (master). Esta última ação é conhecida por merge. Neste item, crie uma sequência de comandos que simula um caso simples de criação e uso seguido de merge empregando um branch para ilustrar uma experimentação conforme acima. A sequência deve incluir, obrigatoriamente: (a) criação de um ou mais branches; (b) chaveamento para pelo menos dois branches e (c) merge.
   - Primeiramente criaremos uma nova branch e a selecionaremos:
     ```
      git checkout -b development
     ```
     Depois criaremos um novo arquivo dentro da branch que criamos 
     ```
      touch test.txt
     ```
     Agora criaremos um commit contendo esse novo arquivo
     ```
      git add .
      git commit -m "Testando nova feature"
     ```
     Por fim caso a nova feature estja funcionando como o esperado podemos fazer o merge da nossa branch development na nossa branch principal
     ```
      git checout master
      git merge development
     ```
</DIV/>
