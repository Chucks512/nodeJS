"use strict";

const port = 3000,
  express = require("express"),
  app = express();
app
  .get("/", (req, res) => {
    console.log(req.params);//parameters
    console.log(req.body);//body metadata
    console.log(req.url);//url link
    console.log(req.query);//user query
    res.send("Hello, Universe!");
  })
  .listen(port, () => {//log port
    console.log(`The Express.js server has started and is listening on port number: ${port}`);
  });
