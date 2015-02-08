'use strict';

angular.module('gadriApp')
  .controller('MainCtrl', function ($scope) {

    $scope.map = 'Google';

    angular.element(".googft-info-window").ready(function () {
        console.log('Info window load');
    });


  });
