var models = require("../models/models");

var fieldsToReturn = ["host", "timestamp", "application", "location", "tags", "severity", "message"];

var getQueryParams = function(req) {
  var params = {};
  var foundParams = false;
  // get only the ones the user specified the value for to use in the query
  ["host", "timestampFrom", "timestampTo", "application", "location", "tags", "severity", "message"].forEach(function(possibleParam) {
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
    models.AppLog.find({}, fieldsToReturn, {limit: 1000}, function(err, logs) {
      if (err) throw err;
      res.send({"logs": logs});
    });
  } else {
    var query = models.AppLog;  
    
    if (params["host"]) {
      query = query.where("host", params["host"]);
    }
    if (params["timestampFrom"]) {
      query = query.where("timestamp").gte(params["timestampFrom"]);
    }
    if (params["timestampTo"]) {
      query = query.where("timestamp").lte(params["timestampTo"]);
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
      query = query.where("tags").all(tags);
    }
    if (params["message"]) {
      var words = params["message"].split(/\s/);
      query = query.where("messageKeywords").all(words);
    }

    query = query.select(fieldsToReturn);
    query.exec(function(err, logs) {
      if (err) {
        console.log(err);
        res.send(err, 401); 
        return;
      }
      
      res.send({"logs": logs});
    });
  }
};