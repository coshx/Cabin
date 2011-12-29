var mongoose = require("mongoose")

var AppLogSchema = new mongoose.Schema({
    host  :      { type: String, required: true } 
  , timestamp :  { type: Number, index: true }
  , application: { type: String, required: true }
  , location:    { type: String, required: true }
  , tags:        { type: [String] }
  , severity:    { type: String }
  , message:     { type: String }
  , messageKeywords: { type: [String] }
});

var AppLog = mongoose.model("AppLog", AppLogSchema);

module.exports = AppLog;