import { Cidade } from "./Cidade";

export class Bairro {
  constructor(nome:string) {
    this._nome = nome;
  }

  //atributos
  private _nome:string;
  private _cidade:Cidade;

  //setters
  set cidade(novaCidade:Cidade) {
    this._cidade = novaCidade;
  }
}