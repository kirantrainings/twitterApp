function mainCtrl($scope) {
    $scope.navBarUrl = 'app/common/navBar.tpl.html';
    $scope.tabs = [
        {
            name: 'home',
            display: 'Home',
            templateUrl: 'app/home/home.tpl.html'
        },
        {
            name: 'profile',
            display: 'Profile',
            templateUrl: 'app/profile/profile.tpl.html'
        },
        {
            name: 'register',
            display: 'Register',
            templateUrl: 'app/register/register.tpl.html'
        },
        {
            name: 'login',
            display: 'Login',
            templateUrl: 'app/login/login.tpl.html'
        },
        {
            name: 'users',
            display: 'Users',
            templateUrl: 'app/users/users.tpl.html'
        }
    ]
    $scope.loadContent = function (tab) {
        $scope.contentUrl = tab.templateUrl;
    };

    $scope.loadContent($scope.tabs[0]);

}
angular.module('twitterApp')
    .controller('mainCtrl', ['$scope', mainCtrl]);
