const express = require('express');
const fs = require('fs');

const app = express();
app.use(express.json());

const file = JSON.parse(fs.readFileSync('src/movies.json', 'utf-8'));

app.get('/movies', (req, res) => {
  res.status(200).json(file);
});

app.get('/movie/:id', (req, res) => {
  const { id } = req.params;
  const movie = file.find((e) => e.id === Number(id));
  console.log(movie);
  res.status(200).json(movie);
});

app.post('/movies', (req, res) => {
  const newMovie = req.body;
  file.push(newMovie);
  res.status(200).json(file);
});

app.put('/movie/:id', (req, res) => {
  const { id } = req.params;
  const { movie, price } = req.body;

  const m = file.find((e) => e.id === Number(id));
  m.movie = movie;
  m.price = price;
  res.status(200).json(file);
});

app.delete('/movie/:id', (req, res) => {
  const { id } = req.params;

  const position = file.findIndex((e) => e.id === Number(id));
  file.splice(position, 1);

  // const m = file.filter((e) => e.id !== Number(id));
  res.status(200).json(file);
});

module.exports = app;