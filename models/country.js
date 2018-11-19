const mongoose = require('mongoose');

const countrySchema = mongoose.Schema({
  name: String,
  region: String,
  flagUrl: String,
  Alpha3Code: String
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
