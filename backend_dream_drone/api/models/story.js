var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var storySchema = new Schema({
  text: {
    type: String
  },

  createdBy: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},

  createdDate: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Story', storySchema);
