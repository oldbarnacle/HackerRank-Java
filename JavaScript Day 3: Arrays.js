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

/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
*   1. During the first iteration, we find the maximum value in the array (i.e.max1).
    2. During the second iteration, we find the largest value in the array (i.e.max2)           that is also less than max1.
    3. We then return the value of max2.
**/

function getSecondLargest(nums) {
    // Complete the function
    
    let max1 = 0;
    
    for(var i of nums){
        if(max1 < i){
            max1 = i;
        }
    }
    
    let max2 = 0;
    for(var i of nums){
        if(max2 < i && i < max1){
            max2 = i;
        }
    }
    
    return max2;
}


function main() {
    const n = +(readLine());
    const nums = readLine().split(' ').map(Number);
    
    console.log(getSecondLargest(nums));
}
