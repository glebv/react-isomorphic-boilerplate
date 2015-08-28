//import express from "express";
//import React from "react";
//import Router from "react-router";
//const app = express();

var express = require('express');
var app = express();
var errorHandler = require('errorhandler');



// set up Jade
app.use(express.static('./public'));
app.use(errorHandler({
  dumpExceptions: true,
  showStack: true
}));
app.listen(8080, 'localhost');

//app.set('views', './views');
//app.set('view engine', 'jade');



//import routes from "../shared/routes";
//
//app.get('/app', function (req, res) {
//  Router.run(routes, req.url, Handler => {
//    let content = React.renderToString(<Handler />);
//    res.render('index', { content: content });
//  });
//});


