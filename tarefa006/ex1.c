#include <stdio.h>

int anosEmDias(int anos) {
	return anos * 365;
}

int mesesEmDias(int meses) {
	return meses * 30;
}

int main(void) {

	int anosDeVida, mesesDeVida, diasDeVida, diasTotais;

	printf("Me informe seus anos de vida\n>> ");
	scanf("%i", &anosDeVida);

	printf("Me informe seus meses de vida\n>> ");
	scanf("%i", &mesesDeVida);

	printf("Me informe seus dias de vida\n>> ");
	scanf("%i", &diasDeVida);

	diasTotais = diasDeVida + mesesEmDias(mesesDeVida) + anosEmDias(anosDeVida);

	printf("Voce possui %i dias de vida.\n", diasTotais);

	return 0;
}
