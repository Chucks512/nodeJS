"use strict";

const port = 3000,
  http = require("http"),//import http protocols
  httpStatusCodes = require("http-status-codes"), //import report codes
  router = require("./router"), //import data router
  fs = require("fs"), //import file system
  plainTextContentType = {
    "Content-Type": "text/plain" //regular text used, probably UTF8
  },
  htmlContentType = {
    "Content-Type": "text/html" //regular html used
  },
  customReadFile = (file, res) => {// func accepts filename and response
    fs.readFile(`./${file}`, (errors, data) => {//args presented accordingly
      if (errors) {
        console.log("Error reading the file...");//logged if cant read file
      }
      res.end(data);//return and close response
    });
  };
router.get("/", (req, res) => {//if home directory
  res.writeHead(httpStatusCodes.OK, plainTextContentType);
  res.end("INDEX");//return the word "INDEX"
});
router.get("/index.html", (req, res) => {//if given route selected
  res.writeHead(httpStatusCodes.OK, htmlContentType);
  customReadFile("views/index.html", res);//return html index file
});
router.post("/", (req, res) => {//post request for home
  res.writeHead(httpStatusCodes.OK, plainTextContentType);
  res.end("POSTED");//close reponse with "POSTED"
});
http.createServer(router.handle).listen(3000);//localhost port
console.log(`The server is listening on port number: ${port}`);//log port
