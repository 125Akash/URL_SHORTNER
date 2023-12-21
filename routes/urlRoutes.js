const express = require('express');
const router = express.Router();
const urlController = require('../Controllers/urlController');

router.get('/url', urlController.getAllUrls);
router.post('/shortUrls', urlController.createShortUrl);
router.get('/:shortUrl', urlController.redirectShortUrl);

module.exports = router;