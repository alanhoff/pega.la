var db = require('./lib/db');
var config = require('./lib/config');
var HashIds = require('hashids');
var url = require('./lib/url');
var u = require('url');
var express = require('express');
var app = express();

var hash = new HashIds(config.secret);

app.get('/api/v1/create', function(req, res){
  if(!req.query.url || !url.check.test(req.query.url))
    return res.status(400).end();

  var result = db.create(req.query.url.trim());
  result.id = hash.encode(result.id);

  res.json(result);
});

app.get('/api/v1/status', function(req, res){
if(!req.query.code)
    return res.status(400).end();

  var id = url.check.test(req.query.code) ?
    u.parse(req.query.code).path.replace(/\//ig, '') : req.query.code;

  id = hash.decode(id);

  if(!id || !id.length)
    return res.status(400).end();

  var result = db.retrieve(id);

  if(!result)
    return res.status(404).end();


  result.id = hash.encode(result.id);
  res.json(result);
});

app.get('/:id', function(req, res){
  var id = hash.decode(req.params.id);

  if(!id || !id.length)
    return res.status(400).end();

  var result = db.retrieve(id);

  if(!result)
    return res.status(404).end();

  db.increment(id);
  res.redirect(result.url);
});

app.get('/', function(req, res){
  res.sendFile(__dirname + '/template/index.html');
});

app.listen(config.port);
