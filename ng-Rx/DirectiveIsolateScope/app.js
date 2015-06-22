/**
 * Created by Joel Palmer on 6/22/2015.
 */

angular.module('directiveIsolateScope', [])
.controller('MainCtrl', function($log, $scope){
        $scope.parentvalue = 'my parent scope data';

    })
.directive('isolate', function(){
        return {
            template: 'Local: {{ valueFromParentScope }}',
            scope: {
                valueFromParentScope: '=parentvaluein'
            }
        };
    });