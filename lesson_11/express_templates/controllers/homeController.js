"use strict";

exports.logRequestPaths = (req, res, next) => {
  console.log(`request made to: ${req.url}`);//log the requested directory
  next();
};

exports.sendReqParam = (req, res) => { //log requested parameter
  let veg = req.params.vegetable;
  res.send(`This is the page for ${veg}`);
};

exports.respondWithName = (req, res) => {
  res.render("index");//renders response
};
