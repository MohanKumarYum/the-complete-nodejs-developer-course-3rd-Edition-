const request = require("request");
const geocode = require("./utils/geocode.js")

// const url =
//   "https://api.darksky.net/forecast/23ccaeb651d43a606d7d15a6f41414af/37.8267,-122.4233?units=si";

// request({ url: url, json: true }, (error, response, body) => {
//   if (error) {
//     console.log("Unable to connect to the weather service!");
//   } else if (body.error) {
//     console.log("Unable to find location");
//   } else {
//     console.log(
//       body.daily.data[0].summary +
//         " It is currently " +
//         body.currently.temperature +
//         " degrees out. There is " +
//         body.currently.precipProbability +
//         "% chance of rain."
//     );
//   }
// });

geocode("Circular Quay, Sydney, NSW, 2000", (error, data) => {
  console.log("error:", error);
  console.log("data:", data);
});