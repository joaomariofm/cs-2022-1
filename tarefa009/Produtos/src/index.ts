import { Mouse, Livro } from './classes';
import { Produto } from './abstractClasses'

const carrinho: Array<Produto> = [];

function mostraDescricoes(carrinhoDeItens: Array<Produto>) {
  carrinhoDeItens.forEach(item => {
    console.log(item.descricao);
  })
}

const mouse1 = new Mouse('gamer', 'Esse é um mouse gamer de auta performace');
const mouse2 = new Mouse('produtividade', 'Esse é um mouse voltado para a produtividade');
const livro1 = new Livro('Tolkien', 'Esse livro conta a história de um hobbit medroso que parte em uma grande aventura');
const livro2 = new Livro('Aghata Christie', 'Esse livro conta a história de um detetive investigando um assinato');

carrinho.push(mouse1);
carrinho.push(livro1);
carrinho.push(mouse2);
carrinho.push(livro2);

mostraDescricoes(carrinho);
