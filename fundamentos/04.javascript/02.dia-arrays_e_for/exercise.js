let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log();

// Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

// Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
// A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.

// Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

// 🚀 Utilizando for, descubra qual o maior valor contido no array e imprima-o;

// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

// Utilizando for, descubra qual o menor valor contido no array e imprima-o;

// Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;

// Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.



// // EXERCÍCIO 1
// for (let number of numbers) {
//     console.log(number)
// }

// // EXERCÍCIO 2
// let sum = 0;
// for(let pos = 0; pos < numbers.length; pos += 1) {
//     sum = sum + numbers[pos];
// }

// console.log(sum);

// //EXERCÍCIO 3
// let media = 0;
// let sum = 0;
// for(let pos = 0; pos < numbers.length; pos += 1) {
//     sum = sum + numbers[pos];
// }

// console.log(sum / numbers.length)


// // EXERCÍCIO 4
// if ((sum / numbers.length) > 20) {
//     console.log('Number bigger than twenty');
// }
// else {
//     console.log('Number smallest than twenty');
// }

// // EXERCÍCIO 5
// let biggest;
// for(let pos = 0; pos < numbers.length; pos += 1) {
//     if (numbers[pos] == numbers[0]) {
//         biggest = numbers[pos];
//     }
//     else {
//         if (numbers[pos] > biggest) {
//             biggest = numbers[pos];
//         }
//     }
// }
// console.log(biggest);

// // EXERCÍCIO 6
// let odd = 0;
// for (number of numbers) {
// 	if (number % 2 != 0){
// 		odd += 1
// 	}
// }
// if (odd == 0) {
// 	console.log('Theres no odds numbers')
// }
// else {
// 	console.log(odd)
// }

// // EXERCÍCIO 7
// let smallest;
// for(let pos = 0; pos < numbers.length; pos += 1) {
//     if (numbers[pos] == numbers[0]) {
//         smallest = numbers[pos];
//     }
//     else {
//         if (numbers[pos] < smallest) {
//             smallest = numbers[pos];
//         }
//     }
// }
// console.log(smallest);


// // EXERCÍCIO 8
// let list = [];
// for (let index = 1; index <= 25; index += 1) {
// 	list.push(index);
// }
// console.log(list);



// // EXERCÍCIO 9
// let list = [];
// let divided;
// for (let index = 1; index <= 25; index += 1) {
// 	divided = index / 2;
// 	list.push(divided);
// }
// console.log(list);