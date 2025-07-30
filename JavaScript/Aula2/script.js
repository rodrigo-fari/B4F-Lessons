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

//ex01
function ex01() {

	let city = [
		"Porto",
		"Vila Nova de Gaia",
		"Maia"
	];

	console.log("Size = " + city.length);

	for (let i = 0; i < city.length; i++) {
		console.log("Index [" + i + "] = " + city[i]);
	}
	console.log("\nFirst city = " + city[0]);
	console.log("\nMiddle index = " + city[1]);

	console.log("\nBefore change:");
	for (let i = 0; i < city.length; i++) {
		console.log("Index [" + i + "] = " + city[i]);
	}

	city[1] = "Gondomar"
	console.log("\nAfter change:");
	for (let i = 0; i < city.length; i++) {
		console.log("Index [" + i + "] = " + city[i]);
	}

	city.push("Leiria");
	console.log("\nAdded new index to array:");
	for (let i = 0; i < city.length; i++) {
		console.log("Index [" + i + "] = " + city[i]);
	}

	console.log("New size = " + city.length);

	city.pop("Leiria");
	console.log("\nRemoved last index of the array:");
	for (let i = 0; i < city.length; i++) {
		console.log("Index [" + i + "] = " + city[i]);
	}

	console.log("New size = " + city.length);

	console.log("\nFinal array's version:");
	for (let i = 0; i < city.length; i++) {
		console.log("Index [" + i + "] = " + city[i]);
	}
}

function ex02() {
	let animals = [
		"Cão",
		"Gato",
		"Coelho",
		"Pássaro",
		"Peixe"
	];

	console.log("--| New array:");
	for (let i = 0; i < animals.length; i++) {
		console.log("Index [" + i + "] = " + animals[i]);
	}

	console.log("\n--| Remove last array item");
	animals.pop();
	console.log("New array:");
	for (let i = 0; i < animals.length; i++) {
		console.log("Index [" + i + "] = " + animals[i]);
	}

	console.log("\n--| Add item at the end");
	animals.push("Hamster");
	console.log("New array:");
	for (let i = 0; i < animals.length; i++) {
		console.log("Index [" + i + "] = " + animals[i]);
	}

	console.log("\n--| Remove first array item");
	animals.shift();
	console.log("New array:");
	for (let i = 0; i < animals.length; i++) {
		console.log("Index [" + i + "] = " + animals[i]);
	}

	console.log("\n--| Add new first array item");
	animals.unshift("Cavalo");
	console.log("New array:");
	for (let i = 0; i < animals.length; i++) {
		console.log("Index [" + i + "] = " + animals[i]);
	}

	console.log("\n--| Changind index 2");
	animals[2] = "Tartaruga";
	console.log("New array:");
	for (let i = 0; i < animals.length; i++) {
		console.log("Index [" + i + "] = " + animals[i]);
	}

	console.log("\n--| Single lined array:" + animals);
}

function ex03() {
	let carro = {
		marca: "Opel",
		modelo: "Corsa",
		ano: "1998",
		cor: "Azul"
	};

	console.log("Original OBJ:");
	console.log(carro);
	console.log("\n");

	console.log("Chaging color to black...")
	carro.cor = "preto";
	console.log("\n");

	console.log("Updated OBJ:");
	console.log(carro);
	console.log("\n");

	console.log("Adding new key:value...");
	carro.quilometragem = "999999km";
	console.log("\n");

	console.log("Updated OBJ:");
	console.log(carro);
	console.log("\n");

	console.log("Deleting new key:value...");
	delete carro.quilometragem;
	console.log("\n");

	console.log("Updated OBJ:");
	console.log(carro);
	console.log("\n");
}

ex03();
