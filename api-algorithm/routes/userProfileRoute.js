const express = require("express");
const userProfileController = require("../controllers/userProfileController");
const { validateFields } = require("../validations/requestValidator");

const router = express.Router();

// api/user-profile
router.get("/", validateFields, userProfileController.createProfile);

module.exports = router;
