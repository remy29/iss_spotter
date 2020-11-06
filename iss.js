const request = require('request');

const fetchMyIP = function(callback) {
  const host = "https://api.ipify.org?format=json";

  request(host, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }
    const JSONip = JSON.parse(body);
    callback(null, JSONip.ip);
  });

};

const fetchCoordsByIP = function(ip, callback) {
  request(ip, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching coordinates for IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }
    const apiResponse = JSON.parse(body);
    const coords = { latitude: apiResponse.lat, longitude: apiResponse.lon };
    callback(null, coords);
  });
};


module.exports = { fetchMyIP, fetchCoordsByIP };