var mongoose = require("mongoose");

/*
The basic schema for a log entry. We want things to be as simple as we can but be 'generally usable' for the logs for most applications.
These are conflicting goals so inevitably it will be overly-complex for some things but too simple for others.
Such is life. We tried our best.

Note that doing full-text search in MongoDB doesn't really work quite right. We're approximating it following the directions on Mongo's homepage
here: http://www.mongodb.org/display/DOCS/Full+Text+Search+in+Mongo

This seems like it must waste a lot of space, but I have no idea how much space things like Lucene/Solr, ElasticSearch, Sphinx, etc use
for indexing, so it might not be.
*/
var AppLogSchema = new mongoose.Schema({
    host  :       { type: String, required: true } 
  , timestamp :   { type: Number, index: true }
  , application:  { type: String, required: true }
  , location:     { type: String, required: true }
  , locationFile: { type: String }
  , locationLine: { type: Number }
  , tags:         { type: [String] }
  , severity:     { type: String }
  , message:      { type: String }
  , messageKeywords: { type: [String] } // to hold the message after we split it up into keywords for search
});

var AppLog = mongoose.model("AppLog", AppLogSchema);

module.exports = AppLog;