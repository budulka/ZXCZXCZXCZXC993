"use strict"
const prompt = require('prompt-sync')();
let numero = Number(prompt("Enter a positive integer: "));

while (numero <= 0) {
    numero = Number(prompt("Enter a positive integer: "));
}

let arrOfDigits = Array.from(String(numero), Number);
let x = BubbleSort(arrOfDigits).reverse();
console.log(func(x))
function BubbleSort(a) {
    let array;
    for (let j = 0; j < a.length; j++) {
        for (let i = 0; i < a.length; i++) {
            if (a[i] < a[i + 1]) {
                array = a[i];
                a[i] = a[i + 1];
                a[i + 1] = array;
            }
        }
    }
    return a;
}

function func(tuple) {
    let sum = 0;
    for (let C = 0; C < tuple.length; C++) {
        sum += tuple[C] * 10 ** C;
    }
    return sum;
}