
var friends = require("../app/data/friends");

module.exports = function(app) {

    app.get("/api/friends.js", function(req, res) {
        res.json(friends);
        // res.sendFile(path.join(__dirname, "app/data/friends.js"));
      });
      app.post("/api/friends.js", function(req, res) {
        var friendcompare = 0;
        var yourMatches = {
            name: "",
            photo: "",
            friendcompare: 1000
        }
}

var userData = req.body;
var userName = userData.name;



