import { Endereco } from "./Endereco.js"

export class PessoaFisica {
  constructor(nome:string, sexo:string, dataNascimento:Date) {
    this._nome = nome;
    this._sexo = sexo;
    this._dataNascimento = dataNascimento;
  }

  //atributos
  private _nome:string;
  private _sexo:string;
  private _dataNascimento:Date;
  private _endereco:Endereco;

  //setters
  set endereco(novoEndereco:Endereco) {
    this.endereco = novoEndereco;
  }
}