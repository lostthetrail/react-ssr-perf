var express = require('express');
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var LayerCake = require('./LayerCake');

var ReactAddonsPerf = require('react-addons-perf');

var app = express();

app.get('/', function (req, res) {
    ReactAddonsPerf.start();
    var result = ReactDOMServer.renderToString(<LayerCake />);
    ReactAddonsPerf.stop();
    ReactAddonsPerf.printInclusive();
    res.send('Hello World! ' + result);
});

app.listen(8080, function () {
    console.log('Example app listening on port 8080!');
});
