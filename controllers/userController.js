const db = require("../models");

// Defining methods for the userController
module.exports = {

  // add a rollercoaster to the database User
  // this depends on user stored inside a session
  addNewCoaster: function (req, res) {
    // get a user from the server session
    console.log("INSIDE Controller " + JSON.stringify(req.user));
    // get a rollercoaster you want to add
    console.log("INSIDE Controller " + JSON.stringify(req.body));
    let coasterId = req.body.coaster;

    // let's find the user and push the rollercoaster
    // db.User
    // only do the push if coasters.coaster doesn't already have
    // the coasterId inside... no duplicates
    db.User
      .update({
        _id: req.user.id,
        'coasters.coaster': { $ne: coasterId }
      },
        { $push: { coasters: { coaster: coasterId, numRides: 1 } } }, { new: true })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));

  },

  // increase the number of rides on a rollercoaster
  // this relies on coaster information stored inside session
  addCoasterRide: function (req, res) {
    // get a user from the server session
    console.log("INSIDE Controller User" + JSON.stringify(req.user));
    // get a rollercoaster you want to increase the ride on
    console.log("INSIDE Controller Req.Body" + JSON.stringify(req.body));

    // get the coaster id from the req.body
    let coasterId = req.body.coaster;

    console.log("here is what we are giving as coasterId " + coasterId);
    console.log("here is want we use for userId " + req.user._id);

    // let's find the database user and the rollercoaster and modify the numRides field

    // this version returns the new user object
    // db.User
    //   .findOneAndUpdate({
    //     "_id": req.user._id,
    //     "coasters.coaster": coasterId
    //   },
    //     { "$inc": { "coasters.$.numRides": 1 }}, {new: true}, function(err, user){

    //       if (err)
    //       {
    //         res.status(422).json(err);
    //       } else {
    //           console.log("controller after update user is " + JSON.stringify(user, null, 2))
    //           // HLS need to send back a user
    //           res.json(user);
    //       }
    //   })

    // this version returns success data
      db.User
      .updateOne({
        // "_id": req.user.id,
        // "coasters._id": coasterId
        "_id": req.user._id,
        "coasters.coaster": coasterId
      },
        { "$inc": { "coasters.$.numRides": 1 } })
      .then(result => {
        console.log("controller after update user is " + JSON.stringify(req.user, null, 2));
        // HLS I hoped this would call deserialize but it didn't
        res.json(req.user);

      })
      .catch(err => res.status(422).json(err));
      
  },

  // get the user stored inside session
  getUser: function (req, res) {
    console.log('===== user!!======');
    console.log(req.user);
    if (req.user) {
      res.json({ user: req.user });
    } else {
      res.json({ user: null });
    }
  }
};



