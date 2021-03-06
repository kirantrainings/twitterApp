(function () {
    var datePicker = function () {
        return {
            restrict: "A",
            link: function (scope, element, attrs) {

                var config = {};
                if (attrs["maxdate"]) {
                    config.maxDate = attrs["maxdate"];
                }
                if (attrs["mindate"]) {
                    config.minDate = attrs["mindate"];
                }
                element.datepicker(config);
            }
        }
    };
    angular.module('components')
        .directive('datePicker', [datePicker])
})();
