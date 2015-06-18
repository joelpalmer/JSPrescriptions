/**
 * Created by Joel Palmer on 6/18/2015.
 */
//using moment.js
var grandpasBirthday = moment('October 10, 1928');
var momsBirthday = moment('October 19, 1956');
var timeSpan = momsBirthday.diff(grandpasBirthday, 'days');
console.log(timeSpan + " days");