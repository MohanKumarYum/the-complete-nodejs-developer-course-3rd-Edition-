const path = require("path");
const express = require("express");
const app = express();
const port = 3000;

// Define paths for express config
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname,"../templates")

// Setup handlebards engine and views location
app.set("view engine", "hbs");
app.set("views",viewsPath);

// Setup static directory to server
app.use(express.static(publicDirectoryPath));

app.get("",(req, res) => res.render("index",{
  title: "Weather App v2",
  name: "Mohan Kumar"
}));

app.get("/about",(req, res) => res.render("about",{
  title: "About Me",
  name: "Mohan Kumar"
}));

app.get("/help",(req, res) => res.render("help",{
  helpText: "Help Page via hbs"
}));

app.get("/weather", (req, res) =>
  res.send({
    forecast: "It is Sunny day.",
    location: "Bengaluru, Karnataka, India"
  })
);

app.listen(port, () => {
  console.log("Server is up on port " + port);
});
