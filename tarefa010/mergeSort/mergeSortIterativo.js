// Implementação iterativa do algoritmo Merge Sort em JavaScript

/**
 * Mescla dois subarrays de array[]. O primeiro subarray 
 * é array[l..m], o segundo subarray é array[m+1..r]
 * sendo l o index do primeiro elemento do array m é o 
 * index do elemento do meio do array e r é o index 
 * do elemento do fim do array
 */
function merge(array, l, m, r) {
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

function mergeSort(arr , n) {

  var curr_size;
  var left_start;

  for (curr_size = 1; curr_size <= n - 1; curr_size = 2 * curr_size) {
    for (left_start = 0; left_start < n - 1; left_start += 2 * curr_size) {
      
      var mid = Math.min(left_start + curr_size - 1, n - 1);
      var right_end = Math.min(left_start + 2 * curr_size - 1, n - 1);
      merge(arr, left_start, mid, right_end);
    }
  }
}

export { mergeSort };
