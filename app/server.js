// Requirements
var express = require("express");
var path = require("path");

// Server info
var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var reservations = [];
var waitingList = [];

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

app.post("/api/reservations", function(req, res) {
  var newReservations = req.body;

  if (reservations.length < 5) {
    reservations.push(newReservations);
    console.log(reservations);
  } else {
    waitingList.push(newReservations);
    console.log(waitingList);
  }
});

app.get("/api/reservations", function(req, res) {
  console.log(res);

  res.json(reservations);
});

// =============================End=========================
app.listen(PORT, function() {
  console.log("App Listening on PORT: " + PORT);
});
