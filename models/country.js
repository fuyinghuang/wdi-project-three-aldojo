const mongoose = require('mongoose');

const countrySchema = mongoose.Schema({
  name: String,
  region: String,
  flagUrl: String,
  alpha3Code: String,
  comments: [
    {
      text: String,
      commentAuthor: {
        type: mongoose.Schema.ObjectId,
        ref: 'User'
      }
    }
  ]
});

countrySchema.virtual('nationalFood', {
  ref: 'Food',
  localField: '_id',
  foreignField: 'country'
});

countrySchema.set('toJSON', {
  virtuals: true
});






const countryModel = mongoose.model('Country', countrySchema);
module.exports = countryModel;
