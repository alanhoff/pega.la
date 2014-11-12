var level = require('levelup');
var hooks = require('level-hooks')

var db = level(__dirname+'/db', {
  valueEncoding: 'json'
});

db.on('put', function(key, val, thrid){
  console.log(key);
  console.log(val);
  console.log(thrid);
});

/*hooks(db) //previously: Hooks()(db)

db.hooks.pre({start: '0', end: '999'}, function(change, add){
  console.log(change);
  add({type: 'get', key: 'views', value: change.views +1});
});
*/
var conns = {
  _db: db
};

conns.find = function(value, cb){
  db.get(value, function(err, data){
    if(err){
      if(err.notFound){
        return cb('notFound', null);
      }
      return cb(err, null);
    }

    cb(null, data);

  });
};

conns.push = function(key, data, cb){
  db.put(key, data, function(err){
    if(err){
      cb(err);
    }
    cb(null);
  });
};

conns.remove = function(key, cb){
  db.del(key, function(err){
    if(err){
      cb(err);
    }
    cb(null);
  });
};
module.exports = conns;
