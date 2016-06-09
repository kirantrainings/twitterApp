(function () {
    var customBrand = function () {
        return {
            restrict: "A",
            templateUrl: "components/views/brand.tpl.html"
        };
    };
    angular.module('components')
        .directive('customBrand', [customBrand])
})();
