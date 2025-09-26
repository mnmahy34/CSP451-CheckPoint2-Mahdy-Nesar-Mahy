// Simple REST API structure using Express (simulation)
const express = require('express');
const app = express();

app.get('/users', (req, res) => {
  res.send("List of users");
});

app.post('/users', (req, res) => {
  res.send("User created");
});
app.get('/products', (req, res) => {
  res.send("List of products");
});
app.listen(3000, () => {
  console.log("API server running on port 3000");
});