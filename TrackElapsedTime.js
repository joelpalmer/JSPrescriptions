/**
 * Created by Joel Palmer on 6/17/2015.
 */
var date1 = new Date();
setTimeout(function(){
    fire(date1);
}, 1E3);

function fire(){
    console.log(new Date - date1);
}