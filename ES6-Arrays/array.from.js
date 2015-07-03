/* Created by Joel Palmer on 7/3/2015.
ES6 --- FireFox 32+ only as of Created by date
Doc & Polyfill: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
I'm assuming FF if not Chrome but TODO: better checking
*/

var is_chrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
//create an array from function arguments
var args = function(){
    return Array.from(arguments);
};
if (!is_chrome) {
    console.log(args(31, "Joc", "Pederson"));
}

//create an array from a string -- toCharArray()

String.prototype.toCharArray = function(){
    return Array.from(this);
};
if (!is_chrome) {
    var text = "Dodgers";
    console.log(text.toCharArray()); // Array [ "D", "o", "d", "g", "e", "r", "s" ]
}