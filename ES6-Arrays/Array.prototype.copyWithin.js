/**
 * Created by Joel Palmer on 7/6/2015.
 *
 * ES6
 * FF 32+ Only as of now
 *
 * Note: copied elements overwrite elements in the position they're...
 * copied to.
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin
 * "copyWithin function is intentionally generic, it does not require that its this value be an Array object and in addition,...
 * copyWithin is a mutable method, it will change this object itself, and return it, not just return a copy of it"
 */

var dodgersArray = ["Pederson", "Puig", "Greinke", "Kershaw", "Turner"];
console.log(dodgersArray);
dodgersArray.copyWithin(0, 2);
console.log(dodgersArray);