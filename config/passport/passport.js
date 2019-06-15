// This file defines our authentiction strategies. 
// We have different strategies for signup and signin.
// The password is encrypted

// bcrypt which we need to secure passwords.
var bCrypt = require('bcrypt-nodejs');
var User = require("../../models/user");

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
      User.findOne({
        where: {
          username: username
        }
      }).then(function (user) {

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


  function(req, username, password, done) {
      var User = user;
      // this method checks if the password entered matches the database
      var isValidPassword = function(userpass, password) {
          return bCrypt.compareSync(password, userpass);
      }

      // Check if the user exists in the database
      User.findOne({
          where: {
              username: username
          }
      }).then(function(user) {
          if (!user) {
              return done(null, false, {
                  message: 'User does not exist'
              });
          }

      // here we check if the password entered matches the database
      if (!isValidPassword(user.password, password)) {
              return done(null, false, {
                  message: 'Incorrect password.'
              });
          }

          var userinfo = user.get();
          return done(null, userinfo);

      }).catch(function(err) {

          console.log("Error:", err);
          return done(null, false, {
              message: 'Something went wrong with your Signin'
          });

      });
  }

));


  //serialize
  // serializeUser determines which data of the user object should be stored in the session. The result of the serializeUser method is attached to the session as req.session.passport.user = {}. Here for instance, it would be (as we provide the user id as the key) req.session.passport.user = {id: 'xyz'}
  passport.serializeUser(function (user, done) {
    done(null, user.id);
  });

  // deserialize user 
  // The first argument of deserializeUser corresponds to the key of the user object that was given to the done function (see 1.). So your whole object is retrieved with help of that key. That key here is the user id (key can be any key of the user object i.e. name,email etc). In deserializeUser that key is matched with the in memory array / database or any data resource.
// The fetched object is attached to the request object as req.user
  passport.deserializeUser(function (id, done) {

    // HLS use mongoose method
    User.findOne({
      where: {
        id: id
      }
    }).then(function (user) {
      if (user) {
        done(null, user.get());
      } else {
        // HLS
        // if user is null then this won't work
        // done(user.errors, null);
      }
    });
  });

}
