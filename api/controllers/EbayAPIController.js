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
    for (i in req.body.points) {
      var point = req.body.points[i];
      
      var url = "https://api.ebay-kleinanzeigen.de/api/ads.json?";
      url += "q=" + query;
      url += "&latitude=" + point.lat;
      url += "&longitude=" + point.lng;
      url += "&distance=" + point.radius + "&distanceUnit=KM";
      res.send(url + "\n");
      
      /*
      request({
        url: url,
        auth: {
          username: "hpi_hackathon",
          pass: "dsk38a1l",
        },
      }, function(error, response, body) {
        res.send(body);
      });
      */
    }
  }
};
