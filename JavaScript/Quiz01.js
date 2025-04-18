// write a program to find Max, Min and Average of the given Array using function in javaScript.
//  let marks = [20, 12, 30, 34, 21, 67, 45, 33, 45]

function findMax(arr) {
    return Math.max(...arr);
}

function findMin(arr) {
    return Math.min(...arr);
}

function findAverage(arr) {
    let sum = arr.reduce((acc, curr) => acc + curr, 0);
    return sum / arr.length;
}

let marks = [20, 12, 30, 34, 21, 67, 45, 33, 45];

let max = findMax(marks);
let min = findMin(marks);
let average = findAverage(marks);

console.log("Max:", max);
console.log("Min:", min);
console.log("Average:", average);