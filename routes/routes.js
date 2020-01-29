const express = require('express');
const router = express.Router();

const name = process.env.NAME || 'World';

router.get('/get/', (req, res) => {
  return res.json(`Running from inside the router. Hello ${name}`);
});

module.exports = router;
