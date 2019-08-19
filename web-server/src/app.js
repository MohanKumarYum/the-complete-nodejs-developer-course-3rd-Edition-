const path = require("path");
const express = require("express");
const hbs = require("hbs");
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

// Setup Express web framework
const app = express();
const port = 3000;

// Define paths for express config
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

// Setup handlebards engine and views location
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

// Setup static directory to server
app.use(express.static(publicDirectoryPath));

app.get("", (req, res) =>
  res.render("index", {
    title: "Weather App v2",
    name: "Mohan Kumar"
  })
);

app.get("/about", (req, res) =>
  res.render("about", {
    title: "About Me",
    name: "Mohan Kumar"
  })
);

app.get("/help", (req, res) =>
  res.render("help", {
    helpText: "This is some helpful text",
    title: "Help",
    name: "Mohan Kumar"
  })
);

app.get("/weather", (req, res) => {
  if (!req.query.address)
    return res.send({ error: "You must provide an address" });

  geocode(encodeURIComponent(req.query.address), (error, { latitude, longitude, location } = {}) => {
    if (error) return res.send({Error: error});

    forecast(latitude, longitude, (forecastError, forecastData) => {
      if (forecastError) return res.send({Error: forecastError});

      res.send({ location, forecast: forecastData, address: req.query.address });
    });
  });
});

app.get("/products", (req, res) => {
  if (!req.query.search) {
    return res.send({
      error: "You must provide a search term."
    });
  }
  res.send({
    products: []
  });
});

app.get("/help/*", (req, res) =>
  res.render("404", {
    title: "404",
    errorMessage: "Help article not found",
    name: "Mohan Kumar"
  })
);

app.get("*", (req, res) =>
  res.render("404", {
    title: "404",
    errorMessage: "Page Not Found!",
    name: "Mohan Kumar"
  })
);

app.listen(port, () => {
  console.log("Server is up on port " + port);
});
