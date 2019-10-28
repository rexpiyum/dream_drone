var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var userSchema = new Schema({
  email: {
    type: String,
  },
  createdDate: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('User', userSchema);
