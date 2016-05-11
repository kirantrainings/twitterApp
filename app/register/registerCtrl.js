
function registerCtrl($scope){
   $scope.firstName="Kiran";
   var lastName="PVS"; 
    
    $scope.registerUser=function(){
        console.log($scope);
    };
}

angular.module('twitterApp.register')
    .controller('registerCtrl',registerCtrl)


