array = [-20, 4, 6, 7, 10, -7, -3];
let smallest = 0;
let small = 0;

function showsmallest (array) {
    for (let i in array) {
        if (i == 0) {
            smallest = i
            small = array[i]
        }
        else {
            if (array[i] < small) {
                small = array[i]
                smallest = i
            }
        }
    }
    return smallest
}

console.log(showsmallest(array));