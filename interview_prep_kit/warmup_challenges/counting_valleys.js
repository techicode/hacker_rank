'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'countingValleys' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER steps
 *  2. STRING path
 */

/*
    example:
        DD UU DD UD UU UD
        -2 0 -2 -2  1 1
        expected output:
            2

        _      _      /\
         \    / \    /
          \ /    \/\/
 */

function countingValleys(steps, path) {
    // Write your code here
    let current = 0;
    let counter = 0;
    let history = [];
    for (let i = 0; i < path.length; i++) {
        if (path[i] === 'D') {
            current --;
        } else if (path[i] === 'U') {
            current ++;
        }
        history.push(current);
        if (current === 0 && history[i-1] === -1) {
            counter ++;
        }
    }
    return counter;
}

console.log(countingValleys(12, 'UDDDUDUU'))

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const steps = parseInt(readLine().trim(), 10);

    const path = readLine();

    const result = countingValleys(steps, path);

    ws.write(result + '\n');

    ws.end();
}
