var lmdb = require('node-lmdb');
var env = new lmdb.Env();
env.open({
  path: __dirname + '/../database',
  mapSize: 16 * 1024 * 1024 * 1024
});

var db = env.openDbi({
  name: 'links',
  create: true
});

function numberToId(number){
  var ret = Number(number).toString();
  while(ret.length < 16)
    ret = '0' + ret;

  return ret;
}

module.exports = {
  create: function(url) {

    // Um id zerado caso o banco seja novo
    var id = 0;

    // Inicia uma transação atômica
    var tx = env.beginTxn();

    // Um cursor para descobrir o último registro do banco
    var cursor = new lmdb.Cursor(tx, db);

    // Vai até a última chave inserida
    var chave = cursor.goToLast();

    // Se existir a chave incrementamos um
    if (chave)
      id = Number(chave) + 1;

    // Criamos um objeto
    var obj = {
      id: id,
      url: url,
      date: new Date(),
      hits: 0
    };

    // Adicionamos essa url no banco de dados
    tx.putString(db, numberToId(id), JSON.stringify(obj));

    // Fecha o cursor
    cursor.close();

    // Commitamos a operação
    tx.commit();

    return obj;
  },

  retrieve: function(index) {

    // Inicia uma transação
    var tx = env.beginTxn();

    // Pega a chave que está no db
    var url = tx.getString(db, numberToId(index));

    // Cancela a transação atual
    tx.abort();

    return url ? JSON.parse(url) : null;
  },

  increment: function(index) {
    var url = this.retrieve(index);

    // Se a INDEX não existir, cancela tudo
    if (!url)
      return;

    // Incrementa a contagem
    url.hits++;

    // Inicia uma transação
    var tx = env.beginTxn();
    tx.putString(db, numberToId(index), JSON.stringify(url));

    tx.commit();

    return url;
  },

  list: function() {
    var urls = [];
    // Inicia uma transação
    var tx = env.beginTxn();

    // Um cursor para descobrir o último registro do banco
    var cursor = new lmdb.Cursor(tx, db);

    for (var found = cursor.goToFirst(); found; found = cursor.goToNext())
      urls.push(JSON.parse(tx.getString(db, found)));

    cursor.close();
    tx.abort();

    return urls;
  }
};
