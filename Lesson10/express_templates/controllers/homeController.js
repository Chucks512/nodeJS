"use strict";

exports.sendReqParam = (req, res) => {
  let veg = req.params.vegetable;//set parameters
  res.send(`This is the page for ${veg}`);//send private variable concatenated
};

// exports.respondWithName = (req, res) => {
//   let paramsName = req.params.myName;
//   res.render("index", { name: paramsName });
// };

exports.respondWithName = (req, res) => {
 res.render("index", { firstName: req.params.myName });//set name parameter
};


// Inside index.ejs use <% let name = firstName; %>
// OR <h1> Hello,
//   <%= firstName %>
//   </h1>
