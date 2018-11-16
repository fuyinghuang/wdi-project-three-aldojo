const express = require('express');
const app = express();
const mongoose = require('mongoose');
// mongoose.connect(env.dbUri);
mongoose.connect({ port } .dbUri);
const router = require('./config/router');

const { port } = require('./config/environment');

app.use(express.static(`${__dirname}/public`));
app.use('/api', router);

app.get('/*', (req, res) => res.sendFile(`${__dirname}/public/index.html`));

app.listen(port, () => console.log(`Express is running on port ${port}`));





module.exports = app;
