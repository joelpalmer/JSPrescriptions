/**
 * Created by Joel Palmer on 6/24/2015.
 */
//run with node repl

var fs = require('fs');
var timestamp = new Date().toString();

fs.writeFile('date2.txt', timestamp, function(err){
    if (err) throw err;

    fs.readFile('date2.txt', function(err, filecontents){
        if (err) throw err;
        console.log('check contents');
        console.assert(filecontents == timestamp);
    });
});
console.log('last line');