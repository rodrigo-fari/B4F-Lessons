#include <unistd.h>
#include <stdio.h>
#include <stdlib.h>
#include <ctype.h>
#include <string.h>

int main(void)
{
	int i = 0;
	while (i <= 50)
	{
		printf("Foi até gatinho [%d].\n", i);
		printf("Resgatou o gatinho [%d].\n", i);
		printf("Trouxe o gatinho [%d] de volta.\n", i);
		printf("----Preparação para restatar próximo----\n");
		if (i < 50)
			i++;
		else
		{
			printf("Todos os gatinhos resgatados com sucesso!");
			break;
		}
	}
	return (0);
}