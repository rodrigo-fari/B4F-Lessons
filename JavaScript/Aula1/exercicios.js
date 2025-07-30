/*
===============================================================
			Exercícios de consolidação de conteúdo
===============================================================
*/

let secondName = "Falcão";
let num1 = 1;
let num2 = 2;
let sentence = "Estou aprendendo JavaScript!";
let powerOf = num1 ** num2;
let rectBase = 10;
let rectSide = 5;
let thisIsTrue = true;
let literalNumber = "2";

console.log("1 - Cria um script que imprime teu nome no terminal.");
let personalName = "Rodrigo";
console.log("Nome = " + personalName);
console.log('\n');

console.log("2 - Cria uma variável chamada idade e imprime seu valor.");
let age = 24;
console.log("Idade = " + age);
console.log('\n');

console.log("3 - Cira uma constante chaada PAIS, com o nome de um país à tua escola e imprime-a.");
const PAIS = "Brasil";
console.log("PAIS = " + PAIS);
console.log('\n');

console.log("4 - Declara duas variáveis com números e imprime a soma delas.");
console.log("Número 1 = " + num1);
console.log("Número 2 = " + num2);
console.log("Soma = " + (num1 + num2));
console.log('\n');

console.log("5 - Cria uma variável chamada 'frase' com a frase 'Estou aprendendo JavaScript!' e imprime-a.");
console.log("Frase = " + sentence);
console.log('\n');

console.log("6 - Imprime uma frase com quebras de linha e tabulações.");
console.log("Frase = " + "Meu\n nome\n é\n\tRodrigo");
console.log('\n');

console.log("7 - Cria uma variável com a tua idade, e incrementa-a em 1 com o operador de incremento.");
console.log("Idade = " + IDADE);
console.log("Idade++ = " + age++);
console.log('\n');

console.log("8 - Cria duas variaveis e usa o operador de subtração para obter a diferença entre elas.");
console.log("Número 1 = " + num1);
console.log("Número 2 = " + num2);
console.log("Subtração = " + num2 - num1);
console.log('\n');

console.log("9 - Usa o operador de multiplicação para calcular a área de um retângulo com base e altura definidas.");
console.log("Base do retângulo = " + rectBase);
console.log("Lado do retângulo = " + rectSide);
console.log("Base x Lado = " + (rectBase * rectSide));
console.log('\n');

console.log("10 - Usa o operador 'módulo' para saber o resto da divisão de 10 por 3.");
console.log("Módulo da divisão = " + (10 % 3));
console.log('\n');

console.log("11 - Usa uma variável para guardar um número e eleva-o ao quadrado ultilizando o operador '**'.");
console.log("Número 1 = " + num1);
console.log("Número 2 = " + num2);
console.log("Número 1 ** Numero 2 = " + powerOf);
console.log('\n');

console.log("12 - Cria uma variável de valor booleano, e inverte esse valor com o operador '!'.");
console.log("Variável booleana = " + thisIsTrue);
console.log("!Variável booleana = " + !thisIsTrue);
console.log('\n');

console.log("13 - Compara duas variáveis com '==' e imprime o resultado.");
console.log(num1 == literalNumber);
console.log('\n');

console.log("14 - Compara duas variáveis com '===' e imprime o resultado.");
console.log(num1 === literalNumber);
console.log('\n');

console.log("15 - Usa operadores de atribuição combinados (+=,-=), com variáveis numéricas.");
num1 += num2;
console.log(num1);
num1 *= num2;
console.log(num1);
console.log('\n');

console.log("16 - Cria duas strings com o teu nome e apelido e concatena-as numa terceira variável.");
let fullName = personalName + secondName;
console.log(fullName);
console.log('\n');

console.log("17 - Usa template strings (``) para imprimir: \"O meu nome é [NOME], e tenho [IDADE] anos.\"");
console.log(`Meu nome é ${personalName}, e tenho ${age} de idade.`);
console.log('\n');

console.log("18 - Cria uma variável sem valor atríbuido. Imprime seu valor.");
let nothing;
console.log(nothing);
console.log('\n');

console.log("19 - Compara dois valores com '>' e imprime o resultado.");
console.log(num1 > num2);
console.log('\n');

console.log("20 - Cria três variáveis: nome, idade e país. Usa concatenação para criar uma frase completa com essas informações.");
console.log("Meu nome é" + personalName + ", tenho " + age + " e meu país de origem é o " + PAIS);
console.log('\n');