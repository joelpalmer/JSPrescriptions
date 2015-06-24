/**
 * Created by Joel Palmer on 6/24/2015.
 */
var players = ['Joc Pederson', 'Adrian Gonzalez', 'Andre Ethier'];
//synchronous callback
players.forEach(function(player){
    console.log(player);
});

function moveElement(){
    console.log('moving...')
}
//async callback
window.requestAnimationFrame(moveElement);
console.log('Last line of this part');

//load image (now expecting a promise
loadImage('dodgers.png').then(function(img){
    document.body.appendChild(img);
}).catch(function(e){
    console.log('Error loading image');
    console.log(e);
});

function loadImage(url){
    var promise = new Promise(
        function keeper(resolve, reject){
            var img = new Image();
            img.src = url;

            img.onload = function(){
                resolve(img);
            };

            img.onerror = function(e){
                reject(e);
            };
        }
    );
    return promise;
}