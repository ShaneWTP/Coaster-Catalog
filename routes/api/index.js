const router = require("express").Router();
const coasterRoutes = require("./coasters");
const userRoutes = require("./user");

// routes map to /api
router.use("/coasters", coasterRoutes);
router.use("/user", userRoutes);


module.exports = router;
