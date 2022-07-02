import { Animal } from "../abstractClasses";

export class Cachorro extends Animal {
  constructor(nome:string, idade:number) {
    super(nome, idade);
  }

  //métodos
  public som(): string {
    return 'Som de cachorro!';
  }

  public locomocao(): string {
    return 'correr';
  }
}