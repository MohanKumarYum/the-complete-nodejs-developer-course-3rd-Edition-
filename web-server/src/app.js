const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => res.send("<h1>Weather</h1>"));
app.get("/help", (req, res) => res.send([{
    name: "Mohan"
},{
    name: "Sangeetha"
}
]));
app.get("/about", (req, res) => res.send("<h1>About</h1>"));
app.get("/weather", (req, res) => res.send({
    forecast: "It is Sunny day.",
    location: "Bengaluru, Karnataka, India",
}));

app.listen(port, () => {
  console.log("Server is up on port " + port);
});
