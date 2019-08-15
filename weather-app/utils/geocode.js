const request = require("request");

const geocode = (address, callback) => {
  const url =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    encodeURIComponent(address) +
    ".json?access_token=pk.eyJ1IjoibW9oYW5rdW1hcnl1bSIsImEiOiJjanphczZ0bTEwMDZwM3BwOHRocXNtY3d6In0.ua3XccYZfR5EANSgqzp90g&limit=1";

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to location service!");
    } else if (!body.features.length) {
      callback(body.query[0] + " was not found!");
    } else {
      callback(undefined, {
        latitude: body.features[0].center[1],
        longitude: body.features[0].center[0],
        location: body.features[0].place_name
      });
    }
  });
};

module.exports = geocode;