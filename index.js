const express = require('express');
const app = express();
// use mongoose
const env = require('./config/environment');
const mongoose = require('mongoose');
mongoose.connect(env.dbUri);
const router = require('./config/router');


app.use(express.static(`${__dirname}/public`));
app.use('/api', router);

app.get('/*', (req, res) => res.sendFile(`${__dirname}/public/index.html`));


app.listen(env.port, () => console.log(`Express is running on port ${env.port}`));





module.exports = app;
