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
  '5be9860fcb16d525543ceda5',
  '5be9860fcb16d525543cfda8',
  '5be9860fcb16d525543cdda1',
  '5be9860fcb16d525543cddd2',
  '5be9860fcb16d525543cdcd5',
  '5be9860fcb16d525543cdcc1'
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
    alpha3Code: 'TWN',
    comments: [{
      text: 'Is it a country???🧐',
      commentAuthor: userIds[0]
    }, {
      text: 'I can\'t find on the map. Where is it?',
      commentAuthor: userIds[1]
    }]
  },
  {
    _id: countryIds[1],
    name: 'Argentina',
    region: 'Americas',
    flagUrl: 'https://restcountries.eu/data/arg.svg',
    alpha3Code: 'ARG',
    comments: [{
      text: 'I think Lucia is form this country',
      commentAuthor: userIds[2]
    }, {
      text: 'Huh.....who is Lucia?',
      commentAuthor: userIds[5]
    }]

  }, {
    _id: countryIds[2],
    name: 'United Kingdom',
    region: 'Europe',
    flagUrl: 'https://restcountries.eu/data/gbr.svg',
    alpha3Code: 'GBR',
    comments: [{
      text: 'Is it still in EU?',
      commentAuthor: userIds[2]
    }, {
      text: 'Fish and chips country',
      commentAuthor: userIds[1]
    }]
  },
  {
    _id: countryIds[3],
    name: 'Spain',
    region: 'Europe',
    flagUrl: 'https://restcountries.eu/data/esp.svg',
    alpha3Code: 'ESP',
    comments: [{
      text: 'Rafa, are you there?',
      commentAuthor: userIds[5]
    }]
  },
  {
    _id: countryIds[4],
    name: 'Korea (Republic of)',
    region: 'Asia',
    flagUrl: 'https://restcountries.eu/data/kor.svg',
    alpha3Code: 'KOR',
    comments: [{
      text: 'Jumee, check your slack!',
      commentAuthor: userIds[5]
    }]
  },
  {
    _id: countryIds[5],
    name: 'Colombia',
    region: 'Americas',
    flagUrl: 'https://restcountries.eu/data/col.svg',
    alpha3Code: 'COL',
    comments: [{
      text: 'Narcos or narchos?',
      commentAuthor: userIds[1]
    }]

  },
  {
    _id: countryIds[6],
    name: 'Nigeria',
    region: 'Africa',
    flagUrl: 'https://restcountries.eu/data/ner.svg',
    alpha3Code: 'NGA',
    comments: [{
      text: 'Kedu!Femi',
      commentAuthor: userIds[1]
    }]
  },
  {
    _id: countryIds[7],
    name: 'Germany',
    region: 'Europe',
    flagUrl: 'https://restcountries.eu/data/geo.svg',
    alpha3Code: 'DEU',
    comments: [{
      text: 'Guten Tag, Anäis',
      commentAuthor: userIds[5]
    }]
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
  },{
    name: 'Paella',
    description: 'Paella (Valencian pronunciation: [paˈeʎa]; Spanish: [paˈeʎa]) is a Valencian rice dish that has ancient roots but its modern form originated in the mid-19th century in the area around Albufera lagoon on the east coast of Spain adjacent to the city of Valencia. Many non-Spaniards view paella as Spain\'s national dish, but most Spaniards consider it to be a regional Valencian dish. Valencians, in turn, regard paella as one of their identifying symbols. Types of paella include Valencian paella, vegetable paella (Spanish: paella de verduras), seafood paella (Spanish: paella de mariscos), and mixed paella (Spanish: paella mixta), among many others. Valencian paella is believed to be the original recipe and consists of white rice (which must be round grain), green beans (bajoqueta and tavella), meat (chicken and rabbit, sometimes duck), garrofó (a variety of lima beans or butter beans), sometimes snails, and seasoning such as saffron and rosemary. Another very common but seasonal ingredient is artichokes. Seafood paella replaces meat with seafood and omits beans and green vegetables. Mixed paella is a free-style combination of meat from land animals, seafood, vegetables, and sometimes beans. Most paella chefs use bomba rice due to it being less likely to overcook, but Valencians tend to use a slightly stickier (and thus more susceptible to overcooking) variety known as Senia. All types of paellas use olive oil.',
    image: 'https://i-h2.pinimg.com/564x/b3/a5/13/b3a51354c6d5d08d24b89e7d4e9762da.jpg',
    country: countryIds[3],
    votes: []
  },{
    name: 'Tortilla de patatas',
    description: ' Spanish omelette is the English name for a traditional dish from Spanish cuisine called tortilla española, tortilla de patatas or tortilla de papas. It is an omelette made with eggs and potatoes, sometimes also with onion and/or chives or garlic; fried in oil and often served cold as an appetizer. It is part of the cuisine of Spain.',
    image: 'https://i-h2.pinimg.com/564x/06/69/ff/0669ffd229fb256ea21e5d7299f242bb.jpg',
    country: countryIds[3],
    comments: [{
      text: 'Not too sure about these',
      commentAuthor: userIds[0]
    }, {
      text: 'I did not like',
      commentAuthor: userIds[3]
    }]
  },{
    name: 'Croquetas',
    description: 'Croquette(/kroʊˈket/) is a small breadcrumbed fried food roll containing, usually as main ingredients, ground meat (veal, beef, chicken, or turkey), shellfish, fish, ham, cheese, mashed potatoes or vegetables, and mixed with béchamel or brown sauce, and soaked white bread, egg, onion, spices and herbs, wine, milk, beer, or some combination, sometimes with a filling, e.g. sautéed onions, mushrooms, or boiled eggs. The croquette is usually shaped into a cylinder, disk, or oval shape, and then deep-fried. The croquette (from the French croquer, "to crunch") gained worldwide popularity, both as a delicacy and as a fast food. Mashed potato-filled croquettes are often served as a side dish in winter holiday meals, such as Christmas. In fast food cuisine, varieties exist without potatoes, but with cheese, beef, or goulash, often in a filling based on béchamel sauce',
    image: 'https://i-h2.pinimg.com/564x/8f/75/4b/8f754b510ead1501e0e09a9aa9a22a70.jpg',
    country: countryIds[3]
  },{
    name: 'Pa-Jeon',
    description: 'Korean pancake.Pajeon (파전, Korean pronunciation: [pʰa.dʑʌn]) is a variety of jeon with scallion as its prominent ingredient, as pa (파) means scallion. It is a Korean dish made from a batter of eggs, wheat flour, rice flour, scallions, and often other ingredients depending on the variety. Beef, pork, kimchi, shellfish, and other seafood are mostly used. If one of these ingredients, such as squid, dominates the jeon, the name will reflect that; ojing\'eo jeon (오징어전) is \'squid jeon.',
    image: 'https://cdn.shopify.com/s/files/1/0201/3832/articles/korean_1200x.jpg?v=150635874',
    country: countryIds[4],
    comments: [{
      text: 'These are delicious!',
      commentAuthor: userIds[0]
    }, {
      text: 'Om nom nom nom, this is devine',
      commentAuthor: userIds[5]
    }]
  },{
    name: 'Kimchi Jji-gae',
    description: 'Fermented Cabbage Pickle Stew with Pork.',
    image: 'https://www.koreanbapsang.com/wp-content/uploads/2014/03/DSC_5089.jpg',
    country: countryIds[4],
    comments: [{
      text: 'Not too sure about these',
      commentAuthor: userIds[0]
    }, {
      text: 'I did not like',
      commentAuthor: userIds[3]
    }]
  },
  {
    name: 'Korean BBQ',
    description: 'Charcoal grill barbecue wrap with sliced garlic and Ssam-jang sauce and wrap with lettuce leaves..',
    image: 'https://cdn.vox-cdn.com/thumbor/X_G39Z0yj-O31EIBuC_7NCpJBQc=/0x0:1054x1064/1200x800/filters:focal(443x448:611x616)/cdn.vox-cdn.com/uploads/chorus_image/image/57791279/Screen_Shot_2016-02-23_at_10.04.03_AM.0.0.png',
    country: countryIds[4]
  },
  {
    name: 'Arepa',
    description: 'Arepa (Spanish pronunciation: [aˈɾepa]) is a type of food made of ground maize dough or cooked flour prominent in the cuisine of Colombia and Venezuela. It is eaten daily in those countries and can be served with accompaniments such as cheese, cuajada (fermented milk) or avocado, or split to make sandwiches. Sizes, maize types, and added ingredients vary its preparation. Arepas can also be found in the Canary Islands. It is similar in shape to the Mexican gordita and the Salvadoran pupusa.',
    image: 'https://www.seriouseats.com/recipes/images/2012/04/20111214-bean-soup-arepas-pork-stew-primary.jpeg',
    country: countryIds[5],
    comments: [{
      text: 'Not too sure about these',
      commentAuthor: userIds[0]
    }, {
      text: 'I did not like',
      commentAuthor: userIds[3]
    }]
  },{
    name: 'Minced Pork Rice',
    description: 'Minced pork rice (Chinese: 滷肉飯; pinyin: lǔròufàn; Pe̍h-ōe-jī: ló͘-bah-pn̄g) is a Chinese rice dish that is commonly seen throughout Taiwan and Southern Fujian[1]. The flavor may vary from one region to another, but the basic ingredients remain the same: ground pork marinated and boiled in soy sauce served on top of steamed rice.',
    image: 'https://www.tony60533.com/wp-content/uploads/pixnet/1445179278-140725104.jpg?v=1445179283',
    country: countryIds[0]
  },{
    name: 'Empanada',
    description: 'Empanada (Spanish pronunciation: [empaˈnaða]) is a type of pastry baked or fried in many countries of the Americas and in Spain. The name comes from the Spanish verb empanar, and literally translates as "enbreaded", that is, wrapped or coated in bread. Empanadas are made by folding dough over a stuffing, which may consist of meat, cheese, corn, or other ingredients',
    image: 'https://images.ricardocuisine.com/services/recipes/1074x1074_7700-1508419631.jpg',
    country: countryIds[5]
  },{
    name: 'Moin Moin',
    description: 'Moimoi or Moin-Moin is a Nigerian steamed bean pudding made from a mixture of washed and peeled black-eyed peas, onions and fresh ground peppers (usually a combination of bell peppers and chili or Scotch bonnet). It is a protein-rich food that is a staple in Nigeria. Some adaptations also put apples in Moin-Moin.',
    image: 'https://i-h2.pinimg.com/564x/6a/a9/6a/6aa96aea0a2fa6aa411c890d7e476eae.jpg',
    country: countryIds[6],
    comments: [{
      text: 'Not too sure about these',
      commentAuthor: userIds[2]
    }, {
      text: '??????',
      commentAuthor: userIds[1]
    }]
  },{
    name: 'Jollof Rice',
    description: 'Jollof rice /ˈdʒɒləf/ or just jollof, also called Benachin (Wolof: "one pot"), is a one-pot rice dish popular in many West African countries',
    image: 'https://i-h2.pinimg.com/564x/0b/a8/e3/0ba8e30a694687d416bc4e50b4335de2.jpg',
    country: countryIds[6],
    comments: [{
      text: 'nice nice nice nice nice nice!!!',
      commentAuthor: userIds[1]
    }]
  }


];


Country.collection.drop();
Food.collection.drop();
User.collection.drop();



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
