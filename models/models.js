// All models will be made available through this file's exports.
// That said, at the time of this writing... there's only one. Still, it seems like a sound way to go about styling the requires.

var mongoose = require("mongoose")
  , AppLog = require("./app_log")

module.exports.AppLog = AppLog;