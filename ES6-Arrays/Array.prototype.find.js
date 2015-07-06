/**
 * Created by Joel Palmer on 7/6/2015.
 *
 * ES6 - FF only as of now
 *
 * Polyfill: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
 */

function isEven(el, idx, array){
    return el % 2 == 0;
}

var test = 3;
var test2 = 2;

console.log(isEven(test));
console.log(isEven(test2));

var nums = [3, 9, 11, 14];

console.log(nums.find(isEven));

console.log(nums.find(function (el, idx, array){
    return el % 2 == 0;
}));



