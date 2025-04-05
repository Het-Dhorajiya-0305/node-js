const fs = require('fs');
const os = require('os');

fs.writeFileSync('./file.txt', 'Hello, world!');

console.log(os.cpus().length)