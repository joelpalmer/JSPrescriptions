/**
 * Created by Joel Palmer on 6/18/2015.
 */
//using moment.js
var grandpasBirthday = moment('10-10-1277', "MM-DD-YYYY");
var momsBirthday = moment('10-19-1954', "MM-DD-YYYY");
var timeSpan = momsBirthday.diff(grandpasBirthday, 'days');
console.log(timeSpan + " days");