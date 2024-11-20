const employeeSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    evaluations: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Evaluation' }],
    managerID: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
  });
  
  module.exports = mongoose.model('Employee', employeeSchema);
  