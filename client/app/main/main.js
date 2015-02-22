'use strict';

angular.module('gadriApp')
  .config(function ($stateProvider) {
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
  });
