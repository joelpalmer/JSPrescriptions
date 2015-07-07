/**
 * Created by Joel Palmer on 7/7/2015.
 *
 * Functional (programming) Flatten a multi-dimensional array
 * Similar functionality to FlattenMultiDimArray.js \JSPrescriptions\FlattenMultiDimArray.js
 */
var teamArray = [];
teamArray[0] = ['Dodgers','Rangers'];
teamArray[1] = ['Astros','Pirates','Giants'];
teamArray[2] = ['Twins','Indians'];
teamArray[3] = ['Mariners','Angels'];

var flatten = function(array){
  return array.reduce(function(p,n){
      return p.concat(n);
  })  ;
};

console.log(flatten(teamArray));