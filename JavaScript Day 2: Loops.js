'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    
    let vowels = "";
    let consonants = "";
    
    for(var letters of s){
        if((letters == 'a')||
            (letters == 'e')||
            (letters == 'i')||
            (letters == 'o')||
            (letters == 'u')){
                vowels +=letters; 
        }
        else{
            consonants +=letters;
        }    
    }
    // Print each vowel
    // This loop iterates over each character in the vowels string in order
    for (var i = 0; i < vowels.length; i++) {
        console.log(vowels.charAt(i));
    }
    
    // Print each consonant
    // This loop iterates over each character in the consonants string in order
    for (var i = 0; i < consonants.length; i++) {
        console.log(consonants.charAt(i));
    }
    
}


function main() {
    const s = readLine();
    
    vowelsAndConsonants(s);
}
