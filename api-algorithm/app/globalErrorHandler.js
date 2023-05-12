const globalErrorHandler = (error, req, res, next) => {
  console.log("gloal error:", error);

  if (error.status) {
    return res.status(error.status).json({ message: error.message });
  }

  res.status(500).json({ message: "Internal server error" });
};

module.exports = globalErrorHandler;
