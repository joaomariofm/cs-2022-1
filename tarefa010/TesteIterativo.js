import { generateRamdomArray, printArray } from './utilities/index.js'
import { mergeSortIterativo } from './mergeSort/index.js'

var first_array = generateRamdomArray(100);
var second_array = generateRamdomArray(1000);
var third_array = generateRamdomArray(10000);

console.log('Given array');
printArray(first_array);
process.stdout.write('\n');
mergeSortIterativo(first_array, first_array.length);
console.log('Sorted array');
printArray(first_array);
process.stdout.write('\n');

console.log('Given array');
printArray(second_array);
process.stdout.write('\n');
mergeSortIterativo(second_array, second_array.length);
console.log('Sorted array');
printArray(second_array);
process.stdout.write('\n');

console.log('Given array');
printArray(third_array);
process.stdout.write('\n');
mergeSortIterativo(third_array, third_array.length);
console.log('Sorted array');
printArray(third_array);
