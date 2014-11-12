// Lib responsável por controlar o servidor HTTP

var Hapi = require('hapi');
var config = require(__dirname + '/config');
var server = new Hapi.Server(config.get('port'));

module.exports = server;
