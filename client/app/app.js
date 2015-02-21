'use strict';

angular.module('gadriApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap',
  'ngMap'
])
  .constant('DATA_FEED', 'https://spreadsheets.google.com/feeds/list/1j_T9J66a5iFnjIiGVEW3uHFpz3iYxl-gFGdqghAjNVg/1/public/values?gid=2110785703&alt=json')
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');
    $locationProvider.html5Mode(true);
  });
