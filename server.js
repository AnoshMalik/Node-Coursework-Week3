// FIRST COMMIT
const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

//Use this array as your (in-memory) data store.
const bookings = require("./bookings.json");

app.get("/", function (request, response) {
  response.send(bookings);
});

// GET SPECIFIC
app.get("/:id", function (request, response) {
  response.send(bookings.filter(booking => booking.id==request.params.id));
});



// TODO add your routes and helper functions here

const listener = app.listen(3000, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
