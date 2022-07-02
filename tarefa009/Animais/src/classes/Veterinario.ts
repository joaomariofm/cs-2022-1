import { Animal } from "../abstractClasses";

export class Veterinario {
  //metodos
  public examinar(animal: Animal): void {
    console.log('o animal foi examinado');
    console.log(animal.som());
  }
}