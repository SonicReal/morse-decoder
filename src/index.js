const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    const words = [];
    if (expr.length === 0) {
        return '';
    }

    let current_word = '';
    for (let i = 0; i < expr.length; i += 10) {
        if (expr[i] === '*') {
            if (current_word) {
                words.push(current_word);
                current_word = '';
            }
            words.push(' ');
            continue;
        }
        current_word += parseLetter(expr, i);
    }
    if (current_word) {
        words.push(current_word);
    }
    return words.join('')

}

function parseLetter(expr, i) {
    let str = '';
    for (let j = i + 9; j >= i; j -= 2) {
        if (expr[j] === '1') {
            str = '-' + str;
        } else {
            if (expr[j - 1] === '1') {
                str = '.' + str;
            } else {
                break;
            }
        }
    }
    return MORSE_TABLE[str];
}

module.exports = {
    decode
}
