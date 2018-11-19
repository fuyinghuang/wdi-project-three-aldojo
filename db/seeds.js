const mongoose = require('mongoose');
const environment = require('../config/environment');
const Country = require('../models/country');
const Food = require('../models/food');
const User = require('../models/user');
mongoose.connect(environment.dbUri);

// This removes all previous data in the collection under the name Book.
Country.collection.drop();
