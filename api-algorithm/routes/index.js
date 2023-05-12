const express = require("express");

const randomNumberRoute = require("./randomNumberRoute");
const userProfileRoute = require("./userProfileRoute");
const filterCharecterRoute = require("./filterCharecterRoute");

const router = express.Router();

router.use("/random-number", randomNumberRoute);
router.use("/user-profile", userProfileRoute);
router.use("/filter-charecters", filterCharecterRoute);

module.exports = router;
