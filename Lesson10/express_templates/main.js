"use strict";

const express = require("express"),//import express
  app = express(),//use express template configuration
  homeController = require("./controllers/homeController"),//import homeController.js
  layouts = require("express-ejs-layouts");//import ejs layouts

app.set("port", process.env.PORT || 3000);//use port 3000
app.set("view engine", "ejs");//use ejs as front end engine

app.use(layouts);//ejs layouts
app.use(
  express.urlencoded({
    extended: false//basic url codes expected, no extensions
  })
);
app.use(express.json());//use json encoding

app.use((req, res, next) => {
  console.log(`request made to: ${req.url}`);//log url requests
  next();
});

// app.get("/name", homeController.respondWithName);  //----old code
app.get("/name/:myName", homeController.respondWithName);//use name url & parameter in browser
app.get("/items/:vegetable", homeController.sendReqParam); //use items url & parameter in browser

app.post("/", (req, res) => {
  console.log(req.body);//log front end items
  console.log(req.query);//log moving data
  res.send("POST Successful!");
});

app.listen(app.get("port"), () => {
  console.log(`Server running at http://localhost:${app.get("port")}`);
});
