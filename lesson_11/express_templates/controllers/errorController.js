"use strict";

const httpStatus = require("http-status-codes");//include httpStatuses

exports.logErrors = (error, req, res, next) => {
  console.error(error.stack);//incase of error, push it to console
  next(error);
};

exports.respondNoResourceFound = (req, res) => {
  let errorCode = httpStatus.NOT_FOUND;//incase the files are not found in directory
  res.status(errorCode);//respond with error code
  res.send(`${errorCode} | The page does not exist!`);//attach message to error code
};

exports.respondInternalError = (error, req, res, next) => {
  let errorCode = httpStatus.INTERNAL_SERVER_ERROR;// 500 codes, server errors these ones
  console.log(`ERROR occurred: ${error.stack}`);//log stack for details
  res.status(errorCode);//set status property to error code
  res.send(`${errorCode} | Sorry, our application is experiencing a problem!`);//reply code and text
};
