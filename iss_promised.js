const request = require('request-promise-native');

const fetchCoordsByIP = function() {
  return request('http://ip-api.com/json/');
};

const fetchISSFlyOverTimes = function(body) {
  const coords = JSON.parse(body);
  return request(`http://api.open-notify.org/iss-pass.json?lat=${coords.lat}&lon=${coords.lon}`);
};

const nextISSTimesForMyLocation = function() {
  return fetchCoordsByIP()
    .then(fetchISSFlyOverTimes)
    .then((body) => {
      const { response } = JSON.parse(body);
      return response;
    });
};



module.exports = { nextISSTimesForMyLocation };