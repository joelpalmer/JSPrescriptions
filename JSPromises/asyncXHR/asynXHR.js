/**
 * Created by Joel Palmer on 6/24/2015.
 */
var async = true;
var xhr = new XMLHttpRequest();
xhr.open('get', 'data.json', async);
xhr.send();

//create 3 sec delay
var timestamp = Date.now() + 3000;
while(Date.now() < timestamp);

function listener(){
    console.log('hi from listener');
}

xhr.addEventListener('load', listener);
xhr.addEventListener('error', listener);