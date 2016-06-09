(function () {
    var numbersOnly = function () {
        return {
            restrict: "A",
            //link function
            link: function (scope, element, attrs) {
                console.log(scope);
                console.log(element);
                console.log(attrs);
                element.bind('keypress', function (evt) {

                    var numberOfDigits = $(this).val().length;
                    var length = attrs["length"];
                    if (
                        (evt.keyCode >= 48 && evt.keyCode <= 57) &&
                        (numberOfDigits < length)) {

                    } else {
                        evt.preventDefault();
                    }
                });

            }

        }
    };
    angular.module('components')
        .directive('numbersOnly', [numbersOnly])
})();
