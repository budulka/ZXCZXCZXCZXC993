"use strict"
const prompt = require('prompt-sync')();
let str = prompt();
console.log('\n\n' + numbers(str));

function numbers(n) {
    let arr = n.split(" ").map(Number);
    let max = arr[0];
    let min = arr[0];
    for (let i = 0; i <= (arr.length); i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    for (let j = 0; j <= (arr.length); j++) {
        if (arr[j] < min) {
            min = arr[j];
        }
    }
    return (max + " " + min);
}