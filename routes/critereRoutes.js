const express = require('express');
const Critere = require('../schema/Critere');
const router = express.Router();

// Créer un critère
router.post('/', async (req, res) => {
  try {
    const critere = new Critere(req.body);
    await critere.save();
    res.status(201).json(critere);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Obtenir tous les critères
router.get('/', async (req, res) => {
  try {
    const criteres = await Critere.find();
    res.status(200).json(criteres);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
