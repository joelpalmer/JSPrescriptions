/**
 * Created by Joel Palmer on 7/9/2015.
 */
$(document).ready(function(){
    jQuery.fn.toYell = function(){
        document.getElementById("teamDiv").textContent =  document.getElementById("teamDiv").textContent.toUpperCase();
    };
    $('button').on('click', function(){
        $('#teamDiv').toYell();
    });

    (function($) {
        var orig = $.fn.toYell;
        $.fn.toYell = function() {
            orig.apply(this, arguments);

                this.append("!!!");

        };
    }(jQuery));
})