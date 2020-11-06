const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss');

/* fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned IP:' , ip);
}); */

/* fetchCoordsByIP("http://ip-api.com/json/", (error, coords) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  };
  console.log('It worked! Returned coordinates:' , coords);
}); */

const coordinates = { lat: '49.27670', lon: '-123.13000' };

fetchISSFlyOverTimes(coordinates, (error, times) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  };

  console.log('It worked! times:' , times);

});
