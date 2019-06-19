const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");
// const MongoStore = require('connect-mongo')(session)

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
app.use(session({ secret: 'keyboard cat',// a random string to make the hash
                  // do you want to persist session in database? This is how.
                  // store: new MongoStore({ mongooseConnection: dbConnection }),
                  // store: new MongoStore({ mongooseConnection: mongoose.connection }),
                  resave: false, // if false, will not resave to the session store unless the session is modified. Modified means adding a property to req.session or changing a variable value.
                  saveUninitialized:false //An uninitialized session is an unmodified one. When set to false, the session won’t be saved unless we modify it. It also won’t send the id back to the browser.
                })); // session secret
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

const mongoURL = process.env.PROD_MONGODB || "mongodb://localhost:27017/coasterdb"
mongoose.connect(mongoURL, {useNewUrlParser: true})
  .then(() => {
    console.log("🗄 ==> Successfully connected to mongoDB.");
  })
  .catch((err) => {
    console.log(`Error connecting to mongoDB: ${err}`);
  });

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
