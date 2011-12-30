//ref: http://gatapia.github.com/nclosure/node/symbols/node.repl.html
var mongoose = require("mongoose");
var models = require("./models/models");
  
mongoose.connect("mongodb://localhost/cabin_development");

var repl = require("repl");

repl.start("node> ");