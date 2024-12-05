"use strict";

const httpStatus = require("http-status-codes"),
  htmlContentType = {
    "Content-Type": "text/html"
  },
  routes = {
    GET: {
      "/info": (req, res) => {//info directory
        res.writeHead(httpStatus.OK, {
          "Content-Type": "text/plain"
        });
        res.end("Welcome to the Info Page!");//info response
      }
    },
    POST: {}
  };

exports.handle = (req, res) => {
  try {
    if (routes[req.method][req.url]) {
      routes[req.method][req.url](req, res);
    } else {
      res.writeHead(httpStatus.NOT_FOUND, htmlContentType);
      res.end("<h1>No such file exists</h1>");//response if file not found
    }
  } catch (ex) {//catches whatever error present
    console.log("error: " + ex);// logs error
  }
};

exports.get = (url, action) => {
  routes["GET"][url] = action;//export get request args
};

exports.post = (url, action) => {
  routes["POST"][url] = action;//export post request args
};
