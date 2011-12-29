var models = require("../models/models");
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Cabin' })
};