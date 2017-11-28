var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Our user model.
var User = new Schema({
  name: String,
  password: String,
  email: String
});

module.exports = mongoose.model('User', User);