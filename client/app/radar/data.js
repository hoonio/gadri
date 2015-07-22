'use strict';

angular.module('gadriApp')
  .factory('data', function (DATA_FEED, $http) {

    var data = { entry: [] };

    data.getAll = function() {
     return $http.get(DATA_FEED).success(function(res){
      angular.copy(res.feed.entry, data.entry);
      });
    };

    return data;

  });
