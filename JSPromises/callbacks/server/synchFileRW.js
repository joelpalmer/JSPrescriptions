/**
 * Created by Joel Palmer on 6/24/2015.
 */
//run with node repl

var fs = require('fs');
var timestamp = new Date().toString();
var filecontents;

fs.writeFileSync('date.txt', timestamp);
filecontents = fs.readFileSync('date.txt');
console.log('Check the contents');
console.assert(filecontents == timestamp);

console.log('last line of script');
