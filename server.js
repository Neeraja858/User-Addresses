const { User, Address } = require('./models');
const express = require('express');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');

// Initialize app
const app = express();
const sequelize = new Sequelize('database_name', 'root', 'password', {
    host: 'localhost',
    dialect: 'mysql'
  });
  app.post('/register', async (req, res) => {
    try {
      const { name, address } = req.body;

// Middleware
app.use(bodyParser.json());

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
}
const user = await User.create({ name });

    // Create a new address linked to the user
    await Address.create({ address, userId: user.id });

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error registering user' });
  }
});
sequelize.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.log('Error: ' + err));
);
