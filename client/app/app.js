'use strict';

angular.module('gadriApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap',
  'ngMap'
])
  .constant('DATA_FEED', 'https://spreadsheets.google.com/feeds/list/1rnHdgtxBbGIRFT1Gz1cjhKi8An366SUUF2ArAY16uGA/1/public/values?gid=87971418&alt=json')
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');
    $locationProvider.html5Mode(true);
  });
