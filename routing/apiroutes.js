
var friends = require("../data/friends.js");

module.exports = function(app) {

    app.get("/api/friends.js", function(req, res) {
        res.json(friends);
      });

      // The post method which will house the user input data that will be stored in the friends.js file
      app.post("/api/friends.js", function(req, res) {
        var friendcompare = 0;
        var yourMatches = {
            name: "",
            photo: "",
            friendcompare: 1000
        };


// Taking the user submitted info and converting it into a number instead of a string
var userData = req.body;
var userName = userData.name;
var userScores = userData.scores;

var s = userScores.map(function(item) {
  return parseInt(item, 10);
});
userData = {
    name: req.body.name,
    photo: req.body.photo,
    scores: s
};

console.log("Name:" + userName);
console.log("User Score: " + userScores);

var sum = s.reduce((a,b) => a + b, 0);
console.log("Sum of the Users score " + sum);
console.log("Your matches!! " + bestMatch.friendcompare);
console.log("******************************==============================");

for (var i = 0; i < friends.length; i++) {
  console.log(friends[i].name);
  totalDifference = 0;
  console.log("Total Diff " + totalDifference);
  console.log("Best match friend diff " + bestMatch.friendcompare);

  var sfriendScore = friends[i].scores.reduce((a,b) => a + b,0);
  console.log("Total friend score " + sfriendScore);
  totalDifference += Math.abs(sum - sfriendScore);
  console.log("--------------------------------> " + totalDifference);

  if (totalDifference <= bestMatch.friendcompare) {
    bestMatch.name = friends[i].name;
    bestMatch.photo = friends[i].photo;
    bestMatch.friendcompare = totalDifference;

    console.log(totalDifference = " Total Difference");
  }

  console.log(bestMatch);
  friends.push(userData);
  console.log("New User Added");
  console.log(userData);
  res.json(bestMatch);
}
      });
    };