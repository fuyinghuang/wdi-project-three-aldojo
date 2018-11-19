const mongoose = require('mongoose');
const environment = require('../config/environment');
const Country = require('../models/country');
mongoose.connect(environment.dbUri);

const countryData = [
  {
    name: 'Taiwan',
    region: 'Asia',
    flagUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/bb/Blue_walleye.jpg',
    Alpha3Code: 'TWN'
  }
];

Country.create(countryData)
  .then(countries => {
    console.log(`Created ${countries.length} fishes`);
    mongoose.connection.close();
  });



// This removes all previous data in the collection under the name Book.
Country.collection.drop();
