const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "https://api.darksky.net/forecast/23ccaeb651d43a606d7d15a6f41414af/" +
    encodeURIComponent(latitude) +
    "," +
    encodeURIComponent(longitude) +
    "?units=si";

  request({ url, json: true }, (error, {body}) => {
    if (error) {
      callback("Unable to connect to the weather service!");
    } else if (body.error) {
      callback("Unable to find weather forecast for the, Latitude :" + latitude + " Longitude: " + longitude);
    } else {
      callback(undefined,
        body.daily.data[0].summary +
            " It is currently " +
            body.currently.temperature +
            " degrees out. There is " +
            body.currently.precipProbability +
            "% chance of rain."
      );
    }
  });
};

module.exports = forecast;
