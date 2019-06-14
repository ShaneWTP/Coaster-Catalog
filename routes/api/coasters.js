const router = require("express").Router();
const coastersController = require("../../controllers/coastersController");

// Matches with "/api/books"
router.route("/")
  .get(coastersController.findAll)
  .post(coastersController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(coastersController.findById)
  .put(coastersController.update)
  .delete(coastersController.remove);

module.exports = router;