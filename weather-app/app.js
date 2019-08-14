const request = require("request");

const url =
  "https://api.darksky.net/forecast/23ccaeb651d43a606d7d15a6f41414af/37.8267,-122.4233";

request({ url: url, json: true }, (error, response, body) => {
  console.log(
    "It is currently " +
      body.currently.temperature +
      " degrees out. There is " +
      body.currently.precipProbability +
      "% chance of rain."
  );
});
