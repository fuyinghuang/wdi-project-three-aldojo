const mongoose = require('mongoose');
const environment = require('../config/environment');
const Country = require('../models/country');
const Food = require('../models/food');
const User = require('../models/user');
mongoose.connect(environment.dbUri);

// This removes all previous data in the collection under the name Book.
Country.collection.drop();
Food.collection.drop();
User.collection.drop();

const userIds = [
  '5be9860fcb16d525543ceda1',
  '5be9860fcb16d525543ceda2',
  '5be9860fcb16d525543ceda3'
];

const userData = [
  {
    _id: userIds[1],
    username: 'Alex',
    email: 'alex@superdude.org.uk',
    password: 'pass'
  }, {
    _id: userIds[0],
    username: 'Grant',
    email: 'grant_is_great@btinternet.com',
    password: 'pass'
  }
];


const countryData = [
  {
    name: 'Taiwan',
    region: 'Asia',
    flagUrl: 'https://restcountries.eu/data/twn.svg',
    Alpha3Code: 'TWN'
  }
];


const foodData = [
  {
    name: 'Bubble Tea',
    description: 'Bubble tea (also known as pearl milk tea, bubble milk tea, booby tea, bubble cup, or simply boba) (Chinese: 波霸奶茶; pinyin: bōbà nǎichá, with tapioca balls it is 珍珠奶茶; zhēnzhū nǎichá) is a Taiwanese tea-based drink invented',
    image: 'https://www.instagram.com/p/BQmQmfqBldw/',
    country: [{ type: mongoose.Schema.ObjectId, ref: Country }],
    comments: [{
      text: 'Amazing!!',
      user: { type: mongoose.Schema.ObjectId, ref: User },
      createdBy: { type: mongoose.Schema.ObjectId, ref: User }
    }]
  }
];



Country.create(countryData)
  .then(result => {
    Food.create(foodData)
      .then(result => {
        User.create(userData)
          .then(result => {
            console.log(`Created ${result.length} users`);
          });
        console.log(`Created ${result.length} foods!`);
      });
    console.log(`Created ${result.length} countries!`);
    mongoose.connection.close();
  });
