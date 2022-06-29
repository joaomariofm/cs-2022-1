#include <stdio.h>

float mediaAritmetica(float vetorDeNumeros[], int tamanhoDoVetor) {
	
	float soma = 0;

	for(int i = 0; i < tamanhoDoVetor; i++) {
		soma += vetorDeNumeros[i];
	}
	
	return soma / tamanhoDoVetor;
}

int main(void) {

	float numeros[10];

	numeros[0] = 8;
	numeros[1] = 9;
	numeros[2] = 7;

	float primeiraMedia = mediaAritmetica(numeros,3);

	printf("A média aritmética entre %.1f, %.1f e %.1f é %.1f\n", numeros[0], numeros[1], numeros[2], primeiraMedia);

	numeros[0] = 4;
	numeros[1] = 5;
	numeros[2] = 6;

	float segundaMedia = mediaAritmetica(numeros,3);

	printf("A média aritmética entre %.1f, %.1f e %.1f é %.1f\n", numeros[0], numeros[1], numeros[2], segundaMedia);
	
	printf("A soma das duas médias calculadas é %.1f\n", primeiraMedia + segundaMedia);

	numeros[0] = primeiraMedia;
	numeros[1] = segundaMedia;

	printf("A média das duas médias calculadas é %.1f\n", mediaAritmetica(numeros, 2));

	return 0;
}
