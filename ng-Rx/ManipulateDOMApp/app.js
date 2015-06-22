/**
 * Created by Joel Palmer on 6/22/2015.
 */
angular.module('manDOMApp', [])
.directive('counter', function(){
        return{
            restrict: 'A',
            link: function (scope, el, attrs){
                var incr = parseInt(attrs.incrementby || 1),
                    val = 0;
                el.bind('click', function(){
                    el.html(val += incr);
                })
            }
        };
    });