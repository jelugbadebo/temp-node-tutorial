// Modules
// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const names = require('./04-Names');
// console.log(names);

const data = require('./06-Alternative-Flavor');
// console.log(data);

const sayHi = require('./05-Utils');
sayHi('susan');
sayHi(names.john);
sayHi(names.peter);

// When you import an module, you import the executed calls in the module
require('./07-mind-grenade');
