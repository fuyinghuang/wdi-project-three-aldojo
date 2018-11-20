const mongoose = require('mongoose');
const environment = require('../config/environment');
const Country = require('../models/country');

const Food = require('../models/food');
// const User = require('../models/user');

mongoose.connect(environment.dbUri);

const countryIds = [
  '5be9860fcb16d525543ceda6',
  '5be9860fcb16d525543ceda7'
];


const countryData = [
  {
    _id: countryIds[0],
    name: 'Taiwan',
    region: 'Asia',
    flagUrl: 'https://restcountries.eu/data/twn.svg',
    Alpha3Code: 'TWN'
  },
  {
    _id: countryIds[1],
    name: 'Argentina',
    region: 'Americas',
    flagUrl: 'https://restcountries.eu/data/arg.svg',
    Alpha3Code: 'ARG'
  }

];




const foodData = [
  {
    name: 'Bubble Tea',
    description: 'Bubble tea (also known as pearl milk tea, bubble milk tea, booby tea, bubble cup, or simply boba) (Chinese: 波霸奶茶; pinyin: bōbà nǎichá, with tapioca balls it is 珍珠奶茶; zhēnzhū nǎichá) is a Taiwanese tea-based drink invented',
    image: 'https://auchanetmoi.auchan.fr/api/v1/media_files/2885/media/798x449c',
    country: countryIds[0]
    // comments: [{
    //   text: 'Amazing!!',
    //   user: { type: mongoose.Schema.ObjectId, ref: User },
    //   createdBy: { type: mongoose.Schema.ObjectId, ref: User }
    // }]
  },
  {
    name: 'Asado',
    description: 'Asado (Spanish: [aˈsaðo]) are the techniques and the social event of having or attending a barbecue in various South American countries, where it is also a traditional event. An asado usually consists of beef, pork, chicken, chorizo, and morcilla which are cooked on a grill, called a parrilla, or an open fire. Generally the meats are accompanied by red wine and salads. This meat is prepared by a person who is the assigned asador or parrillero.',
    image: 'https://www.196flavors.com/wp-content/uploads/2018/05/asado-paraguayo-3-FP.jpg',
    country: countryIds[1]

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
    console.log(`Created ${foods.length}foods`);
    // User.create(userData)
    //   .then(users => {
    //     mongoose.connection.close();
  });

Country.create(countryData)
  .then(countries => {
    mongoose.connection.close();
    console.log(`Created ${countries.length}countries`);
  });
