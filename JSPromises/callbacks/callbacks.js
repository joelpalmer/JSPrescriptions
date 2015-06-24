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
