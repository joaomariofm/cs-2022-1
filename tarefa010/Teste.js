import { generateRamdomArray, printArray } from './utilities/index.js'
import { mergeSortIterativo, mergeSortRecursivo } from './mergeSort/index.js'

var first_array = generateRamdomArray(100);
var second_array = generateRamdomArray(1000);
var third_array = generateRamdomArray(10000);

console.log('Given array');
printArray(first_array);
process.stdout.write('\n');
mergeSortRecursivo(first_array, 0, first_array.length - 1);
console.log('Sorted array');
printArray(first_array);
process.stdout.write('\n');

console.log('Given array');
printArray(second_array);
process.stdout.write('\n');
mergeSortRecursivo(second_array, 0, second_array.length - 1);
console.log('Sorted array');
printArray(second_array);
process.stdout.write('\n');

console.log('Given array');
printArray(third_array);
process.stdout.write('\n');
mergeSortRecursivo(third_array, 0, third_array.length - 1);
console.log('Sorted array');
printArray(third_array);
