const express = require('express');
const connectDB = require('./db');
const app = express();

// Import des routes
const userRoutes = require('./routes/userRoutes');
const employeeRoutes = require('./routes/employeeRoutes');
const evaluationRoutes = require('./routes/evaluationRoutes');
const critereRoutes = require('./routes/critereRoutes');

connectDB();

app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/employees', employeeRoutes);
app.use('/api/evaluations', evaluationRoutes);
app.use('/api/criteres', critereRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Serveur démarré sur le port ${PORT}`));
