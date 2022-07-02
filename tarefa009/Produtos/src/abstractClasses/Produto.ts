export abstract class Produto {
  constructor(
    descricao: string,
    preco?: number,
    nomeloja?: string
  ) {
    this._descricao = descricao;
    if (preco) this._preco = preco;
    if (nomeloja) this._nomeloja = nomeloja;
  }

  //atributos
  private _nomeloja?: string;
  private _preco?: number;
  protected _descricao: string;

  //setters
  set nomeloja(nomeloja: string | undefined) {
    this._nomeloja = nomeloja;
  }

  set preco(preco: number | undefined) {
    this._preco = preco;
  }

  set descricao(descricao: string) {
    this._descricao = descricao;
  }

  //getters
  get nomeloja() {
    return this._nomeloja;
  }

  get preco() {
    return this._preco;
  }

  get descricao(): string {
    return 'Produto de informática'
  }
}