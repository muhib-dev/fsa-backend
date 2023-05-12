const express = require("express");
const randomController = require("../controllers/randomNumberController");
const { validateInteger } = require("../validations/requestValidator");

const router = express.Router();

// api/random-number
router.get("/", validateInteger, randomController.createRandomNumberFromRange);

module.exports = router;
