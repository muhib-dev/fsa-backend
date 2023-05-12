const express = require("express");
const userProfileController = require("../controllers/userProfileController");
const { validatelist } = require("../validations/requestValidator");

const router = express.Router();

// api/user-profile
router.post("/", validatelist, userProfileController.createProfile);

module.exports = router;
