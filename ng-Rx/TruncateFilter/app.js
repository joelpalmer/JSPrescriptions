/**
 * Created by Joel Palmer on 6/22/2015.
 */
angular.module('myTruncateFilterApp', [])
    .controller('Ctrl', function($scope) {
        $scope.longText = 'Hoping to start, Adrian Gonzalez has one fellow first baseman to pass in the latest NL voting tally.';
    })
    .filter('truncate', function () {
        return function (text, limit) {
            var truncated = text.slice(0, limit);
            if (text.length > limit) {
                truncated += '...';
            }
            return truncated;
        };
    });