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
      .state('incomesecurity', {
        url: '/incomesecurity',
        templateUrl: 'app/maps/incomesecurity.html',
        controller: 'MainCtrl',
        resolve: {
          dataPromise: ['data', function(data){
            return data.getAll();
          }]
        }
      })
      .state('healthstatus', {
        url: '/healthstatus',
        templateUrl: 'app/maps/healthstatus.html',
        controller: 'MainCtrl',
        resolve: {
          dataPromise: ['data', function(data){
            return data.getAll();
          }]
        }
      })
      .state('capability', {
        url: '/capability',
        templateUrl: 'app/maps/capability.html',
        controller: 'MainCtrl',
        resolve: {
          dataPromise: ['data', function(data){
            return data.getAll();
          }]
        }
      })
      .state('enablingenvironment', {
        url: '/enablingenvironment',
        templateUrl: 'app/maps/enablingenvironment.html',
        controller: 'MainCtrl',
        resolve: {
          dataPromise: ['data', function(data){
            return data.getAll();
          }]
        }
      // })
      // .state('radar', {
      //   url: '/radar/:country',
      //   templateUrl: 'app/radar/template.html',
      //   controller: 'RadarCtrl'
      });
  });
