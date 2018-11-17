const mongoose = require('mongoose');

const countrySchema = mongoose.Schema({
  name: String,
  region: String,
  flagUrl: String,
  Alpha3Code: String
});




const countryModel = mongoose.model('Country', countrySchema);
module.exports = countryModel;
