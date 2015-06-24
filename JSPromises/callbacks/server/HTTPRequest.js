/**
 * Created by Joel Palmer on 6/24/2015.
 */
//run with node repl

var http = require('http');
http.get('http://joelpalmer.com', function (err, res){
    console.log('received response');
});