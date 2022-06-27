#include <stdio.h>

int salariosMinimosQtd(float salarioMinimo, float salarioUsuario) {
	int qtd = salarioUsuario / salarioMinimo;

	return qtd;
}

int main(void) {

	float salarioMinimo, salarioUsuario;

	printf("Me informe o valor do salário mínimo\n>> ");
	scanf("%f", &salarioMinimo);

	printf("Me informe o valor do seu salário\n>> ");
	scanf("%f", &salarioUsuario);

	printf("Voce recebe %i salários mínimos\n", salariosMinimosQtd(salarioMinimo, salarioUsuario));

	return 0;
}
