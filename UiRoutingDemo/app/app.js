angular.module('uiroutingDemo', ['ui.router']);

angular.module('uiroutingDemo')
    .config(['$stateProvider', '$urlRouterProvider',
             function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise("/login")
                //Define the states
            var login = {
                templateUrl: "app/views/login.tpl.html",
                controller: "loginCtrl",
                url: "/login"
            };

            //Defining Named views.
            var home = {
                controller: "homeCtrl",
                url: "/home",
                views: {
                    //Main Template for the home
                    '': {
                        templateUrl: 'app/views/home.tpl.html'
                    },
                    // the child views will be defined here (absolutely named)
                    'content@home': {
                        templateUrl: 'app/views/home.content.tpl.html'
                    },
                    'list@home': {
                        templateUrl: 'app/views/home.list.tpl.html'
                    },

                }
            };

            //Registering States.
            $stateProvider.state('login', login);

            $stateProvider.state('home', home);
        }]);
