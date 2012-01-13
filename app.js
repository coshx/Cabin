//As is the usual with Node, begin the fun with requiring things.
var express = require('express')
  , routes = require('./routes/routes')
  , mongoose = require("mongoose")

// set up the app and make it the export
var app = module.exports = express.createServer();

// MongoDB connection
var mongoHost = process.env["CABIN_MONGODB_HOST"] || "localhost";

// Configuration
app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser());
  app.use(express.session({ secret: 'your secret here' }));
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

// Configure logging and the MongoDB connection based on the environment.
// Right now we're being lazy and just assuming the connection works.
app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
  var mongoDatabase = process.env["CABIN_MONGODB_DATABASE"] || "cabin_development";
  mongoose.connect("mongodb://" + mongoHost + "/" + mongoDatabase);
});

app.configure('production', function(){
  app.use(express.errorHandler()); 
  var mongoDatabase = process.env["CABIN_MONGODB_DATABASE"] || "cabin_production";
  mongoose.connect("mongodb://" + mongoHost + "/" + mongoDatabase);
});

// Routes - we're keeping things really simple here.
app.get("/", routes.index);
app.get("/all.json", routes.all);
app.get("/query.json", routes.query);
app.post("/", routes.postLog); // maybe this could be more RESTful if it was post to /log or /logentry or something.

app.listen(3000);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
