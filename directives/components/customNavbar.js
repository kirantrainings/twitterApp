(function () {
    var customNavbar = function () {
        return {
            restrict: "A",
            templateUrl: "components/views/navbarrouter.tpl.html"
        };
    };
    angular.module('components')
        .directive('customNavbar', [customNavbar])
})();
