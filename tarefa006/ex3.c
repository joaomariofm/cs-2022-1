#include <stdio.h>

int main(void) {

	float saldo;

	printf("Me informe o valor do saldo\n>> ");
	scanf("%f", &saldo);

	printf("O valor do saldo reajustado é de %.2f\n", saldo * 1.15);



	return 0;
}
