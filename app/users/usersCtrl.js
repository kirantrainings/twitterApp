function usersCtrl($scope, userSvc) {
    //Recommeneded
    userSvc.getUsers()
        .then(function (response) {
            if (response.statusText == "OK") {
                console.log(response);
                $scope.users = response.data.profiles;
            } else {

            }
        }).catch(function (errorResponse) {
            $scope.error = "Error Occurred";
        });

    /*$http.get('app/data/profile.json')
        .success(function (response) {
            $scope.users = response.profiles;
        }).error(function (errorResponse) {
            console.log(errorResponse);
        });*/
}

angular.module('twitterApp')
    .controller('usersCtrl', ["$scope", "userSvc", usersCtrl]);
