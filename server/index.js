const express = require('express');
const dotenv = require('dotenv');
const path = require('path');

const port = process.env.PORT || 7000;
const app = express();
dotenv.config();

app.use(express.static(path.resolve(__dirname, '../dist')));
app.use('/', express.static(path.join(__dirname, '../assets/images')));

app.listen(port, () => {
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../dist/index.html'));
  });
});
