const mongoose = require('mongoose');
const environment = require('../config/environment');
const Country = require('../models/country');
const User = require('../models/user');

const Food = require('../models/food');
// const User = require('../models/user');

mongoose.connect(environment.dbUri);

const countryIds = [
  '5be9860fcb16d525543ceda6',
  '5be9860fcb16d525543ceda7',
  '5be9860fcb16d525543ceda5'
];
const userIds = [
  '5be9860fcb16d525543ceda9',
  '5be9860fcb16d525543ceda8',
  '5be9860fcb16d525543ceda4',
  '5be9860fcb16d525543ceda3',
  '5be9860fcb16d525543ceda2',
  '5be9860fcb16d525543ceda1'
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
}, {
  _id: userIds[2],
  username: 'Alex',
  email: 'alex@alex',
  password: 'pass'
}, {
  _id: userIds[3],
  username: 'Josh',
  email: 'josh@josh',
  password: 'pass'
}, {
  _id: userIds[4],
  username: 'LittleJoe',
  email: 'joe@joe',
  password: 'pass'
}, {
  _id: userIds[5],
  username: 'Lucy',
  email: 'lucy@lucy',
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
  }, {
    _id: countryIds[2],
    name: 'United Kingdom',
    region: 'Europe',
    flagUrl: 'https://restcountries.eu/data/gbr.svg',
    Alpha3Code: 'GBR'
  }

];

const foodData = [
  {
    name: 'Bubble Tea',
    description: 'Bubble tea (also known as pearl milk tea, bubble milk tea, booby tea, bubble cup, or simply boba) (Chinese: 波霸奶茶; pinyin: bōbà nǎichá, with tapioca balls it is 珍珠奶茶; zhēnzhū nǎichá) is a Taiwanese tea-based drink invented',
    image: 'https://auchanetmoi.auchan.fr/api/v1/media_files/2885/media/798x449c',
    country: countryIds[0],
    votes: [userIds[0], userIds[2]],
    comments: [{
      text: 'tasty!!!!',
      commentAuthor: userIds[0]
    }, {
      text: 'awful!!!!',
      commentAuthor: userIds[1]
    }, {
      text: 'Too spicy for me! 🤯',
      commentAuthor: userIds[4]
    }, {
      text: 'I dont like the "bubbles" very much, tea is good though!',
      commentAuthor: userIds[2]
    }, {
      text: 'This is super good!',
      commentAuthor: userIds[3]
    }
    ]
  },{
    name: 'Ta-a noodles',
    description: 'Ta-a noodles or danzi noodles is a type of snack found in Tainan, Taiwan. Also known as "Slack Season Ta-a Noodles", they originated in Tainan, about 130 years ago',
    image: 'http://images.honestcooking.com/wp-content/uploads/2016/08/Tainan-Style-Noodles-Wide.jpg',
    country: countryIds[0],
    votes: [userIds[0],userIds[1],userIds[2],userIds[3]],
    comments: [{
      text: 'This is a must have when in Taiwan',
      commentAuthor: userIds[0]
    }, {
      text: 'Best place for this is Tainan',
      commentAuthor: userIds[1]
    }]
  },{
    name: 'Scallion Pancakes',
    description: 'Scallion pancakes are a flatbread mixed with generous amounts of oil and minced green onions. Reminiscent of a fried crispy croissant, the perfect scallion pancake is light and airy, with a crispy bite, ending with a rich and layered green onion-infused saltiness.',
    image: 'https://d36tnp772eyphs.cloudfront.net/blogs/1/2017/08/5700958085_b3d86bd5a1_b.jpg',
    country: countryIds[0],
    votes: [userIds[0],userIds[1],userIds[2]],
    comments: [{
      text: 'These are delicious!',
      commentAuthor: userIds[0]
    }, {
      text: 'Om nom nom nom, this is devine',
      commentAuthor: userIds[5]
    }]
  },{
    name: 'Stuffed Chicken Wings',
    description: 'As dim sum culture spread all throughout China – and with the added influence of the unrestrained Hong Kong style of cooking – dim sum chefs became ever more innovative. Stuffed chicken wings were thusly inspired by sticky rice chicken wings from Southeast Asia. With various stuffing ingredients added to the dish, a new type of dim sum was created.',
    image: 'https://d36tnp772eyphs.cloudfront.net/blogs/1/2017/08/1092599425_0cbf33a76d_b.jpg',
    country: countryIds[0],
    votes: [userIds[0],userIds[1]],
    comments: [{
      text: 'Not too sure about these',
      commentAuthor: userIds[0]
    }, {
      text: 'I did not like',
      commentAuthor: userIds[3]
    }]
  },{
    name: 'Youtiao',
    description: 'Youtiao translates into oil stick in Mandarin and it’s also known as the Chinese Donut or Cruller. Typically the length of your arm, it’s a fried piece of twisted dough often accompanied by sweet or savory soy milk, rice porridge or sandwiched between a Chinese roasted flatbread. Fuhang Soy Milk in Taipei serves the ultimate youtiao.',
    image: 'https://redhousespice.com/wp-content/uploads/2018/01/Chinese-doughnut-stick-Youtiao-landscape-1.jpg',
    country: countryIds[0],
    votes: [userIds[0],userIds[1], userIds[4]],
    comments: [{
      text: 'Not too sure these are strictly Taiwanese, but they are sooo tasty',
      commentAuthor: userIds[0]
    }, {
      text: 'My favorite Asian breakfast food',
      commentAuthor: userIds[3]
    }]
  },{
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
    }, {
      text: 'Is there a vegan equivilent to this?',
      commentAuthor: userIds[5]
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
