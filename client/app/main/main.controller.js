'use strict';

angular.module('gadriApp')
  .controller('MainCtrl', ['data', '$scope', function (data, $scope) {

     $scope.data = data.entry;
    $scope.mapClick = function(){
      // 1.5 second delay added to wait for Google Fusion Table to load a new info window
      setTimeout (insertGraph, 800);

      // var childDiv = document.getElementsByClassName('rgraph');
      // console.log(childDiv[0]);
      //
      // while(!childDiv[0]){
      //   setTimeout
      // }
      //
      // setTimeout (function(){ }, 800);
    };

    function insertGraph() {
      angular.element(".googft-info-window").ready(function () {
        var parentDiv = document.getElementsByClassName('googft-info-window');
        console.log("New window loaded");
        var childDiv = document.getElementsByClassName('rgraph');
        console.log(childDiv[0]);

        if(childDiv[0]) {

          var countryName = childDiv[0].innerText;
          console.log(countryName);
          var graphData = getGraphData(countryName);
          console.log(graphData);

          var radarCanvas = document.createElement("canvas");
          radarCanvas.setAttribute("id", "cvs");
          radarCanvas.setAttribute("width", "150");
          radarCanvas.setAttribute("height", "150");
          radarCanvas.setAttribute("style", "margin: -10px;");
          var radarCanvas_content = document.createTextNode("[No canvas support]");
          radarCanvas.appendChild(radarCanvas_content);
          parentDiv[0].replaceChild(radarCanvas, childDiv[0]);

          var rose = new RGraph.Rose(graphData).draw();
        }

        // var radarCanvas = '<canvas id="cvs" width="400" height="400">[No canvas' support]</canvas>

      });

    }

    function getGraphData(countryName) {

      var graphData = getGraphSettings();
      angular.forEach($scope.data, function(countryData){
        if (countryName === countryData.gsx$url.$t)
        {
          console.log('Found a match: ' + countryData.gsx$hazardandexposure.$t);

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
        }
      });
      return graphData;
    }

    function getGraphSettings() {
      var graphSettings = {
        id: 'cvs',
        data: [],
        options: {
          colors: {
            self: ['#D4512A','#EDB18D','#DCA335','#F1D59B','#7FB63E','#C9DDA5','#A52B25','#D7957D'],
            sequential: true
          },
          text: {
            size: {
              self: 14,
              scale: 0
            }
          },
          labels: {
            axes: '',
            position: 'edge',
            count: 2,
            boxed: false
          },
          ymax: 10,
          background: {
          axes: false,
            grid: {
              self: true,
              spokes: 4,
              axes: false,
              count: 2
            }
          },
          scale: {
            count: 2
          },
          strokestyle: 'rgba(0,0,0,0)',
          margin: 3
        }
      };
      return graphSettings;
    }

  }]);
