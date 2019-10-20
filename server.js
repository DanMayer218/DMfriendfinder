var express = require("express");
var path = require("path");

var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("app/public"));

require("./routing/apiroutes.js")(app);
require("./routing/htmlroutes.js")(app);



// app.get("/", function(req, res) {
//     res.sendFile(path.join(__dirname, "/public/home.html"));
//   });

//   app.get("/add", function(req, res) {
//     res.sendFile(path.join(__dirname, "/public/survey.html"));
//   });









  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  