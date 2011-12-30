var models = require("../models/models");

var getQueryParams = function(req) {
  var params = {};
  var foundParams = false;
  // get only the ones the user specified the value for to use in the query
  ["host", "timestamp", "application", "location", "tags", "severity", "message"].forEach(function(possibleParam) {
    var param = req.param(possibleParam);
    if(param !== '' && param !== null && param !== undefined) {
      params[possibleParam] = param;
      foundParams = true;
    }
  });
  if (foundParams) {
    return params;
  } else {
    return false;
  }
}

module.exports = function(req, res){
  var params = getQueryParams(req);
  if(params === false) {
    models.AppLog.find({}, function(err, logs) {
      if (err) throw err;
      res.send({"logs": logs});
    });
  } else {
    var query = models.AppLog;  
    if (params["host"]) {
      query = query.where("host", params["host"]);
    }
    if (params["timestamp"]) {
      // hmm, how to do this...
    }
    if (params["application"]) {
      query = query.where("application", params["application"]);
    }
    if (params["severity"]) {
      query = query.where("severity", params["severity"]);
    }
    if (params["location"]) {
      var fileLineSplit = params["location"].split(":");
      if (fileLineSplit.length === 2) { // they specified a file and line number
        query = query.where("location", params["location"]);
      } else { // they only gave the filename
        query = query.where("locationFile", params["location"]);
      }
    }
    if (params["tags"]) {      
      var tags = params["tags"].split(",");
      var trimmedTags = [];
      tags.forEach(function(tag, index) {
        trimmedTags.push(tag.trim());
      });
      query = query.where("tags").in(trimmedTags);
    }

    query.exec(function(err, logs) {
      ret = {logs: []};
      if (err) {console.log(err); res.send(err, 401); return;};
      logs.forEach(function(log, index) {
        ret.logs.push(log);
      });
      res.send(ret);
    });
  }
};