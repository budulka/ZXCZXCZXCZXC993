const prompt = require('prompt-sync')();
let d = Number(prompt("Enter a positive integer: "));
let honors = [];
let honor = [1, 5, 6, 3, 4, 2];
let n = honor.length;
if (n % d !== 0 || d > 31 || d < 1 || n <= 0) {
    console.log("wtf")
} else {

    for (let k = 0; k < (n / d); k++) {
        let sumhonor = 0;
        for (let i = 0; i < n; i += (n / d)) {
            sumhonor += honor[i+k];
        }
        honors = honors.concat(sumhonor);
    }
    console.log(honors);
}
let maxnum = honors[0];
for (let j = 0; j < honors.length; j++) {
    if (maxnum < honors[j+1]) {
        maxnum = honors[j+1];
    }
}
console.log(maxnum);