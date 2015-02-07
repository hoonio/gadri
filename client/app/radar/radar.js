'use strict';

angular.module('gadriApp')
  .controller('RadarCtrl', function ($scope, $http, $location) {

    var requestedCountry = $location.path().split('/')[2];
  $http.get('https://spreadsheets.google.com/feeds/list/1j_T9J66a5iFnjIiGVEW3uHFpz3iYxl-gFGdqghAjNVg/1/public/values?gid=2110785703&alt=json')
    .then(function(res){

      angular.forEach(res.data.feed.entry, function(countryData, key){
        if (requestedCountry === countryData.gsx$url.$t)
        {
          console.log("Found a match: " + countryData.gsx$hazardandexposure.$t);
          var graphData = {
            id: 'cvs',
            data: [],
            options: {
              colors: {
      self: ['#F1AF17','#F8D78A','#B91A1F','#DC8D90','#8ECC4F','#C0D6A5','#ef4e27','#F8A794'],
                sequential: true
              },
              text: {
                  size: {
                      self: 14,
                      scale: 0
                  }
              },
              ymax: 10,
              background: {
              axes: false,
                grid: {
                  self: true,
                  spokes: 4,
                  axes: false,
                  count: 5
                }
              },
              scale: {
                count: 2
              },
              strokestyle: 'rgba(0,0,0,0)',
              margin: 3
            }
          };

          graphData.data = [
            parseFloat(countryData.gsx$hazardandexposure.$t),
            parseFloat(countryData.gsx$averagehazardandexposure.$t),
              parseFloat(countryData.gsx$averagevulnerability.$t),
                parseFloat(countryData.gsx$vulnerability.$t),
                  parseFloat(countryData.gsx$lackofcopingcapacity.$t),
                    parseFloat(countryData.gsx$averagelackofcopingcapacity.$t),
                      parseFloat(countryData.gsx$globalageanddisasterrisk.$t),
                        parseFloat(countryData.gsx$averageglobalageanddisasterrisk.$t)
          ];
          var rose = new RGraph.Rose(graphData).draw();

        }
      });

    });
  });
