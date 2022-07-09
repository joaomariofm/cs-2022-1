// Implementação recursiva do algoritmo Merge Sort em JavaScript

/**
 * Mescla dois subarrays de array[]. O primeiro subarray 
 * é array[l..m], o segundo subarray é array[m+1..r]
 * sendo l o index do primeiro elemento do array m é o 
 * index do elemento do meio do array e r é o index 
 * do elemento do fim do array
 */
function merge(array, l, m, r)
{
  var n1 = m - l + 1;
  var n2 = r - m;

  // Cria arrays temporários
  var L = new Array(n1);
  var R = new Array(n2);

  // Copia dados para os arrays temporários L[] e R[]
  for (i = 0 ; i < n1; i++)
    L[i] = array[l + i];
  for (j = 0; j < n2; j++)
    R[j] = array[m + 1 + j];

  /**
   * Mescla os arreis temporários de volta para 
   * array[l..r], ordenando os elementos inseridos
   */

  // Index inicial do primeiro subarray
  var i = 0;

  // Index inicial do segundo subarray
  var j = 0;

  // Index inicial do subarray mesclado
  var k = l;

  while (i < n1 && j < n2) {
    if (L[i] <= R[j]) {
      array[k] = L[i];
      i++;
    }
    else {
      array[k] = R[j];
      j++;
    }
    k++;
  }

  /**
   * Copiando os elementos restantes de 
   * L[], caso existam
   */
  while (i < n1) {
    array[k] = L[i];
    i++;
    k++;
  }

  /**
   * Copiando os elementos restantes de 
   * R[], caso existam
   */
  while (j < n2) {
    array[k] = R[j];
    j++;
    k++;
  }
}

// l is for left index and r is
// right index of the sub-array
// of arr to be sorted 
function mergeSort(arr, l, r){
  if(l>=r){
    return;//returns recursively
  }
  var m = l + parseInt((r-l)/2);
  mergeSort(arr,l,m);
  mergeSort(arr,m+1,r);
  merge(arr,l,m,r);
}

// UTILITY FUNCTIONS
// Function to print an array
function printArray( A, size)
{
  for (var i = 0; i < size; i++)
    process.stdout.write(`${A[i]} `);

  process.stdout.write('\n');
}


var input_array = [ 12, 11, 13, 5, 6, 26 ];
  var arr_size = input_array.length;

  console.log('Given array');
  printArray(input_array, arr_size);
  process.stdout.write('\n');

  mergeSort(input_array, 0, arr_size - 1);

  console.log('Sorted array');
  printArray(input_array, arr_size);
