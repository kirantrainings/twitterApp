(function () {
    var carosel = function () {
        return {
            restrict: "A",
            templateUrl: "components/views/carousel.tpl.html",
            link: function (scope, element, attrs) {
                element.carosel();
            }
        };
    }
    angular.module('components')
        .directive('carosel', [carosel])
})();
