let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 1 Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log();


// 2 Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

// 3 Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
// A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.

// 4 Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

// 🚀  5 Utilizando for, descubra qual o maior valor contido no array e imprima-o;

// 6 Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

// 7 Utilizando for, descubra qual o menor valor contido no array e imprima-o;

// 8 Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;

// 9 Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.



// // EXERCÍCIO 1
// for (let number of numbers) {
//     console.log(number)
// }
// // FAZER UM LAÇO PERCORRENDO TODOS OS OBJETOS DENTRO DO ARRAY


// // EXERCÍCIO 2
// let sum = 0;
// for(let pos = 0; pos < numbers.length; pos += 1) {
//     sum = sum + numbers[pos];
// }
// console.log(sum);
// // FAZER UM LAÇO PERCORRENDO TODOS OS OBJETOS DENTRO DO ARRAY
// // CRIAR UMA VARIÁLVEL
// // FAZER COM QUE ELA GUARDE O VALOR DOS NÚMERO (SE SOMANDO)


// //EXERCÍCIO 3
// let media = 0;
// let sum = 0;
// for(let pos = 0; pos < numbers.length; pos += 1) {
//     sum = sum + numbers[pos];
// }
// console.log(sum / numbers.length)
// // FAZER UM LAÇO PERCORRENDO TODOS OS OBJETOS DENTRO DO ARRAY
// // CRIAR UMA VARIÁLVEL
// // FAZER COM QUE ELA GUARDE O VALOR DOS NÚMERO (SE SOMANDO)
// // FAZER OUTRA VARIÁVEL
// // FAZER COM QUE ESSA VARIÁVEL ARMAZENE A SOMA TOTAL DA OUTRA VARIÁVEL E DIVIDA PELO LENGHT DO ARRAY


// // EXERCÍCIO 4
// let sum = 0;
// for(let pos = 0; pos < numbers.length; pos += 1) {
//     sum = sum + numbers[pos];
// }
// if ((sum / numbers.length) > 20) {
//     console.log('Number bigger than twenty');
// }
// else {
//     console.log('Number smallest than twenty');
// }
// // FAZER UM LAÇO PERCORRENDO TODOS OS OBJETOS DENTRO DO ARRAY
// // CRIAR UMA VARIÁLVEL
// // FAZER COM QUE ELA GUARDE O VALOR DOS NÚMERO (SE SOMANDO)
// // FAZER OUTRA VARIÁVEL
// // FAZER COM QUE ESSA VARIÁVEL ARMAZENE A SOMA TOTAL DA OUTRA VARIÁVEL E DIVIDA PELO LENGHT DO ARRAY
// // CASO O VALOR FOR MAIOR QUE VINTE IMPRIMIR: VALOR MAIOR QUE 20
// // CASO O VALOR FOR MENOR, IMPRIMIR: MENOR QUE 20


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
// // CRIAR A VARIÁVEL MAIOR
// // FAZER UM LOOP PARA PERCORRER O ARRAY
// // CASO FOR A PRIMEIRA POSIÇÃO (0) DO LOOP, O NUMERO É DETERMINADO DENTRO DA VARIÁVEL MAIOR
// // SE NÃO FOR A PRIMEIRA POSIÇÃO DO LOOP: COMPARAR O MAIOR COM O NÚMERO DAS OUTRAS POSIÇÕES.
// // CASO O NÚMERO DE OUTRA POSIÇÃO FOR MAIOR, ELE FICA GUARDADO NA VARIÁVEL MAIOR



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
// // CRIAR VARIÁVEL ÍMPAR
// // FAZER UM LAÇO PERCORRER TODO ARRAY
// // FAZER O LAÇO PASSANDO UM POR UM VENDO SE O RESTO DA DIVISÃO É IGUAL A 0
// // CASO NÃO SEJA, É ADICIONADO +1 NO CONTADOR (VARIÁVEL ÍMPAR)
// // CASO NÃO HAJA NÚMEROS ÍMPARES: IMPRIMIR MENSAGEM 'NÃO HÁ NÚMEROS ÍMPARES'
// // CASO HAJA, IMPRIMIR APENAS O CONTADOR DE NÚMERO ÍMPARES



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
// // CRIAR VARIÁVEL MENOR
// // FAZER UM LOOP PARA PERCORRER O ARRAY
// // CASO FOR A PRIMEIRA POSIÇÃO (0) DO LOOP, O NUMERO É DETERMINADO DENTRO DA VARIÁVEL MENOR
// // SE NÃO FOR A PRIMEIRA POSIÇÃO DO LOOP: COMPARAR O MENOR COM O NÚMERO DAS OUTRAS POSIÇÕES.
// // CASO O NÚMERO DE OUTRA POSIÇÃO FOR MENOR, ELE FICA GUARDADO NA VARIÁVEL MENOR




// // EXERCÍCIO 8
// let list = [];
// for (let index = 1; index <= 25; index += 1) {
// 	list.push(index);
// }
// console.log(list);
// // CRIAR UMA LISTA VAZIA
// // FAZER UMA LOOP PERCORRER UM ARRAY COM OS VALORES DE 1 A 25
// // UTILIZAR A FUNÇÃO PARA ADICIONAR CADA NÚMERO DENTRO DA LISTA VAZIA
// // IMPRIMIR A LISTA, AGORA COM NÚMEROS DE 1 A 25


// // EXERCÍCIO 9
// let list = [];
// let divided;
// for (let index = 1; index <= 25; index += 1) {
// 	divided = index / 2;
// 	list.push(divided);
// }
// console.log(list);
// // CRIAR UMA LISTA VAZIA
// // CRIAR UMA VARIÁVEL QUE DIVIDE
// // FAZER UMA LOOP PERCORRER UM ARRAY COM OS VALORES DE 1 A 25
// // FAZER COM QUE A VARIÁVEL DIVIDA O NÚMERO PASSADO PELO ARRAY EM 2
// // UTILIZAR A FUNÇÃO PARA ADICIONAR CADA NÚMERO DIVIDO DENTRO DA LISTA VAZIA
// // IMPRIMIR A LISTA, AGORA COM NÚMEROS DE 0,5 A 12,5
