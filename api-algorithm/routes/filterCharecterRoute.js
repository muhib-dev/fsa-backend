const express = require("express");
const filterCharecterController = require("../controllers/filterCharecterController");
const { validateText } = require("../validations/requestValidator");

const router = express.Router();

// api/filter-charecters
router.get("/", validateText, filterCharecterController.filterCharecters);

module.exports = router;
