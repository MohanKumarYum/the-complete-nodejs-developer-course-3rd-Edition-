const path = require("path");
const express = require("express");
const app = express();
const port = 3000;

console.log(__dirname);
console.log(__filename);

const publicDirectoryPath = path.join(__dirname, "../public");
console.log("publicDirectoryPath:", publicDirectoryPath);
app.use(express.static(publicDirectoryPath));

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
// app.get("/weather", (req, res) =>
//   res.send({
//     forecast: "It is Sunny day.",
//     location: "Bengaluru, Karnataka, India"
//   })
// );


app.listen(port, () => {
  console.log("Server is up on port " + port);
});
