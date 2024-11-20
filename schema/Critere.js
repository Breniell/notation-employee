const critereSchema = new mongoose.Schema({
    id: { type: String, required: true },
    nom: { type: String, required: true },
    description: { type: String, required: true },
    type_notation: { type: String, enum: ['qualitative', 'quantitative'], required: true }
  });
  
  module.exports = mongoose.model('Critere', critereSchema);
  