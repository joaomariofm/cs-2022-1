enum TipoLogradouro {
  'Alameda',
  'Avenida',
  'Marginal',
  'Rua',
  'Rodovia',
  'Via',
  'Viela',
  'Travessa',
}

export class Logradouro {
  constructor(nome:string) {
    this._nome = nome;
  }

  //atributos
  private _nome:string;
  private _tipoLogradouro:TipoLogradouro;

  //setters
  set tipoLogradouro(novoTipo:TipoLogradouro) {
    this._tipoLogradouro = novoTipo;
  }
}