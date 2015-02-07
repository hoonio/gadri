'use strict';

angular.module('gadriApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .state('radar', {
        url: '/radar/:country',
        templateUrl: 'app/radar/template.html',
        controller: 'RadarCtrl'
      });
  });
