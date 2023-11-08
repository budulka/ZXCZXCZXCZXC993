"use strict"
const prompt = require('prompt-sync')();
console.log("Enter a number of disks: ")
let Input = prompt();
console.log(2 ** Input - 1)
