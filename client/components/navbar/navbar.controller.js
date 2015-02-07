'use strict';

angular.module('gadriApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.menu = [{
      'title': 'Maps',
      'link': '/'
    },{
      'title': 'RadarGraph-UK',
      'link': '/radar/United+Kingdom'
    }];

    $scope.isCollapsed = true;

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
