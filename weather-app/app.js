const request = require("request");

const url =
  "https://api.darksky.net/forecast/23ccaeb651d43a606d7d15a6f41414af/37.8267,-122.4233?units=si";

request({ url: url, json: true }, (error, response, body) => {
  if (error) {
    console.log("Unable to connect to the weather service!");
  } else if (body.error) {
    console.log("Unable to find location");
  } else {
    console.log(
      body.daily.data[0].summary +
        " It is currently " +
        body.currently.temperature +
        " degrees out. There is " +
        body.currently.precipProbability +
        "% chance of rain."
    );
  }
});

const geocodeUrl =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/U+701A%2F3+Broughton+st+Parramatta+NSW+2150.json?access_token=pk.eyJ1IjoibW9oYW5rdW1hcnl1bSIsImEiOiJjanphczZ0bTEwMDZwM3BwOHRocXNtY3d6In0.ua3XccYZfR5EANSgqzp90g&limit=1";

request({ url: geocodeUrl, json: true }, (error, response, body) => {
  if (error) {
    console.log("Unable to connect to location service!");
  } else if (!body.features.length) {
    console.log(body.query[0] + " was not found!");
  } else {
    const longitude = body.features[0].center[0];
    const lattitude = body.features[0].center[1];
    console.log(lattitude, longitude);
  }
});
