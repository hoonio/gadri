'use strict';

angular.module('gadriApp', [
  'ui.router',
  'ngMap'
])
  .constant('DATA_FEED', 'https://spreadsheets.google.com/feeds/list/1j_T9J66a5iFnjIiGVEW3uHFpz3iYxl-gFGdqghAjNVg/1/public/values?gid=2110785703&alt=json')
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl',
        resolve: {
          dataPromise: ['data', function(data){
            return data.getAll();
          }]
        }
      })
      .state('vulnerability', {
        url: '/vulnerability',
        templateUrl: 'app/maps/vulnerability.html',
        controller: 'MainCtrl',
        resolve: {
          dataPromise: ['data', function(data){
            return data.getAll();
          }]
        }
      })
      .state('coping', {
        url: '/coping',
        templateUrl: 'app/maps/coping.html',
        controller: 'MainCtrl',
        resolve: {
          dataPromise: ['data', function(data){
            return data.getAll();
          }]
        }
      })
      .state('hazard', {
        url: '/hazard',
        templateUrl: 'app/maps/hazard.html',
        controller: 'MainCtrl',
        resolve: {
          dataPromise: ['data', function(data){
            return data.getAll();
          }]
        }
      })
      .state('radar', {
        url: '/radar/:country',
        templateUrl: 'app/radar/template.html',
        controller: 'RadarCtrl'
      });
    $locationProvider.html5Mode(true);
  });
