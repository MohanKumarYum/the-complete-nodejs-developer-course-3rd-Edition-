const geocode = require("./utils/geocode.js")
const forecast = require("./utils/forecast");

geocode("Circular Quay, Sydney, NSW, 2000", (error, data) => {
  console.log("Error:", error);
  console.log("Data:", data);
});

forecast(-33.861685, 151.209726, (error, data) => {
  console.log('Error', error)
  console.log('Data', data)
})