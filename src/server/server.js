import express from "express";
import React from "react";
import Router from "react-router";
import httpProxy from 'http-proxy';

const app = express();
const proxy = httpProxy.createProxyServer();


app.use(express.static('./public'));
app.set('public', './public');

// set up Jade
app.set('views', './views');
app.set('view engine', 'jade');


import routes from "../shared/routes";

app.all('/build/*', function (req, res) {
  proxy.web(req, res, {
    target: 'http://localhost:8080'
  });
});

app.all('/*', function (req, res) {
  Router.run(routes, req.url, Handler => {
    let content = React.renderToString(<Handler />);
    res.render('index', { content: content });
  });
});

app.use(function(req, res, next) {
  res.status(404).send('Sorry can\'t find that!');
});

var server = app.listen(8081, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});

proxy.on('error', function(e) {
  console.log('Could not connect to proxy, please try again...');
});
