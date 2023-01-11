const express = require('express');
const app = express();
const fs = require('fs');

app.use(express.json());
const file = fs.readFile(__dirname + '/src/utils/tourism.json', (_err, data) => {
  data = JSON.parse(data);
});

app.post('/activities', async (req, res) => {
});

module.exports = app;