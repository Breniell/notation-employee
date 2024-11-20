const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/ton_nom_de_bd', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('MongoDB connecté...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
