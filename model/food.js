const mongoose = require('mongoose');

const foodSchema = mongoose.Schema({
  name: String,
  description: String,
  image: String,
  country: [{ type: mongoose.Schema.ObjectId, ref: Country }],
  comments: [{
    text: String,
    user: { type: mongoose.Schema.ObjectId, ref: User },
    createdBy: { type: mongoose.Schema.ObjectId, ref: User },
    votes: [User]
  }]
});


const foodModel = mongoose.model('Food', foodSchema);
module.exports = foodModel;
