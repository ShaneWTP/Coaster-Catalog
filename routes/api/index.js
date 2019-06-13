const router = require("express").Router();
const coasterRoutes = require("./coasters");

// Book routes
router.use("/coasters", coasterRoutes);

module.exports = router;
