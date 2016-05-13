function loginCtrl($scope) {
    $scope.login = {
        username: "",
        password: ""
    };

    $scope.loginUser = function () {
        console.log($scope.login);
    }
}

angular.module("twitterApp.login")
    .controller('loginCtrl', loginCtrl);
