const path = require("path");
const express = require("express");
const app = express();
const port = 3000;

const publicDirectoryPath = path.join(__dirname, "../public");

app.use(express.static(publicDirectoryPath));
app.set("view engine", "hbs");

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

// app.get("/help", (req, res) =>
//   res.send([
//     {
//       name: "Mohan"
//     },
//     {
//       name: "Sangeetha"
//     }
//   ])
// );

// app.get("/about", (req, res) => res.send("<h1>About</h1>"));

app.get("/weather", (req, res) =>
  res.send({
    forecast: "It is Sunny day.",
    location: "Bengaluru, Karnataka, India"
  })
);

app.listen(port, () => {
  console.log("Server is up on port " + port);
});
