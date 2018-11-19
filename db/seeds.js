const mongoose = require('mongoose');
const environment = require('../config/environment');
const Country = require('../models/country');

const Food = require('../models/food');
// const User = require('../models/user');

mongoose.connect(environment.dbUri);

const countryIds = [
  '5be9860fcb16d525543ceda6'
];




const countryData = [
  {
    _id: countryIds[0],
    name: 'Taiwan',
    region: 'Asia',
    flagUrl: 'https://restcountries.eu/data/twn.svg',
    Alpha3Code: 'TWN'
  }
];


Country.create(countryData)
  .then(countries => {
    console.log(`Created ${countries.length} fishes`);
    mongoose.connection.close();
  });


const foodData = [
  {
    name: 'Bubble Tea',
    description: 'Bubble tea (also known as pearl milk tea, bubble milk tea, booby tea, bubble cup, or simply boba) (Chinese: 波霸奶茶; pinyin: bōbà nǎichá, with tapioca balls it is 珍珠奶茶; zhēnzhū nǎichá) is a Taiwanese tea-based drink invented',
    image: 'https://www.instagram.com/p/BQmQmfqBldw/',
    country: countryIds[0]
    // comments: [{
    //   text: 'Amazing!!',
    //   user: { type: mongoose.Schema.ObjectId, ref: User },
    //   createdBy: { type: mongoose.Schema.ObjectId, ref: User }
    // }]
  }
];


Country.collection.drop();
Food.collection.drop();
// User.collection.drop();

// Country.create(countryData)
//   .then(result => {
//     console.log(`Created ${result.length} countries!`);
//   };
// Food.create(foodData)
//   .then(result => {
//         console.log(`Created ${result.length} foods!`);
//     mongoose.connection.close();
//   });



Food.create(foodData)
  .then(foods => {
    console.log(`Created ${foods.length}`);
    // User.create(userData)
    //   .then(users => {
    //     mongoose.connection.close();
  });

Country.create(countryData)
  .then(countries => {
    mongoose.connection.close();
    console.log(`Created ${countries.length}`);
  });
