/*
JavaScript Aula 2: Arrays e Objetos:
(Notas pre-aula:)

====== Arrays:

-- Definição de um array:
let frutas = ['fruta1', 'fruta2', 'fruta3'];

-- Atribuição / acesso ao array:
let frutaUm = frutas[0];
let frutaDois = frutas[1];
console.log(frutaUm); OUTP: fruta1
console.log(frutaDois); OUTP: fruta2

-- Tamanho e substituição de item no índice:
let tamanhoDoArray = frutas.lenght; (tamanhoDoArray = 3)
frutas[2] = 'uva'; (Substitui o ultimo indíce do array por 'uva')
(Sabemos que é o último pois definimos manualmente (HardCoded)).

-- Adição e remoção de itens no fim do array:
frutas.push('pera'); (Adiciona no final do array)
frutas.pop(); (Remove o ultimo elemento da lista (no caso pera))

====== Objetos:

-- Declaração de um objeto:
const PERSON = {
	name: "Alice",
	age: 30,
	job: "Teacher"
};

-- Aceder a parâmetros do objeto: (Notação de ponto / caixas)
console.log(person.name); OUTP: Alice
console.log(person["age"]); OUTP: 30

-- Alteração e edição de objeto:
person.age = 31
console.log(person.age); OUTP: 31
person.city = "NewYork"; (Nova propriedade da classe)
console.log(person.city); OUTP: NewYork

-- Remoção de propriedade do objeto:
delete person.job;
console.log(person.job); OUTP: Undefined!


*/