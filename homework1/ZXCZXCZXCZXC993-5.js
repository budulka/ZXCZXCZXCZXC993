const prompt = require('prompt-sync')();
let data = Number(prompt("Enter a positive integer: "));
while (data <= 0) {
    data = Number(prompt("Enter a positive integer: "));
}
console.log(isPrime(data));


function isPrime(p) {
    if (2 ** (p-1) % p === 1) {
        return true;
    }
    return false;

}