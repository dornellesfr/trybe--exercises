const express = require('express');

const app = express();

app.use(express.json());

const activities = [
  {
    id: 1,
    description: 'Banho no cachorro',
    status: 'A fazer',
  },
  {
    id: 2,
    description: 'Cortar a grama',
    status: 'A fazer',
  },
  {
    id: 3,
    description: 'Estudar javascript',
    status: 'Feito',
  },
];

// Rotas

app.get('/activities', (req, res) => {
  res.status(200).json(activities);
});

app.get('/activities/:id', (req, res) => {
  const idParam = req.params.id;
  const activity = activities.find(({ id }) => id === Number(idParam));
  res.status(200).json(activity);
});

app.post('/activities', (req, res) => {
  const activity = req.body;
  activities.push(activity);
  res.status(200).json(activities);
});

app.put('/activities/:id', (req, res) => {
  const idParam = req.params.id;
  const { description, status } = req.body;
  const alteredActivity = {};

  activities.forEach((activity) => {
    if (activity.id === Number(idParam)) {
      alteredActivity.id = activity.id;
      alteredActivity.description = description;
      alteredActivity.status = status;
    }
  });
  res.status(200).json(alteredActivity);
});

module.exports = app;
