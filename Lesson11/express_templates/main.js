"use strict";

// --- RUN "NPM START"
// http://localhost:3000/
// http://localhost:3000/items/:vegetable
// http://localhost:3000/name/:thaps

// http://localhost:3000/ images/cat.jpg
// http://localhost:3000/404.html
// http://localhost:3000/name/jon   //from text book page117, 2nd last line of first paragraph

const express = require("express"),//retrieve express
  app = express(), //launch express app
  errorController = require("./controllers/errorController"),//assign error controller
  homeController = require("./controllers/homeController"),//assign home controller
  layouts = require("express-ejs-layouts");//rettrieve layouts

app.set("port", process.env.PORT || 3000);//set to 330 port
app.set("view engine", "ejs");//EJS front end engine

app.use(express.static("public"));//serve static(non-changing) files from "public" directory
app.use(layouts);//engage EJS layouts
app.use(
  express.urlencoded({
    extended: false//no incoding of information in URL hence: "false"
  })
);
app.use(express.json());//middleware for processing JSON
app.use(homeController.logRequestPaths);

app.get("/name", homeController.respondWithName);//will evoke error
app.get("/items/:vegetable", homeController.sendReqParam);//will actually

app.post("/", (req, res) => {
  console.log(req.body);//log request body content
  console.log(req.query);//log request query content
  res.send("POST Successful!");//200, OK http in background ofcourse
});

//all resources below engage incase needed
app.use(errorController.logErrors);
app.use(errorController.respondNoResourceFound);
app.use(errorController.respondInternalError);

app.listen(app.get("port"), () => {
  console.log(`Server running at http://localhost:${app.get("port")}`);//logs active port "3000"
});
