import express from 'express';
import ads from './api/ads.json';

const app = express();

app.get('/api/ads', (req, res) => {
  setTimeout(() => {
    res.send(ads);
  }, 600);
});


app.listen(4444, () => {
  console.log('API server is running at http://localhost:4444/api');
});

