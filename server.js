const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//The following lines are for authentication
// var db = require("./models");
var passport   = require('passport');
var session    = require('express-session');
// Parse incoming request bodies in a middleware before your handlers, available under the req.body property.
var bodyParser = require('body-parser');
// The flash is a special area of the session used for storing messages. Messages are written to the flash and cleared after being displayed to the user.
// this allows a message to be flashed to the user in a session
var flash = require('connect-flash');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// For Passport
app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // session secret
// For using secure cookies in production, but allowing for testing in development
// var sess = {
//   secret: 'keyboard cat',
//   cookie: {}
// }
// if (app.get('env') === 'production') {
//   app.set('trust proxy', 1) // trust first proxy
//   sess.cookie.secure = true // serve secure cookies
// }
// app.use(session(sess));
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions(calls the deserializer)
app.use(flash()); // for session messaging

// Passport Strategy for authentication. Pass in passport and User object
// require("./config/passport/passport.js")(passport, db.User);
require("./config/passport/passport.js")(passport);
// Route for authentication
require("./routes/authRoutes")(app, passport);
// end authentication

// Define API routes here

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/coasterdb");


app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
