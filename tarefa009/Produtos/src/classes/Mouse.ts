import { Produto } from "../abstractClasses";

export class Mouse extends Produto{
  constructor(tipo: string, descricao: string) {
    super(descricao);
    this._tipo = tipo;
  }

  //atributos
  private _tipo: string;

  //setters
  set tipo(tipo: string) {
    this._tipo = tipo;
  }

  set descricao(descricao: string) {
    this._descricao = descricao;
  }

  //getters
  get descricao(): string {
    return `Tipo: ${this._tipo} - ${this._descricao}`;
  }

}