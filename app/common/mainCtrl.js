function mainCtrl($scope, $http) {
    $scope.navBarUrl = 'app/common/navBar.tpl.html';


    $scope.loadContent = function (tab) {
        $scope.contentUrl = tab.templateUrl;
    };

    function init() {
        $http.get('app/data/tabs.json')
            .success(function (response) {
                $scope.tabs = response.tabs;
            })
            .error(function (errorReponse) {
                console.log(errorReponse)
            });
    }
    init();

}
angular.module('twitterApp')
    .controller('mainCtrl', ['$scope', '$http', mainCtrl]);
