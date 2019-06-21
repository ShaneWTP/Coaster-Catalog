const router = require("express").Router();
const coasterRoutes = require("./coasters");
const userRoutes = require("./user");


// Book routes
router.use("/coasters", coasterRoutes);
router.use("/user", userRoutes);

module.exports = router;
