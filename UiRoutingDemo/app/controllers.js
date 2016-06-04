var homeCtrlFn = function ($scope) {
    $scope.name = "Home Page";
};
angular.module('uiroutingDemo')
    .controller('homeCtrl', ['$scope', homeCtrlFn]);

var loginCtrlFn = function ($scope) {
    $scope.nameOfPage = "Login Page";
};
angular.module('uiroutingDemo')
    .controller('loginCtrl', ['$scope', loginCtrlFn]);
