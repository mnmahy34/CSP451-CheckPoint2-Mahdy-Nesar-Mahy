// Simple REST API structure using Express (simulation)
const express = require('express');
const app = express();

app.get('/users', (req, res) => {
  res.send("List of users");
});

app.post('/users', (req, res) => {
  res.send("User created");
});
