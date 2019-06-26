// This file defines our authentiction strategies. 
// We have different strategies for signup and signin.
// The password is encrypted

// bcrypt which we need to secure passwords.
var bCrypt = require('bcrypt-nodejs');
var User = require("../../models/user");
var Coaster = require("../../models/coaster");


// This is called from the server.js We are using local strategy
// module.exports = function (passport, user) {
// var User = user;
module.exports = function (passport) {
  var LocalStrategy = require('passport-local').Strategy;

  // This is the signup strategy It uses local authentication
  passport.use('local-signup', new LocalStrategy(
    {
      usernameField: 'username',
      passwordField: 'password',
      passReqToCallback: true // allows us to pass back the entire request to the callback
    },
    // this will encrypt the password
    function (req, username, password, done) {
      var generateHash = function (password) {
        return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
      };

      // Then, using the  user model we initialized earlier as User, we check to see if the user already exists, and if not we add them.
      User.findOne({ username: username},
      function (error, user) {
        if (error) {
          console.log("We had an error");
          console.log(error);
          return done(error);
        }
        
        if (user) {
          return done(null, false, {
            message: 'That username is already taken'
          });

        } else {
          var userPassword = generateHash(password);
          var data =
          {
            username: username,
            password: userPassword
          };

          // Add the new user to the database
          User.create(data).then(function (newUser, created) {
            if (!newUser) {
              return done(null, false);
            }
            if (newUser) {
              return done(null, newUser);
            }
            // handle database validation errors
          }).catch(err => {
            console.log("AN ERROR IN USER CREATE " + JSON.stringify(err, null, 2));
            console.log("AN ERROR IN USER CREATE " + err.message);
            // res.status(422).json({message: err.errors.message});
            return done(null, false, {
              message: err.message
            });
          });
        }
      });
    }
  ));

  // This is the signin strategy
  passport.use('local-signin', new LocalStrategy(
    {
      // by default, local strategy uses username and password
      usernameField: 'username',
      passwordField: 'password',
      passReqToCallback: true // allows us to pass back the entire request to the callback
    },


    function (req, username, password, done) {

      console.log("inside passport.js going to authenticate " + username);

      // this method checks if the password entered matches the database
      var isValidPassword = function (userpass, password) {
        console.log("inside isValidPassword we found the user " + userpass + ", " + password);

        return bCrypt.compareSync(password, userpass);
      }

      // Check if the user exists in the database
      User.findOne({ username: username }, function (error, user) {

        console.log(JSON.stringify(user));
        if (error) {
          console.log("We had an error");
          console.log(error);
          return done(error);
        }
            if (!user) {
          console.log("Inside passport, We had an error in the database search");
          return done(null, false, {
            message: 'User does not exist'
          });
        }
        console.log("inside passport.js we found the user " + user.username);
        console.log("inside passport.js we found the user " + user.password + ", " + password);
        if (!isValidPassword(user.password, password)) {
        // here we check if the password entered matches the database
          return done(null, false, {
            message: 'Incorrect password.'
          });
        }
        console.log("inside passport.js we validated password + " + JSON.stringify(user));
        // var userinfo = user.get();
        // let userinfo = {
        //   username: user.username
        // }
        // return done(null, userinfo);
        return done(null, user);

      });
    }

  ));


  //serialize
  // serializeUser determines which data of the user object should be stored in the session. The result of the serializeUser method is attached to the session as req.session.passport.user = {}. Here for instance, it would be (as we provide the user id as the key) req.session.passport.user = {id: 'xyz'}
  passport.serializeUser(function (user, done) {
    console.log('*** serializeUser called, user: ')
    console.log(user) // the whole raw user object!
    console.log('---------')
      done(null, { _id: user._id});
  });

  // deserialize user 
  // The first argument of deserializeUser corresponds to the key of the user object that was given to the done function (see 1.). So your whole object is retrieved with help of that key. That key here is the user id (key can be any key of the user object i.e. name,email etc). In deserializeUser that key is matched with the in memory array / database or any data resource.
  // The fetched object is attached to the request object as req.user
  passport.deserializeUser(function (id, done) {
    console.log('DeserializeUser called');
    User.findOne(
      { _id: id }, ["username", "coasters"])
      .populate("coasters.coaster",
      ["name", 
      "park",
      "location",
      "height",
      "speed",
      "img1"])
      .then(function(user) {

        console.log("HEATHER here is your user " + JSON.stringify(user, null, 2));
        // now set the totalNumberOfRides
        let numRides = 0;
        let coasters = user.coasters;
        console.log('Get User: There are coasters saved for this user: ' + coasters.length);
        for (let i=0; i<coasters.length; i++){
          numRides = numRides + coasters[i].numRides;
        }
        // store to the user
        // Because user is immutable will need to do this first
        user = user.toObject();
        user.numTotalRides = numRides;

        console.log('*** Deserialize user, user:');
        console.log(JSON.stringify(user, null, 2));
        console.log('--------------');
        done(null, user);
      })
      .catch(function(err) {
        // If an error occurs, send it back to the client
        console.log(err);
        done(null, false)
      }
    )

    // User.findOne(
    //   { _id: id },
    //   'username',
    //   (err, user) => {
    //     console.log('*** Deserialize user, user:')
    //     console.log(user)
    //     console.log('--------------')
    //     done(null, user)
    //   }
    // )


  })
  
}


