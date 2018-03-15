var searchEngineApp = angular.module("searchEngineApp", ['ngRoute']);

searchEngineApp.config(function($routeProvider){
   $routeProvider
       .when('/',{
       templateUrl: '../pages/search.html',
       controller: 'searchController'
   });
});




