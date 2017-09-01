const express = require('express');
const router = express.Router();

const heroesService = require('../hero-service');

router.get('/heroes', (req, res) => {
  heroesService.get(req, res);
});

router.put('/hero', (req, res) => {
  heroesService.create(req, res);
});

router.post('/hero', (req, res) => {
  heroesService.update(req, res);
});

router.delete('/hero/:id', (req, res) => {
  heroesService.destroy(req, res);
});

module.exports = router;
