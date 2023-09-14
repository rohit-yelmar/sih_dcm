// For changing Error message from HTML to JSON format.
// Custom middleware that will transform the error responses to JSON.
const { errorCodes } = require("../errorCodes");

const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  switch (statusCode) {
    case errorCodes.NOT_FOUND:
      res.json({
        title: "NOT FOUND",
        message: err.message,
        stackTrace: err.stack,
      });
      break;

    case errorCodes.FORBIDDEN:
      res.json({
        title: "FORBIDDEN ERROR",
        message: err.message,
        stackTrace: err.stack,
      });
      break;

    case errorCodes.VALIDATION_ERROR:
      res.json({
        title: "VALIDATION ERROR",
        message: err.message,
        stackTrace: err.stack,
      });
      break;

    case errorCodes.UNAUTHORIZED:
      res.json({
        title: "UNAUTHORISED ERROR",
        message: err.message,
        stackTrace: err.stack,
      });
      break;

    case errorCodes.SERVER_ERROR:
      res.json({
        title: "SERVER ERROR",
        message: err.message,
        stackTrace: err.stack,
      });
      break;

    default:
      console.log("SERVER IS RUNNING WELL, NO ERROR FOUND!");
      break;
  }
};

module.exports = errorHandler;
