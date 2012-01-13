// A well-intentioned but not-quite-functional attempt at making it so you can get a console running with Mongoose and your models loaded up already.
// Sort of like what we'd get with Rails and 'rails c'. If anyone knows how to make this work... please share. :)

//ref: http://gatapia.github.com/nclosure/node/symbols/node.repl.html
var mongoose = require("mongoose");
var models = require("./models/models");
  
mongoose.connect("mongodb://localhost/cabin_development");

var repl = require("repl");

repl.start("node> ");