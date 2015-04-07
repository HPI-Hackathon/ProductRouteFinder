/**
 * Ebay_apiController
 *
 * @description :: Server-side logic for managing ebay_apis
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

var request = require("request");

module.exports = {
  test: function(req, res) {
    request({
      url: "https://api.ebay-kleinanzeigen.de/api/ads.json",
      auth: {
        username: "hpi_hackathon",
        pass: "dsk38a1l",
      },
    }, function(error, response, body) {
      res.send(body);
    });
  },
  
  ads: function(req, res) {
    var query = req.body.query;
    
    request({
      url: "https://api.ebay-kleinanzeigen.de/api/ads.json?zipcode=17033",
      auth: {
        username: "hpi_hackathon",
        pass: "dsk38a1l",
      },
    }, function(error, response, body) {
      var data = JSON.parse(body);
      var ads = data["{http://www.ebayclassifiedsgroup.com/schema/ad/v1}ads"].value.ad;
      
      var markers = [];
      for (var i in ads) {
        var ad = ads[i];
        
        var marker = {
          title: ad.title.value,
          latLng: [ad["ad-address"].latitude.value, ad["ad-address"].longitude.value],
        };
        markers.push(marker);
        //console.log(marker);
      }
      
      res.send({"markers" : markers});
    });
    
    /*
    for (i in req.body.points) {
      var point = req.body.points[i];
      
      var url = "https://api.ebay-kleinanzeigen.de/api/ads.json?";
      url += "q=" + query;
      url += "&latitude=" + point.lat;
      url += "&longitude=" + point.lng;
      url += "&distance=" + point.radius + "&distanceUnit=KM";
      console.log(url);
    }
    */
  }
};
