function rot13(str) {
    const alphabet = [
        'A',
        'B',
        'C',
        'D',
        'E',
        'F',
        'G',
        'H',
        'I',
        'J',
        'K',
        'L',
        'M',
        'N',
        'O',
        'P',
        'Q',
        'R',
        'S',
        'T',
        'U',
        'V',
        'W',
        'X',
        'Y',
        'Z'
      ];
    let stri = '';
    for (let i = 0; i < str.length; i++) {
        if (alphabet.includes(str[i])) {
            const num = alphabet.indexOf(str[i]);
            stri += alphabet[num + 13] || alphabet[num - 13];
        } else {
            stri += str[i];
        }
    }
    return stri;
}
  
rot13("SERR PBQR PNZC");