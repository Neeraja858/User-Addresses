const { User, Address } = require('./models');  // Import models

// POST /register route to create a user and address
app.post('/register', async (req, res) => {
  const { name, address } = req.body;

  try {
    // Create a new user
    const newUser = await User.create({ name });

    // Create a new address associated with the user
    await Address.create({ address, userId: newUser.id });

    res.status(201).send('User and address created successfully!');
  } catch (error) {
    res.status(400).send(`Error: ${error.message}`);
  }
});
