var models = require("../models/models");

module.exports = function(req, res){
  console.log(req.body);
  var log = new models.AppLog(req.body);
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