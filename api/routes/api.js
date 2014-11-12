// Rota responsável por distribuir o HTML
var server = require(__dirname + '/../lib/http');
var db = require(__dirname + '/../lib/db');

server.route({
  method: 'GET',
  path: '/',
  handler: function(req, res){
    var data = {url: 'http:google.com', short: '121212', views: 0};

    db.push('121213', data, function(err){
        if(err)
          throw err;

        db.find('121212', function(err, doc){
          if(err)
            throw err;

          res(doc);
        });
    });


  }
});
