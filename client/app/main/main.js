'use strict';

angular.module('gadriApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .state('incomesecurity', {
        url: '/incomesecurity',
        templateUrl: 'app/maps/incomesecurity.html',
        controller: 'MainCtrl'
      })
      .state('healthstatus', {
        url: '/healthstatus',
        templateUrl: 'app/maps/healthstatus.html',
        controller: 'MainCtrl'
      })
      .state('capability', {
        url: '/capability',
        templateUrl: 'app/maps/capability.html',
        controller: 'MainCtrl'
      })
      .state('enablingenvironment', {
        url: '/enablingenvironment',
        templateUrl: 'app/maps/enablingenvironment.html',
        controller: 'MainCtrl'
      // })
      // .state('radar', {
      //   url: '/radar/:country',
      //   templateUrl: 'app/radar/template.html',
      //   controller: 'RadarCtrl'
      });
  });
