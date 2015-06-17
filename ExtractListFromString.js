/**
 * Created by Joel Palmer on 6/17/2015.
 */
//Extract list from string

var stringContainingList = "Favorite Movies - Back to the Future, Swingers, Bully.",
    extractBegin = stringContainingList.indexOf('-'),
    extractEnd = stringContainingList.indexOf('.', extractBegin + 1),
    listString = stringContainingList.substring(extractBegin + 1, extractEnd),
    movies = listString.split(',');

//clean up the items, whitespace
movies.forEach(function(element, index, array){
    array[index] = element.trim();
});

console.log(movies);

//could be improved by making this a function and passing in the delimiters for:
//begin, end and split on