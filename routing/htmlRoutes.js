var app = express();
var PORT = 3000;
var http = require("http");
var fs = require("fs");


// Create our server
var server = http.createServer(handleRequest);

// Create a function for handling the requests and responses coming into our server
function handleRequest(req, res) {
    var path = req.url;

  // Depending on the URL, display a different HTML file.
  switch (path) {

  case "/home":
    return fs.readFile(__dirname + "/home.html", function(err, data) {
        if (err) throw err;
        // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
        // an html file.
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      });
  case "/survey":
    return fs.readFile(__dirname + "/survey.html", function(err, data) {
        if (err) throw err;
        // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
        // an html file.
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      });

  default:
    return display404(path, res);
  }
}
server.listen(PORT, function() {
    console.log("Server is listening on PORT: " + PORT);
  });
// var path = post.url;

// app.get("/survey", function(req, res) {
//     res.send("welcome to SUM1");
//   });

// server.listen(PORT, function() {
    // Callback triggered when server is successfully listening. Hurray!
//     console.log("Server listening on: http://localhost:" + PORT);
//   });
  
  // Create a function which handles incoming requests and sends responses
//   function handleRequest(req, res) {
  
    // Capture the url the request is made to
    // var path = req.url;
  
    // Depending on the URL, display a different HTML file.
//     switch (path) {
  
//     case "/":
//       return displayRoot(res);
  
//     case "/portfolio":
//       return displayPortfolio(res);
  
//     default:
//       return display404(path, res);
//     }
//   }
  
  // When someone visits the "http://localhost:8080/" path, this function is run.
//   function displayRoot(res) {
//     var myHTML = "<html>" +
//       "<body><h1>Home Page</h1>" +
//       "<a href='/portfolio'>Portfolio</a>" +
//       "</body></html>";
  
    // Configure the response to return a status code of 200 (meaning everything went OK), and to be an HTML document
    // res.writeHead(200, { "Content-Type": "text/html" });
  
    // End the response by sending the client the myHTML string (which gets rendered as an HTML document thanks to the code above)
//     res.end(myHTML);
//   }
  
  // When someone visits the "http://localhost:8080/portfolio" path, this function is run.
//   function displayPortfolio(res) {
//     var myHTML = "<html>" +
//       "<body><h1>My Portfolio</h1>" +
//       "<a href='/'>Go Home</a>" +
//       "</body></html>";
  
    // Configure the response to return a status code of 200 (meaning everything went OK), and to be an HTML document
    // res.writeHead(200, { "Content-Type": "text/html" });
  
    // End the response by sending the client the myHTML string (which gets rendered as an HTML document thanks to the code above)
//     res.end(myHTML);
//   }
  
  // When someone visits any path that is not specifically defined, this function is run.
//   function display404(url, res) {
//     var myHTML = "<html>" +
//       "<body><h1>404 Not Found </h1>" +
//       "<p>The page you were looking for: " + url + " can not be found</p>" +
//       "</body></html>";
  
    // Configure the response to return a status code of 404 (meaning the page/resource asked for couldn't be found), and to be an HTML document
    // res.writeHead(404, { "Content-Type": "text/html" });
  
    // End the response by sending the client the myHTML string (which gets rendered as an HTML document thanks to the code above)
    // res.end(myHTML);