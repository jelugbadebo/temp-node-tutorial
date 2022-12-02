// Synchronous methods

const { readFileSync, writeFileSync, appendFile } = require('fs');
console.log('start');

// Read file method

const first = readFileSync('./content/first.txt', 'utf-8');
const second = readFileSync('./content/second.txt', 'utf-8');

// console.log(first, second);

// Create new file method
// writeFileSync('./content/results-sync.txt', `Here is the result : ${first}, ${second}`);

// Append to a file
writeFileSync('./content/results-sync.txt', `Here is the result : ${first}, ${second}`, {
  flag: 'a',
});

console.log('done with this task');
console.log('starting the next one');
