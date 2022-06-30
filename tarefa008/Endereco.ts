import { Bairro } from "./Bairro";

enum TipoEndereco {
  'Comercial',
  'Residencial',
}

export class Endereco {
  constructor(numero:number, complemento:string, CEP:number) {
    this._numero = numero;
    this._complemento = complemento;
    this._CEP = CEP;
  }

  //atributos
  private _numero:number;
  private _complemento:string;
  private _CEP:number;
  private _tipoEndereco:TipoEndereco;
  private _bairro:Bairro;

  //setters
  public set tipoEndereco(novoTipo:TipoEndereco) {
    this._tipoEndereco = novoTipo;
  }

  set bairro(novoBairro:Bairro) {
    this._bairro = novoBairro;
  }

  //getters
  public get numero() {
    return this._numero;
  }
}