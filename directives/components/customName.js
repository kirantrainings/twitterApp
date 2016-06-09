(function () {
    var customName = function () {
        return {
            template: "<h1>{{welcome}}</h1>",
            restrict: "A,E,C,M"
        };
    };

    angular.module('components')
        .directive('customName', [customName])

})();
