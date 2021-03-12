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

// if 25 < score <= 30, then grade = A,
// if 20 < score <= 25, then grade = B, 
// if 15 < score <= 20, then grade = C, 
// if 10 < score <= 15, then grade = D, 
// if 5 < score <= 10, then grade = E, 
// if 0 < score <= 5, then grade = F  
function getGrade(score) {
    let grade;
    // Write your code here
    if (score > 25 && score <= 30){
        grade = "A";
        return grade;
    }
    else if (score > 20 && score <= 25){
        grade = "B";
        return grade;
    }
    else if (score > 15 && score <= 20){
        grade = "C";
        return grade;
    }
    else if (score > 10 && score <= 15){
        grade = "D";
        return grade;
    }
    else if (score > 5 && score <= 10){
        grade = "E";
        return grade;
    }
    else if (score > 0 && score <= 5){
        grade = "F";
        return grade;
    }

        
}


function main() {
    const score = +(readLine());
    
    console.log(getGrade(score));
}
