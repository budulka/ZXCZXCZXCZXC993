
var alphabet = 'abcdefghijklmnopqrstuvwxyz';
class VigenèreCipher {
    constructor(key, alphabet) {
        this.key = key;
        this.alphabet = alphabet;
    }

    encode(message) {
        let key = this.key;
        while (message.length > key.length) {
            key += key;
        }
        message = message.split('');
        key = key.split('');
        let alpha = this.alphabet.split('');
        for (let i = 0; i < message.length; i++) {
            if (alpha.includes(message[i]) && alpha.includes(key[i])) {
                message[i] = alpha.indexOf(message[i]);
                key[i] = alpha.indexOf(key[i]);
                message[i] = message[i] + key[i];
                if (message[i] > this.alphabet.length - 1) {
                    message[i] = message[i] - this.alphabet.length;
                }
                message[i] = alpha[message[i]];
            }
        }
        return message.join('');
    }
    decode(messageToDecode) {
        let key = this.key;
        while (messageToDecode.length > key.length) {
            key += key;
        }
        messageToDecode = messageToDecode.split('');
        key = key.split('');
        let alpha = this.alphabet.split('');
        for (let i = 0; i < messageToDecode.length; i++) {
            if (alpha.includes(messageToDecode[i]) && alpha.includes(key[i])) {
                messageToDecode[i] = alpha.indexOf(messageToDecode[i]);
                key[i] = alpha.indexOf(key[i]);
                messageToDecode[i] = messageToDecode[i] - key[i];
                if (messageToDecode[i] < 0) {
                    messageToDecode[i] = this.alphabet.length + messageToDecode[i];
                }
                messageToDecode[i] = alpha[messageToDecode[i]];
            }
        }
        return messageToDecode.join('');
    }
}
const ciph = new VigenèreCipher("school", alphabet);
let qwerty = ciph.encode("regeshatop")
let zhopa = ciph.decode(qwerty);
console.log(qwerty, zhopa);
