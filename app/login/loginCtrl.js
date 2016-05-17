function loginCtrl($scope, $http) {
    $scope.login = {
        username: "",
        password: ""
    };

    $scope.loginUser = function () {
        console.log("I am the begging");
        //$http.get 
        //will have call back functions
        // then,cath
        // success,error
        // finally
        $http.get('app/data/logins.json')
            .success(function (response) {
                console.log(response);

            }).error(function (response) {
                console.log(response);
            });
        console.log("I am the end");
    };
}

angular.module("twitterApp.login")
    .controller('loginCtrl', loginCtrl);
