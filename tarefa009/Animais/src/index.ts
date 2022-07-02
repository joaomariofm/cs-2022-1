import { Animal } from "./abstractClasses"
import { Cachorro, Cavalo, Preguica, Veterinario, Zoologico } from './classes'

function emitirSom(animal: Animal): void {
  console.log(animal.som());
}

const cachorro = new Cachorro('rex', 12);
const cavalo = new Cavalo('silver', 10);
const preguica = new Preguica('steve', 23);

const cachorro2 = new Cachorro('bob', 12);
const cavalo2 = new Cavalo('alazao', 10);
const preguica2 = new Preguica('pericles', 23);
const cachorro3 = new Cachorro('thor', 12);
const cavalo3 = new Cavalo('carlos', 10);
const preguica3 = new Preguica('priscila', 23);
const preguica4 = new Preguica('fatima', 23);

const veterinario = new Veterinario();

const zoologico = new Zoologico();

console.log('1.2\n');
emitirSom(cachorro);
emitirSom(cavalo);
emitirSom(preguica);
console.log('');

console.log('1.3\n');
veterinario.examinar(cachorro);
veterinario.examinar(cavalo);
veterinario.examinar(preguica);
console.log('');

console.log('1.4\n');
zoologico.adicionarAnimalAJaula(cachorro);
zoologico.adicionarAnimalAJaula(preguica);
zoologico.adicionarAnimalAJaula(cavalo);
zoologico.adicionarAnimalAJaula(cachorro2);
zoologico.adicionarAnimalAJaula(preguica2);
zoologico.adicionarAnimalAJaula(cavalo2);
zoologico.adicionarAnimalAJaula(cachorro3);
zoologico.adicionarAnimalAJaula(preguica3);
zoologico.adicionarAnimalAJaula(cavalo3);
zoologico.adicionarAnimalAJaula(preguica4);

zoologico.visitar();
console.log('');
