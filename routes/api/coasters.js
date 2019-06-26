const router = require("express").Router();
const coastersController = require("../../controllers/coastersController");

// Matches with "/api/coasters"
router.route("/")
  .get(coastersController.findAll)
  .post(coastersController.create);

// Matches with "/api/coasters/:id"
router
  .route("/:id")
  .get(coastersController.findById)
  .put(coastersController.update)
  .delete(coastersController.remove);

// Matches with "/api/coasters/rating"
router.route("/rating")
  .post(coastersController.addRating);

module.exports = router;
