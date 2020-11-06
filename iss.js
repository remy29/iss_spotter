const request = require('request');

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
    const coords = { lat: apiResponse.lat, lon: apiResponse.lon };
    callback(null, coords);
  });
};

const fetchISSFlyOverTimes = function(coords, callback) {
  const host = `http://api.open-notify.org/iss-pass.json?lat=${coords.lat}&lon=${coords.lon}`;
  request(host, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching coordinates for IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }
    const apiResponse = JSON.parse(body).response;
    //const times = ;
    callback(null, apiResponse);
  });
};

const nextISSTimesForMyLocation = function(callback) {
  fetchCoordsByIP("http://ip-api.com/json/", (error, coords) => {
    if (error) {
      return callback(error, null);
    }
    fetchISSFlyOverTimes(coords, (error, nextPasses) => {
      if (error) {
        return callback(error, null);
      }
      callback(null, nextPasses);
    });
  });
};

module.exports = { nextISSTimesForMyLocation };

//

/* const fetchMyIP = function(callback) {
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

}; */