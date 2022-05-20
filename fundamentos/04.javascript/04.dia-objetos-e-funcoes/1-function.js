function knowPalindromo (phrase) {
    reversePhrase = phrase.replace(' ', '');
    reversePhrase = reversePhrase.split('').reverse().join('').toLowerCase();
    phrase = phrase.replace(' ', '');
    phrase = phrase.toLowerCase();
    if (reversePhrase == phrase) {
        return true;
    }
    return false;
}

console.log(knowPalindromo('arara'));