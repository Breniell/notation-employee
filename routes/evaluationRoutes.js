const express = require('express');
const Evaluation = require('../schema/Evaluation');
const router = express.Router();

// Créer une évaluation
router.post('/', async (req, res) => {
  try {
    const evaluation = new Evaluation(req.body);
    await evaluation.save();
    res.status(201).json(evaluation);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Obtenir toutes les évaluations
router.get('/', async (req, res) => {
  try {
    const evaluations = await Evaluation.find().populate('criteres');
    res.status(200).json(evaluations);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
