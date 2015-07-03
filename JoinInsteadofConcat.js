/**
 * Created by Joel Palmer on 7/3/2015.
 */

//join instead of + for better performance

var returnDynamicString = function(team, sport){
    return "The " + team + " are the best team in " + sport;
};

console.log(returnDynamicString("Dodgers", "baseball"));

var returnJoinedString = function(team, sport){
    return ["The " , team , " are the best team in " , sport].join("");
};

console.log(returnJoinedString("Dodgers", "baseball"));