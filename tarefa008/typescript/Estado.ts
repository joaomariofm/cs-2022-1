import { Pais } from "./Pais";

export class Estado {
  constructor(nome:string, sigla:string) {
    this.nome = nome;
    this._sigla = sigla;
  }

  //atributos
  public nome:string;
  private _sigla:string;
  private _pais:Pais;

  //setters
  set pais(novoPais:Pais) {
    this.pais = novoPais;
  }

  //getters
  public get sigla() {
    return this._sigla;
  }

  public get pais() {
    return this._pais;
  }
}