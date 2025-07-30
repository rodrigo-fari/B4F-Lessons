/*
1995 inicialmente liveScript
1997 Padronizado pela ECMA
Linguagem de alto nivel para inetatividade e dinamismo do site

"let" <- Tipo de variavel dinamica
"document.getElementById()" Busca o elemnto pelo id no html

"const" <- Tipo de variavel constante (não pode ser alterada futuramente.)

Nome de variaveis:
	let: camelCaseNames;
	const: CAPSLOCK NAMES

console.log() <- Quando ultilizado com "," fica com espaços automaticos.
Quando ultilizado com "+" necessário adicionar espaços manualmente.

console log funciona normalmente com tabela ascii.

Strings com ${} no meio necessita de "`".

Ao declarar "n" no final de uma variavel do tipo "number", automaticamente
estamos afirmando que aquela variavel é do tipo BigInt.

** = elevado a.

=== tipo e valor
== tipo

!== tipo e valor
!= tipo

*/


//=======================================================ex01
console.log("\n=======================================================Ex01:");

let firstName = "Rodrigo";
const AGE = 24;

console.log("Meu nome é", firstName, "e tenho", AGE, "anos.");

//ou

console.log(`Meu nome é ${firstName}, e tenho ${AGE} anos. \n`)

//=======================================================ex02
console.log("=======================================================Ex02:");

let intNumber = 99n;
let floatNumber = 99.9;
let string = "This is a string"


console.log("Variable content:");
console.log(`INT number = ${intNumber}`);
console.log(`FLOAT number = ${floatNumber}`);
console.log(`String = ${string}`);

console.log("\n");

console.log("Variable type:");
console.log(typeof(intNumber));
console.log(typeof(floatNumber));
console.log(typeof(string));

//=======================================================ex03
console.log("=======================================================Ex03:");

let num = 1;
let str = '2';

console.log(num);
console.log(str);
console.log(num + str);
console.log(num - str);

let soma = num + str;

//=======================================================ex04
console.log("=======================================================Ex04:");
let num1 = 10;
let num2 = 15;
let media = (num1 + num2) / 2;

console.log(media);

//=======================================================ex05
console.log("=======================================================Ex05:");
let var1 = "Olá";
let var2 = "Mundo";

console.log(var1 + " " + var2);

//=======================================================ex06
console.log("=======================================================Ex06:");
let temChave = true;
let portaTrancada = true;

let podeAbrir = ((temChave == true && portaTrancada == false)
				|| temChave == true && portaTrancada == true)
				? true : false;

let precisaAjuda = !podeAbrir || portaTrancada == true;

console.log("Pode abrir a porta?", podeAbrir ? "Sim :D" : "Não :c");
console.log("Precisa de ajuda?", precisaAjuda ? "Sim :c" : "Não :D");