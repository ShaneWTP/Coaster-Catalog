const db = require("../models");

// Defining methods for the coastersController
module.exports = {
  findAll: function(req, res) {
    db.Coaster
      .find(req.query)
      .sort({ name: 1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Coaster
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Coaster
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Coaster
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Coaster
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  addRating: function(req, res) {
    let newRating = req.body.rating;
    let coasterId = req.body.coaster;
    let numberRatings = 0;
    let calcRating = 0;

    console.log("the rating is " + newRating);
    console.log("the coaster is " + coasterId);

    // get the stored rating and the stored number of ratings
    // numRating never existed before in our documents. findOneAndUpdate will create it in db.
    // calculate a new rating and store it in database
    db.Coaster
      .findById({ _id: coasterId })
      .then(function(coaster) {

        console.log("after find by id");
        console.log(JSON.stringify(coaster), null, 2);
        if (coaster){
          // if a rating already exists in database
          if (coaster.rating && coaster.numRating)
          {
            calcRating = ((coaster.rating * coaster.numRating) + newRating)/(coaster.numRating + 1);
            numberRatings = coaster.numRating;
          } 
          // else if this is the first rating ever
          else {
            calcRating = newRating;
          }
          numberRatings++;

          console.log("the new rating is " + calcRating);
          console.log("the number rating is " + numberRatings);

          // update database with new number of ratings and the new rating
          db.Coaster
          .findOneAndUpdate({ _id: coasterId }, {rating:calcRating, numRating: numberRatings})
          .then(dbModel => {
            console.log(JSON.stringify(dbModel), null, 2);
            res.json(dbModel)})
          .catch(err => {
            console.log("Error in FindOneAndUpdate " + err);
            res.status(422).json(err);
        })
      } else {
        //coaster not found
        res.status(422).json("coaster not found");
      }
    }).catch(err => res.status(422).json(err));

  }
};
