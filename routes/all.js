var models = require("../models/models");

module.exports = function(req, res){
  ret = {logs: []};
  models.AppLog.find({}, function(err, logs) {    
    logs.forEach(function(log, index) {
      ret.logs.push(log);
    });
    res.send(ret);
  });
}