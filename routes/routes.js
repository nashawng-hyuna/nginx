const express = require('express');
const router = express.Router();

const name = process.env.NAME || 'World';

router.get('/greet', (req, res) => {
  return res.send(`Running from inside the router. Hello ${name}`);
});

module.exports = router;
