var models = require("../models/models");
/*
 * GET home page.
 */

module.exports = function(req, res){
  res.render('index', { title: 'Cabin' })
};