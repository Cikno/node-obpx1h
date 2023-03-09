import express from 'express';

const app = express();

app.get('/', (req, res) => {
  const neco = { name: 'Patrik' };
  res.json(neco);
});

app.listen(3000, () => {
  console.log('Hello from SPSE!');
});
