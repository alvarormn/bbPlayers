'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = Schema({
  name: String,
  surname: String,
  password: String,
  email: String,
  role: String,
  image: String
});

module.exports = mongoose.model('User', userSchema);
