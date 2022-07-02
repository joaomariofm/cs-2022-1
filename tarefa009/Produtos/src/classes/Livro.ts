import { Produto } from "../abstractClasses";

export class Livro extends Produto{
  constructor(autor: string, descricao: string) {
    super(descricao);
    this._autor = autor;
  }

  //atributos
  private _autor: string;

  //setters
  set autor(tipo: string) {
    this._autor = tipo;
  }

  set descricao(descricao: string) {
    this._descricao = descricao;
  }

  //getters
  get descricao(): string {
    return `Autor: ${this._autor} - ${this._descricao}`;
  }

}