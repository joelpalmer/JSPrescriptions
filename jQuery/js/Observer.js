/**
 * Created by Joel Palmer on 7/10/2015.
 */
$( document ).on( "myCustomEvent", {
    foo: "bar"
}, function( event, arg1, arg2 ) {
    console.log( event.data.foo ); // "bar"
    console.log( arg1 );           // "bim"
    console.log( arg2 );           // "baz"
    console.log($(this));
});

$( document ).trigger( "myCustomEvent", [ "bim", "baz" ] );