// GlOBALS
// No access to Window object

// __dirname   - path to current directory
// __ filename - file name
// require     - function to use modules (Common JS)
// module      - info about current module (file)
// process     - info about env where the program is being executed

console.log(__dirname);
console.log(__filename);

// Also have access to setTimeout() and setInterval()

setInterval(() => {
  console.log('hello world');
}, 1000);
