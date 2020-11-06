const { nextISSTimesForMyLocation } = require('./iss');

const print = function(times) {
  for (const time of times) {
    const date = new Date(0);
    const duration = time.duration;
    date.setUTCSeconds(time.risetime);
    console.log(`Next pass at ${date} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  print(passTimes);
});