var models = require("../models/models");

module.exports = function(req, res){
  var log = new models.AppLog(req.body);
  log.messageKeywords = log.message.split(/\s/);
  // TODO: get rid of duplicates
  log.save(function(err) {
    if (err) {
      console.log("ZOMG HORRIBLE ERROR TRYING TO SAVE LOG:", err);
      console.log("Body was:", req.body);
      console.log("but that wasn't good enough");
      res.send("Invalid log", 406);
    } else {
      res.send("OK", 201);
    }
  });
};