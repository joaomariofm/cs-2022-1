#include <stdio.h>

int main(void) {

	int IPI;
	int codigo1, qtd1, codigo2, qtd2;
	float valor1, valor2;

	printf("Me informe a porcentagem do IPI\n>> ");
	scanf("%i", &IPI);

	printf("Me informe o código, o valor e quantidade da peca 1\n>> ");
	scanf("%i %f %i", &codigo1, &valor1, &qtd1);

	printf("Me informe o código, o valor e quantidade da peca 2\n>> ");
        scanf("%i %f %i", &codigo2, &valor2, &qtd2);

	float valorTotal = (valor1 * qtd1 + valor2 * qtd2) * (IPI/100 + 1);

	printf("O valor total a ser pago é de R$ %.2f\n", valorTotal);


	return 0;
}
