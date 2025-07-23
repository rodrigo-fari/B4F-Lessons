#include <unistd.h>
#include <stdio.h>
#include <stdlib.h>
#include <ctype.h>
#include <string.h>

int calc(int num_a, int num_b, char *operation)
{
	if (strchr(operation, '*') != NULL)
		return (num_a * num_b);
	else if (strchr(operation, '/') != NULL)
		return (num_a / num_b);
	else if (strchr(operation, '+') != NULL)
		return (num_a + num_b);
	else if (strchr(operation, '-') != NULL)
		return (num_a - num_b);
	else
		return (0);
}

int main(int ac, char **av)
{
	if (ac != 4)
	{
		printf("Invalid usage. try: 1 + 1");
		return (1);
	}
	int num_a = atoi(av[1]);
	int num_b = atoi(av[3]);
	printf("Resultado: %d\n", calc(num_a, num_b, av[2]));
	return (0);
}