
class Fighter {
    constructor(level) {
        if (level < 1 || level > 100) {
            throw new Error("Invalid level!");
        }
        this.level = level;
    }
}
class Warrior {
    constructor(exp) {
        this.ranks = ["Pushover", "Novice", "Fighter", "Warrior", "Veteran", "Sage", "Elite", "Conqueror", "Champion", "Master", "Greatest"];
        if (exp < 100 || exp > 10000) {
            throw new Error("Wrong exp");
        }
        this.exp = 100;
        this.achievement = [];
    }

    fight(foe) {

        if (this.level() === foe.level) {
            this.exp += 10;
            console.log("A good fight!");
        } else if (this.level() === foe.level + 1) {
            this.exp += 5;
            console.log("A good fight!");
        } else if (this.level() > foe.level + 2) {
            this.exp += 0;
            console.log("Easy fight!");
        } else if (this.level() < foe.level && foe.level - this.level() < 5) {
            this.exp += 20 * foe.level - this.level() * foe.level - this.level();
            console.log("An intense fight!");
        } else {
            console.log("You died!");
        }

    }

    training(trainArgs) {
        this.achievement.push(trainArgs[0]);
        console.log(trainArgs[0]);
        if (this.level() < trainArgs[2]) {
            console.log("Not strong enough!");
        } else {
            this.exp += trainArgs[1];
        }
    }

    level() {
        return Math.floor(this.exp / 100);
    }

    rank() {
        return this.ranks[Math.floor(this.level() / 10)];
    }

    achievements() {
        if (this.achievement.length === 0) {
            return [];
        } else {
            let str = ""
            for (let r = 0; r < this.achievement.length; r++) {
                str += this.achievement[r] + ' ';
            }
            return str.slice(0, str.length - 1);
        }

    }

}
let Jana = new Warrior(100);
console.log(Jana.level(), Jana.exp, Jana.rank());
Jana.fight(new Fighter (2));
Jana.fight(new Fighter (4));
Jana.fight(new Fighter (10));
Jana.fight(new Fighter(1));
Jana.training(["Do ten push ups", 200, 2]);
console.log(Jana.achievements());
console.log(Jana.level(), Jana.exp, Jana.rank());