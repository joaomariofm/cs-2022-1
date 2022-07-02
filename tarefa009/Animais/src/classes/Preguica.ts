import { Animal } from "../abstractClasses";

export class Preguica extends Animal {
  constructor(nome:string, idade:number) {
    super(nome, idade);
  }

  //métodos
  public som(): string {
    return 'Som de preguica!';
  }

  public locomocao(): string {
    return 'subir em arvore';
  }
}