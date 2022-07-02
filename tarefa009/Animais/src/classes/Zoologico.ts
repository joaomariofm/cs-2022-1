import { Animal } from "../abstractClasses";

export class Zoologico {
  constructor(){
    this.jaulas = [];
  }

  //atributos
  public jaulas: Array<Animal>;

  //métodos

  public visitar() {
    this.jaulas.forEach(animal => {
      console.log(animal.som());

      if (animal.locomocao() === 'correr') {
        console.log(animal.nome, 'está correndo');
      }
    });
  }

  public adicionarAnimalAJaula(animal: Animal){
    this.jaulas.push(animal);
  }

  public removerAnimalDaJaula() {
    const animal = this.jaulas.pop();

    if (animal) {
      console.log(animal.nome, 'saiu da jaula');
      return;
    }

    console.log('A jaula está vazia');
  }

}