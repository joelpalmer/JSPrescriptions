/**
 * Created by Joel Palmer on 6/18/2015.
 */
/*https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice*/

var teams = ["Dodgers","Giants","Pirates","Rangers","Giants","Nationals"];

// replace
for (teams; -1 != teams.indexOf("Giants");) {
    teams.splice(teams.indexOf("Giants"),1,"X");
}

console.log(teams);

// delete
for (teams; -1 != teams.indexOf("X");) {
    teams.splice(teams.indexOf("X"),1);
}
console.log(teams);

//Yes, I am Dodgers fan!