var models = require("../models/models");

module.exports = function(req, res){
  console.log("hi");
  json = "";
  models.AppLog.find({}, function(err, logs) {    
    logs.forEach(function(log, index) {
      json += JSON.stringify(log);
    });
    res.end(json);
  });
}