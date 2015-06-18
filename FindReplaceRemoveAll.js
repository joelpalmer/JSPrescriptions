/**
 * Created by Joel Palmer on 6/18/2015.
 */
/*https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice*/

var teams = ["Dodgers","Giants","Pirates","Rangers","Giants","Nationals"];

// replace
while (teams.indexOf("Giants") != -1) {
    teams.splice(teams.indexOf("Giants"),1,"X");
}

console.log(teams);

// delete
while(teams.indexOf("X") != -1) {
    teams.splice(teams.indexOf("X"),1);
}
console.log(teams);

//Yes, I am Dodgers fan!