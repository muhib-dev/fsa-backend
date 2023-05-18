const express = require("express");

const routes = require("../routes");
const globalMiddleware = require("./globalMiddleware");
const { globalErrorHandler, notFoundErrorHandler } = require("./globalError");

const app = express();

// global middleware
app.use(globalMiddleware);

// routes
app.use("/api", routes);

// health route
app.get("/health", (req, res) => {
  res.json({ message: "api is running!" });
});

// home route
app.get("/", (req, res) => {
  res.json({ message: "api doc coming soon!" });
});

// not found error
app.use(notFoundErrorHandler);

// global error
app.use(globalErrorHandler);

module.exports = app;
