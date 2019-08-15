const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");
const process = require("process");

const address = process.argv[2];

if (!address) {
  console.log("Please enter an address for weather forecast!");
} else {
  geocode(address, (error, {latitude, longitude, location}) => {
    if (error) {
      console.log("Error:", error);
    } else {
      console.log("Location: " + location);
      forecast(latitude, longitude, (forecastError, forecastData) => {
        if (forecastError) {
          console.log("Error:", forecastError);
        } else {
          console.log(forecastData);
        }
      });
    }
  });
}
