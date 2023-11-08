let arr = [["(-)", "[IIII]", "[))))]"], ["IuI", "[llll]"], [ "[@@@@]", "UwU",
    "[IlII]" ], [ "IuI", "[))))]", "x" ], [] ];
let arr2 = [];

for (let o = 0; o < arr.length; o++) {
    for (let p = 0; p < arr[o].length; p++) {
        if (arr[o][p] === "[IIII]") {
            arr2.push("IIII");
        }
        if (arr[o][p] === "[))))]") {
            arr2.push('))))');
        }
        if (arr[o][p] === "[@@@@]") {
            arr2.push('@@@@');
        }
        if (arr[o][p] === "[llll]") {
            arr2.push('llll');
        }
    }
}
console.log(arr2)
function del5(arr) {
    let ryadok = "";
    for (let i = 4; i < arr.length; i += 5) {
        arr[i] = '';
    }

    for (let j = 0; j < arr.length; j++) {
        ryadok = ryadok.concat(arr[j] + ' ');
    }
    return ryadok
}

console.log(del5(arr2));