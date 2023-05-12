const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const routes = require("../routes");
const notFoundErrorHandler = require("./notFoundHandler");
const globalErrorHandler = require("./globalErrorHandler");

const app = express();

// middlewares
app.use(cors());
app.use(morgan("tiny"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/api", routes);

// health route
app.get("/health", (req, res) => {
  res.json({ message: "api is running!" });
});

// home route
app.get("/", (req, res) => {
  res.json({ message: "welcome to algorithm API!" });
});

// not found error
app.use(notFoundErrorHandler);

// global error
app.use(globalErrorHandler);

module.exports = app;
