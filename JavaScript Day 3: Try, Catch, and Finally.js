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
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 * 
 * 1. The split() method splits a String object into an array of string by separating the string into sub strings.
 * 2. The reverse() method reverses an array in place. The first array element becomes the last and the last becomes the first.
 * 3. The join() method joins all elements of an array into a string.
 */

const message = "s.split is not a function";

function reverseString(s) {
    try{
        // var splitString = s.split("");
    
        // var reverseArray = splitString.reverse();
    
        // var joinArray= reverseArray.join("");
        
        s = s.split("").reverse().join("");
    
    }
    catch(error) {
        console.log(message);
            
    }
    finally{
        console.log(s);
        
    }
        
}

function main() {
    const s = eval(readLine());
    
    reverseString(s);
}
