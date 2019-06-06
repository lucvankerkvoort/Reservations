// Requirements
var express = require("express");
var path = require("path");

// Server info
var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Get and Post requests
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "./views/home.html"));
});

app.get("/home.html", function(req, res) {
  res.sendFile(path.join(__dirname, "./views/home.html"));
});

app.get("/reserve.html", function(req, res) {
  res.sendFile(path.join(__dirname, "./views/reserve.html"));
});

app.get("/tables.html", function(req, res) {
  res.sendFile(path.join(__dirname, "./views/tables.html"));
});

app.listen(PORT, function() {
  console.log("App Listening on PORT: " + PORT);
});
