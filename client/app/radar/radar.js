'use strict';

angular.module('gadriApp')
  .controller('RadarCtrl', function ($scope, $http, $location) {

    var requestedCountry = $location.path().split('/')[2];
  $http.get('https://spreadsheets.google.com/feeds/list/1j_T9J66a5iFnjIiGVEW3uHFpz3iYxl-gFGdqghAjNVg/1/public/values?gid=2110785703&alt=json')
    .then(function(res){

      angular.forEach(res.data.feed.entry, function(countryData){
        if (requestedCountry === countryData.gsx$url.$t)
        {
          console.log('Found a match: ' + countryData.gsx$hazardandexposure.$t);
          var graphData = {
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

      var images = ['https://lh6.googleusercontent.com/-wvY4Qa7TT5g/VOEiTHAQJUI/AAAAAAACY0c/dY6mTDrewP4/s800/icon-hazard.png','https://lh3.googleusercontent.com/-Lj9E_l5IWAY/VOEiTb8M-QI/AAAAAAACY0k/wAM3n-CotD0/s800/icon-vulnerability.png','https://lh4.googleusercontent.com/-eIGyzuIT5TI/VOEiTN-6aqI/AAAAAAACY0g/2h3WKfXveoA/s800/icon-coping.png','https://lh6.googleusercontent.com/-MHPMdXg_nNI/VOEiTAmAI-I/AAAAAAACY0s/8gxP7S09gsU/s800/icon-risk.png'];
      var x = [350,350,66,65];
      var y = [40,330,330,40];
      var logos = ['Hazard and exposure','Vulnerability','Lack of coping capacity','Global Age and Disaster Risk'];

      for (var i=0; i<4; i+=1) {
        var image = new RGraph.Drawing.Image({
          id: 'cvs',
          x: x[i],
          y: y[i],
          src: images[i],
          options: {
            width: 32,
            height: 32,
            tooltips: [logos[i]]
          }
        }).draw()
      }


    });

  });
