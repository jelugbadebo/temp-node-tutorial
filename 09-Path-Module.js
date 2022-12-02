// Path Module
const path = require('path');

// To see the path separator
console.log(path.sep);

// To create a file path
const filePath = path.join('/content/', 'subforlder', 'test.txt');
console.log(filePath);

// Basename method To get the path base name
const base = path.basename(filePath);
console.log(base);

// Resolve method returns an absoulte path
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'text.txt');
console.log(absolute);
