#include <stdio.h>

int main(void) {

	int numero;

	printf("Me informe um número inteiro\n>> ");
	scanf("%i", &numero);

	printf("O antecessor de %i é %i e seu sucessor é %i\n", numero, numero - 1, numero + 1);

	return 0;
}
