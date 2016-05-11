function loginCtrl($scope){
    $scope.login={
        userName:"",
        password:""
    };
    
    $scope.loginUser=function(){
        console.log($scope.login);
    }
}

angular.module("twitterApp.login")
     .controller('loginCtrl',loginCtrl);