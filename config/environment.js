const port = process.env.PORT || 4000;
const dbUri = process.env.MONGODB_URI || 'mongodb://localhost/country';
const secret = process.env.SECRET || 'doris';

module.exports = {
  dbUri: dbUri,
  port: port,
  secret: secret
};
