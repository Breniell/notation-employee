const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  id: { type: String, required: true },
  nom: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  role: { type: String, enum: ['admin', 'employee', 'manager'], required: true },
  mot_de_passe: { type: String, required: true }
});

module.exports = mongoose.model('User', userSchema);
