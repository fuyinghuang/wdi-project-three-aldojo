const mongoose = require('mongoose');
const environment = require('../config/environment');
const Country = require('../models/country');
const User = require('../models/user');

const Food = require('../models/food');
// const User = require('../models/user');

mongoose.connect(environment.dbUri);

const countryIds = [
  '5be9860fcb16d525543ceda6',
  '5be9860fcb16d525543ceda7'
];
const userIds = [
  '5be9860fcb16d525543ceda9',
  '5be9860fcb16d525543ceda8'
];

const userData = [{
  _id: userIds[0],
  username: 'Rob',
  email: 'rob@rob',
  password: 'pass'
}, {
  _id: userIds[1],
  username: 'Doris',
  email: 'doris@doris',
  password: 'pass'
}];

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
    country: countryIds[0],
    votes: [],
    comments: [{
      text: 'tasty!!!!',
      commentAuthor: userIds[0]
    }, {
      text: 'awful!!!!',
      commentAuthor: userIds[1]
    }
    ]
  },
  {
    name: 'Asado',
    description: 'Asado (Spanish: [aˈsaðo]) are the techniques and the social event of having or attending a barbecue in various South American countries, where it is also a traditional event. An asado usually consists of beef, pork, chicken, chorizo, and morcilla which are cooked on a grill, called a parrilla, or an open fire. Generally the meats are accompanied by red wine and salads. This meat is prepared by a person who is the assigned asador or parrillero.',
    image: 'https://www.196flavors.com/wp-content/uploads/2018/05/asado-paraguayo-3-FP.jpg',
    country: countryIds[1],
    votes: [],
    comments: [{
      text: 'I don\'t know this food!!!!',
      commentAuthor: userIds[0]
    }, {
      text: 'yuk!!!!',
      commentAuthor: userIds[1]
    }]
  },
  {
    name: 'Milanesas',
    description: 'Milanesa is a South American variation of an Italian dish where generic types of breaded meat fillet preparations are known as a milanesa. The milanesa was brought to the Southern Cone by Italian immigrants during the mass emigration called the Italian diaspora between 1860-1920s. Its name probably reflects an original Milanese preparation, cotoletta alla Milanese, which is similar to the Austrian Wiener Schnitzel. A milanesa consists of a thin slice of beef, chicken, veal, or sometimes pork, eggplants, tempeh or soy. Each slice is dipped into beaten eggs, seasoned with salt, and other condiments according to the taste of the cook (like parsley and garlic). Each slice is then dipped in bread crumbs (or occasionally flour) and shallow-fried in oil, one at a time.',
    image: 'https://restorando-res.cloudinary.com/image/upload/c_fit,f_auto,h_500,w_700/v1/restaurant_photos/b//13443/127946/restaurante_el-club-de-la-milanesa-barrio-jardin_barrio-jardin_restaurante_el-club-de-la-milanesa-lomas-de-san-isidro_zona-norte_4_guacamole.jpg',
    country: countryIds[1],
    votes: []
  }
];


Country.collection.drop();
Food.collection.drop();
User.collection.drop();
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
    Country.create(countryData)
      .then(countries => {
        console.log(`Created ${countries.length}countries`);
        User.create(userData)
          .then(users => {
            console.log(`Created ${users.length} users`);
            mongoose.connection.close();
          });
      });
  });
