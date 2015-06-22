/**
 * Created by Joel Palmer on 6/22/2015.
 */
angular.module('ObjInspectorApp', [])
.controller('ObjInspectorCtrl', function($scope){
    $scope.player = {
        number: 31,
        name: {
            firstName: 'Joc',
            lastName: 'Pederson'
        },
        nickName: 'Yungjoc',
        $$oldNumber: 65
    };
});