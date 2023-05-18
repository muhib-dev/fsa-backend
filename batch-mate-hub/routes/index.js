const express = require("express");

const studentRoute = require("./studentRoute");

const router = express.Router();

router.use("/students", studentRoute);

module.exports = router;
