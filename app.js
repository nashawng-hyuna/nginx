const express = require('express');
const app = express();

const routes = require('./routes/routes');

const port = process.env.PORT || 5000;

app.use('/api', routes);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
