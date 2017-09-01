const Hero = require('./hero-model');
const ReadPreference = require('mongodb').ReadPreference;

require('./mongo').connect();

function get(req, res) {
  const docquery = Hero.find({}).read(ReadPreference.NEAREST);
  docquery
    .exec()
    .then(heroes => {
      res.json(heroes);
    })
    .catch(err => {
      res.status(500).send(err);
    });
}

function create(req, res) {
  const { id, name, saying } = req.body;

  const hero = new Hero({ id, name, saying });
  hero
    .save()
    .then(() => {
      res.json(hero);
    })
    .catch(err => {
      res.status(500).send(err);
    });
}

function update(req, res) {
  const { id, name, saying } = req.body;

  Hero.findOne({ id })
    .then(hero => {
      hero.name = name;
      hero.saying = saying;
      hero.save().then(res.json(hero));
    })
    .catch(err => {
      res.status(500).send(err);
    });
}

function destroy(req, res) {
  const { id } = req.params;

  Hero.findOneAndRemove({ id })
    .then(hero => {
      res.json(hero);
    })
    .catch(err => {
      res.status(500).send(err);
    });
}

module.exports = { get, create, update, destroy };
