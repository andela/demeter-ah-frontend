import express from 'express';
import dotenv from 'dotenv';
import path from 'path';

const port = process.env.PORT || 7000;
const app = express();
dotenv.config();

app.use(express.static(path.resolve(__dirname, '../dist')));

app.listen(port, () => {
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../dist/index.html'));
  });
});
