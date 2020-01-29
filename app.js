const express = require('express');
const app = express();

const routes = require('./routes/routes');

const port = process.env.PORT || 5000;

// app.get('/api', (req, res) => {
//   return res.send('Data Changed now');
// });

app.use('/api', routes);

app.listen(port, () => {
  console.log('running');
  console.log(`Listening on port ${port}`);
});
