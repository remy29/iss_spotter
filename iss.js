const request = require('request');

const fetchMyIP = function(callback) { 
  host = "https://api.ipify.org?format=json";

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
  })

};


module.exports = { fetchMyIP };