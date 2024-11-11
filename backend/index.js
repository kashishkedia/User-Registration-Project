const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.json());

let users = [];

// Get all users
app.get('/users', (req, res) => {
  res.json(users);
});

// Add a new user
app.post('/users', (req, res) => {
  const user = req.body;
  users.push(user);
  res.json({ message: 'User added successfully' });
});

// Update a user
app.put('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const updatedUser = req.body;
  users[id] = updatedUser;
  res.json({ message: 'User updated successfully' });
});

// Delete a user
app.delete('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  users.splice(id, 1);
  res.json({ message: 'User deleted successfully' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
