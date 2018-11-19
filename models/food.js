const mongoose = require('mongoose');
// const User = require('./user');


// Basic food schema
const foodSchema = mongoose.Schema({
  name: String,
  description: String,
  image: String,
  country: { type: mongoose.Schema.ObjectId, ref: 'Country' }
});


const foodModel = mongoose.model('Food', foodSchema);
module.exports = foodModel;
