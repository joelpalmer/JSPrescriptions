/**
 * Created by Joel Palmer on 6/17/2015.
 */
var teamArray = [];
teamArray[0] = ['Dodgers','Rangers'];
teamArray[1] = ['Astros','Pirates','Giants'];
teamArray[2] = ['Twins','Indians'];
teamArray[3] = ['Mariners','Angels'];

var flatten = function(array) {
    var flattenedArray = array.concat.apply([], array);
    console.log(flattenedArray[5]);
    console.log(flattenedArray);
};
flatten(teamArray);
