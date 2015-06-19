/**
 * Created by Joel Palmer on 6/19/2015.
 */
//Avoid a comparison on each iteration a la the for loop with reverse while

var nlWestTeams = ['Dodgers', 'Giants', 'Rockies', 'DBacks', 'Padres'],
    len = nlWestTeams.length,
    idx = len,
    reversedNLWestTeams = [];

while(idx--){
    reversedNLWestTeams.push(nlWestTeams[idx]);
}

console.log(reversedNLWestTeams);


//This is what Google closure compiler does with this code so hmmmm...
/*
for (var nlWestTeams = ["Dodgers", "Giants", "Rockies", "DBacks", "Padres"], len = nlWestTeams.length, idx = len, reversedNLWestTeams = [];idx--;) {
    reversedNLWestTeams.push(nlWestTeams[idx]);
}
;*/
