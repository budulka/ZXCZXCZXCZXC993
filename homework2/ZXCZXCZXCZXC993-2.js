a = [1, 0, 0, 0, 0, 0, 0, 0, 3, 7, -9, 13, -14];
function SecondTask(arr) {
    for (let i = 0; i < arr.length; i++) {
        let sumright = 0;
        for (let j = 0; j <= i; j++) {
            sumright += arr[j];
        }
        let sumleft = 0;
        for (let k = arr.length - 1; k >= i; k--) {
            sumleft += arr[k]
        }
        if (sumleft === sumright) {
            return i;
        }
    }
    return -1;
}

console.log(SecondTask(a))
