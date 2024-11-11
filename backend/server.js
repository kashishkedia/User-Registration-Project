const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

let users = [];

// Create - Add a new user
app.post('/users', (req, res) => {
    const user = req.body;
    users.push(user);
    res.status(201).send(user);
});

// Read - Get all users
app.get('/users', (req, res) => {
    res.send(users);
});

// Update - Modify an existing user
app.put('/users/:index', (req, res) => {
    const index = req.params.index;
    users[index] = req.body;
    res.send(users[index]);
});

// Delete - Remove a user
app.delete('/users/:index', (req, res) => {
    const index = req.params.index;
    users.splice(index, 1);
    res.status(204).send();
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
