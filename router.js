const express = require('express');
const gptHandler = require('./gptHandler');

const router = express.Router();

router.get('/gpt', gptHandler);

module.exports = router;
