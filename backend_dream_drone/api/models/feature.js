var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var projectSchema = new Schema({
  title: {
    type: String,
    required: 'Please enter title'
  },
  description: {
    type: String,
    required: 'Please enter description'
  },
  imageURL: {
    type: String,
  },
  createdBy: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  
  createdDate: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Feature', projectSchema);
