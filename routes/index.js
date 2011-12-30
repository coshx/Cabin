var models = require("../models/models");

module.exports = function(req, res){
  res.render('index', { title: 'Cabin' })
};