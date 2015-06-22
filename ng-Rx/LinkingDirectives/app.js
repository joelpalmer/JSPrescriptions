/**
 * Created by Joel Palmer on 6/22/2015.
 */
angular.module('linkingDirectivesApp', [])
    .directive('direcText', function ($document) {
        return {
            template: '<div>{{ direction }}</div>',
            link: function (scope, el, attrs) {

                el.css({
                    'float': 'left',
                    'padding': attrs.padding+"px"
                });

                scope.direction = '';

                $document.on('mousemove', function (event) {

                    scope.$apply(function () {
                        if (event.pageY < 300) {
                            scope.direction = 'top-';
                        } else {
                            scope.direction = 'bottom-';
                        }
                        if (event.pageX < 300) {
                            scope.direction += 'left';
                        } else {
                            scope.direction += 'right';
                        }
                    });
                });
            }
        };
    });