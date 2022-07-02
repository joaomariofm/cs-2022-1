import { Animal } from "../abstractClasses";

export class Cavalo extends Animal {
  constructor(nome:string, idade:number) {
    super(nome, idade)
  }

  //métodos
  public som(): string {
    return 'Som de cavalo!';
  }

  public locomocao(): string {
    return 'correr';
  }
}