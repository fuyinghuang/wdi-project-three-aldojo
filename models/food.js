const mongoose = require('mongoose');

const foodSchema = mongoose.Schema({
  name: String,
  description: String,
  image: String,
  country: {
    type: mongoose.Schema.ObjectId,
    ref: 'Country'
  },
  comments: [
    {
      text: String,
      commentAuthor: {
        type: mongoose.Schema.ObjectId,
        ref: 'User'
      }
    }
  ],
  votes: [{ type: mongoose.Schema.ObjectId, ref: 'User' }]
});

const foodModel = mongoose.model('Food', foodSchema);
module.exports = foodModel;
