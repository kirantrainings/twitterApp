//creating the application module

angular.module('twitterApp',[
    'twitterApp.register',
    'twitterApp.login']);

angular.module('twitterApp')
    .config(function(){
   console.log("I am the main module"); 
});