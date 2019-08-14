const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "https://api.darksky.net/forecast/23ccaeb651d43a606d7d15a6f41414af/" +
    encodeURIComponent(latitude) +
    "," +
    encodeURIComponent(longitude) +
    "?units=si";

  request({ url: url, json: true }, (error, response, body) => {
    if (error) {
      callback("Unable to connect to the weather service!");
    } else if (body.error) {
      callback("Unable to find location");
    } else {
      callback(undefined, {
        summary: body.daily.data[0].summary,
        temperature: body.currently.temperature,
        precipprobability: body.currently.precipProbability
      });
    }
  });
};

module.exports = forecast;
