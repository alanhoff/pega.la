var requi = require('requi');
var httpServer = require(__dirname + '/lib/http');
var log = require(__dirname + '/lib/log');
var config = require(__dirname + '/lib/config');
var db = require(__dirname + '/lib/db');

// Carregando as rotas da aplicação
requi(__dirname + '/routes');

// Inicializando o servidor http
httpServer.start(function(err){
  if(err)
    throw err;
    
  log.info('Servidor iniciado na porta ' + httpServer.info.port +
  ' no modo ' + config.get('mode'));
});
