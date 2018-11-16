const mongoose = require('mongoose');
const User = require('./user');
const Country = require('./country');

// Basic food schema
const foodSchema = mongoose.Schema({
  name: String,
  description: String,
  image: String,
  country: [{ type: mongoose.Schema.ObjectId, ref: Country }],
  comments: [{
    text: String,
    user: { type: mongoose.Schema.ObjectId, ref: User },
    createdBy: { type: mongoose.Schema.ObjectId, ref: User }
  }]
});


const foodModel = mongoose.model('Food', foodSchema);
module.exports = foodModel;
