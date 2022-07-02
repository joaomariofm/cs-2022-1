export abstract class Animal {
  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }

  //atributos
  public nome:string;
  public idade:number;

  //métodos
  public abstract som(): string;
  public abstract locomocao():string
}