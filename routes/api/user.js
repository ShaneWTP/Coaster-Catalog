const router = require("express").Router();
const userController = require("../../controllers/userController");

// the coaster id to add will be in the request
// map to /api/user/addcoaster
router.route("/addcoaster")
  .post(userController.addNewCoaster);

// map to /api/user/addride
// the roller coaster id that you want to add a ride to should be in request
router.route("/addride")
  .put(userController.addCoasterRide);

// this gets a user from the session
// why not get user from the database? 
// deserializeUser is the method that is called on all subsequent requests after login. It is middleware that will make sure that the session is populated from the database.
// map to /api/user
router.route("/")
  .get(userController.getUser);

module.exports = router;