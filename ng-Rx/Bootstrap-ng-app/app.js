/**
 * Created by Joel Palmer on 6/22/2015.
 */
angular.module('bootstrappedApp', [])
    .controller('Ctrl', function($scope) {
        $scope.data = 'Your app has been bootstrapped. Don\'t confuse this with the fine responsive framework :-)';
    });

angular.element(document).ready(function() {
    angular.bootstrap(document.getElementById('main'), ['bootstrappedApp']);
});
