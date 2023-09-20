const express = require('express');
const router = express.Router();
const naver = require('../src/app/Naver/naverController.js');

// Define your routes using the router object
router.get('/reviewGather', naver.getAllReviews);

module.exports = router;
