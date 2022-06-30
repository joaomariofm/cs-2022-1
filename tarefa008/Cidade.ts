import { Estado } from "./Estado";

export class Cidade {
  constructor(nome:string) {
    this._nome = nome;
  }

  //atributos
  private _nome:string;
  private _estado:Estado;

  //setters
  set estado(novoEstado:Estado) {
    this.estado = novoEstado;
  }

  //getters
  public get nome() {
    return this._nome;
  }

  public get estado() {
    return this._estado;
  }
}