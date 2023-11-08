"use strict"
const prompt = require('prompt-sync')();
let Input = prompt();
let multiplesThree = 0, multiplesFive = 0, sum = 0;
if (Input > 0) {
    while (multiplesThree + 3 < Input) {
        multiplesThree += 3;
        sum += multiplesThree;
    }
    while (multiplesFive + 5 < Input) {
        multiplesFive += 5;
        if (multiplesFive % 3 != 0) {
            sum += multiplesFive;
        }
    }
    console.log(sum)
}
else {
    console.log(0)
}


