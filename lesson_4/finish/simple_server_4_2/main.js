"use strict";

const port = 3000,
  http = require("http"),                             //http server protocols
  httpStatus = require("http-status-codes"),          //error 404, code200-OK, all types of http codes-----
  app = http.createServer((request, response) => {    //create http server
    console.log("Received an incoming request!");     //prints to CMD per request
    response.writeHead(httpStatus.OK, {               //responds with metaData header of OK/200code
      "Content-Type": "text/html"                     //body/content formatting supports text/html
    });

    let responseMessage = "<h1>Hello, Universe!</h1>";    //text content as quoted
    response.write(responseMessage);                      //writes text to http response
    response.end();                                       //end transmission
    console.log(`Sent a response : ${responseMessage}`);  //log interpolation
  });

app.listen(port);   //actively listens to port
console.log(`The server has started and is listening on port number: ${port}`);   //log active port
