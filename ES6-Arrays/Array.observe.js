/* Created by Joel Palmer on 7/3/2015.
 ES7? --- Chrome 36+ only as of Created by date
 Doc: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/observe
 I've got you covered (mostly) by sniffing for Chrome
 */
var is_chrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
var array = ['Giants', 'Dodgers', 'Cardinals'];
if (is_chrome) {
    Array.observe(array, function (changes) {
        console.log(changes);
    });
}
array[1] = 'Dodgers Rule!';
// [{type: 'update', object: <arr>, name: '1', oldValue: 'b'}]