const express = require('express');
const Employee = require('../schema/Employee');
const router = express.Router();

// Créer un employé
router.post('/', async (req, res) => {
  try {
    const employee = new Employee(req.body);
    await employee.save();
    res.status(201).json(employee);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Obtenir tous les employés
router.get('/', async (req, res) => {
  try {
    const employees = await Employee.find().populate('userId evaluations');
    res.status(200).json(employees);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Obtenir un employé par ID
router.get('/:id', async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id).populate('userId evaluations');
    if (!employee) return res.status(404).json({ error: 'Employé non trouvé' });
    res.status(200).json(employee);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Ajouter une évaluation à un employé
router.post('/:id/evaluations', async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);
    if (!employee) return res.status(404).json({ error: 'Employé non trouvé' });

    employee.evaluations.push(req.body.evaluationId);
    await employee.save();
    res.status(200).json(employee);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
