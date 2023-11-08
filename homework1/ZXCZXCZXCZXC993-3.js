"use strict"
const prompt = require('prompt-sync')();
let volume = Number(prompt());
console.log(findNb(volume));

function findNb(v)
{
    let sum = 0;
    let i = 1;
    for (i; sum < v; i++)
    {
        sum += i ** 3;
    }

    if (sum === v)
    {
        return i-1;
    }
    else
    {
        return -1;
    }
}