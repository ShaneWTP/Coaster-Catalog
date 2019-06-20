const router = require("express").Router();
const userController = require("../../controllers/userController");

// the coaster to add will be in the request
// map to /api/user/addcoaster
router.route("/addcoaster")
  .post(userController.addNewCoaster);

  // map to /api/user/addride
  // roller coaster want to add a ride to will be in request
router.route("/addride")
  .post(userController.addCoasterRide);


  module.exports = router;