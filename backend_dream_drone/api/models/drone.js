var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var droneSchema = new Schema({
  name: {
    type: String,
  },

  description: {
    type: String,
  },

  features: [{type: mongoose.Schema.Types.ObjectId, ref: 'Feature'}],

  mainStory: {type: mongoose.Schema.Types.ObjectId, ref: 'Story'},

  subStories: [{type: mongoose.Schema.Types.ObjectId, ref: 'Story'}],

  createdBy: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},

  createdDate: {
    type: Date,
    default: Date.now
  },
  
});

module.exports = mongoose.model('Drone', droneSchema);
