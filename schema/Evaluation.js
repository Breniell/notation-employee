const mongoose = require('mongoose');


const evaluationSchema = new mongoose.Schema({
    date: { type: Date, default: Date.now },
    criteres: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Critere' }],
    score_total: { type: Number, required: true },
    commentaires: { type: [String], default: [] }
  });
  
  module.exports = mongoose.model('Evaluation', evaluationSchema);
  