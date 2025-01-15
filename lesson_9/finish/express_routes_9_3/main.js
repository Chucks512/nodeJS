"use strict";
//type into browser URL bar...
// http://localhost:3000/items/:vegetable
//vegetable is sent as a parameter in items

const port = 3000,
  express = require("express"),
  app = express(),
  homeController = require("./controllers/homeController");//import controller

app.use(
  express.urlencoded({
    extended: false//no extra data allowed in the URL link
  })
);
app.use(express.json());

app.use((req, res, next) => {
  console.log(`request made to: ${req.url}`);//log URL
  next();
});

app.post("/", (req, res) => {
  console.log(req.body);
  console.log(req.query);
  res.send("POST Successful!");//res if successful
});

app.get("/items/:vegetable", homeController.sendReqParam);//get data or replave vegetable with other test word

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);//log port
});
