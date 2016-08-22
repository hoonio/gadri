'use strict';

angular.module('gadriApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.menu = [{
      'title': 'GADRI',
      'link': '/'
    },{
      'title': 'Vunerability',
      'link': '/vulnerability'
    },{
      'title': 'Lack of coping capacity',
      'link': '/coping'
    },{
      'title': 'Hazard and exposure',
      'link': '/hazard'
    },{
      'title': 'RadarGraph-UK',
      'link': '/radar/United+Kingdom'
    }];

    $scope.isCollapsed = true;

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
