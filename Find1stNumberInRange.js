/**
 * Created by Joel Palmer on 6/17/2015.
 */
//ES6 required
var numbers = [21, 42, 19, 150, 183, 64, 7, 11, 14];
var over = numbers.find(function(element, index, array) {
    return (element > 11 && element < 22);
});

console.log("First item found > 100: " + over);

//first number that is in the array that meets the criteria so not 14
