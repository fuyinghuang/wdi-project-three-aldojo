/* global api, expect, describe, it, beforeEach */

const Country = require('../../models/country');
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

describe('Countries INDEX', () => {

  beforeEach(done => {
    Country.remove({})
      .then(() => Country.create(countryData))
      .then(() => done());
  });

  it('should return a 200 response', done => {
    api.get('/api/countries')
      .end((err, res) => {
        expect(res.status).to.eq(200);
        done();
      });
  });

  it('should return an array', done => {
    api.get('/api/countries')
      .end((err, res) => {
        // res.body is the result you would see in Insomnia
        expect(res.body).to.be.an('array');
        done();
      });
  });

  it('should return an array of objects', done => {
    api.get('/api/countries')
      .end((err, res) => {
        // use res.body.forEach
        expect(true).to.eq(false);
        done();
      });
  });

  it('should return the correct data', done => {
    api.get('/api/countries')
      .end((err, res) => {
        res.body.forEach((country, index) => {
          expect(country.name).to.eq(countryData[index].name);
          // Complete this
          expect(true).to.eq(false);
        });
        done();
      });
  });

});
