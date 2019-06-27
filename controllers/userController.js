const db = require("../models");

// Defining methods for the userController
module.exports = {

  // add a rollercoaster to the database User
  // this depends on user stored inside a session
  addNewCoaster: function (req, res) {
    let coasterId = req.body.coaster;
    // let's find the user and push the rollercoaster
    // db.User
    // only do the push if coasters.coaster doesn't already have
    // the coasterId inside... no duplicates
    db.User
      .update({
        _id: req.user._id,
        'coasters.coaster': { $ne: coasterId }
      },
        { $push: { coasters: { coaster: coasterId, numRides: 1 } } }, { new: true })
      .then(dbModel => res.status(200).json(dbModel))
      .catch(err => res.status(422).json(err));

  },

  // increase the number of rides on a rollercoaster
  // get the coaster id from the req.body
  // get a user from the server session req.user._id
  addCoasterRide: function (req, res) {
    
    // get a rollercoaster you want to increase the ride on
    // get the coaster id from the req.body
    let coasterId = req.body.coaster;

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
        res.status(200).json(req.user);
      })
      .catch(err => res.status(422).json(err));
      
  },

  // get the user stored inside session
  getUser: function (req, res) {
    console.log('===== getuser!!======');
    if (req.user) {
      res.status(200).json({ user: req.user });
    } else {
      res.status(200).json({ user: null });
    }
  }
};



