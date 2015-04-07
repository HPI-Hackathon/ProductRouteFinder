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
};

