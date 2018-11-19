const mongoose = require('mongoose');

const countrySchema = mongoose.Schema({
  name: String,
  region: String,
  flagUrl: String,
  Alpha3Code: String
});

countrySchema.virtual('foodsCreated', {
  ref: 'Food',
  localField: '_id',
  foreignField: 'country'
});

// include virtuals in res.json
countrySchema.set('toJSON', {
  virtuals: true
});


const countryModel = mongoose.model('Country', countrySchema);
module.exports = countryModel;
