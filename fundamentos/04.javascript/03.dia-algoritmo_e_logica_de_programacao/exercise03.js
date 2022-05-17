let array = ['java', 'javascript', 'python', 'html', 'css'];
let biggest;

for (let i = 0; i < array.length; i += 1) {
    if (array[i] === array[0]) {
        biggest = array[0];
    }
    else {
        if(array[i].length > biggest.length) {
            biggest = array[i];
        }
    }
}
console.log(biggest);


// Menor valor:

let smallest = 0;

for (let i = 0; i < array.length; i += 1) {
    if (array[i] === array[0]) {
        smallest = array[0];
    }
    else {
        if(array[i].length < smallest.length) {
            smallest = array[i];
        }
    }
}
console.log(smallest);
