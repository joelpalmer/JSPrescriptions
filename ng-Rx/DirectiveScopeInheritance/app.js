/**
 * Created by Joel Palmer on 6/22/2015.
 */

angular.module('directiveScopeInheritanceApp', [])
.controller('MainCtrl', function ($scope){
        $scope.overwrite = false;
        $scope.source = 'parent ctrl';
        $scope.template = 'No Template';
    })
.directive('myDirective', function(){
    return{
        restrict: 'E',
        link: function(scope){
            scope.overwrite = !!scope.source;
            scope.source = 'link func';
        }
    };
});