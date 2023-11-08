class Vector {
    constructor(coords) {
        this.coords = coords;
    }
    add(vectorB) {
        let c = new Vector([]);
        if (this.coords.length !== vectorB.coords.length) {
            throw new Error("different length!");
        }
        for (let i = 0; i < this.coords.length; i++) {
            c.coords[i] = this.coords[i] + vectorB.coords[i];
        }
        return c;
    }
    subtract(vectorD) {
        let c = new Vector([]);
        if (this.coords.length !== vectorD.coords.length) {
            throw new Error("different length!");
        }
        for (let i = 0; i < this.coords.length; i++) {
            c.coords[i] = this.coords[i] - vectorD.coords[i];
        }
        return c;
    }
    dot(vectorX) {
        let dotProduct = 0;
        if (this.coords.length !== vectorX.coords.length) {
            throw new Error("different length!");
        }
        for (let i = 0; i < this.coords.length; i++) {
            dotProduct += this.coords[i] * vectorX.coords[i];
        }
        return dotProduct;
    }
    norm() {
        let normSquared = 0;
        for (let k = 0; k < this.coords.length; k++) {
            normSquared += this.coords[k] ** 2;
        }
        return Math.sqrt(normSquared);
    }
    equals(compareVector) {
        if (this.coords.length !== compareVector.coords.length) {
            throw new Error("different length!")
        }
        for (let m = 0; m < this.coords.length; m++) {
            if (this.coords[m] !== compareVector.coords[m]) {
                return false;
            }
        }
        return true;
    }
    toString() {
        let string = "(";
        for (let u = 0; u < this.coords.length - 1; u++) {
            string += (this.coords[u] + ",");
        }
        string += this.coords[this.coords.length-1];
        return (string += ")");
    }
}

let a = new Vector([1, 2, 3]);
let b = new Vector([3, 4, 5]);
console.log(a.add(b));
console.log(a.subtract(b));
console.log(a.dot(b));
console.log(a.norm());
console.log(a.add(b).equals(new Vector([4, 6, 8])))
console.log(a.toString());
