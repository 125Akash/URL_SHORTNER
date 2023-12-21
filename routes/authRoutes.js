const express = require('express');
const router = express.Router();
const authController = require('../Controllers/authControllers');
router.get('/', authController.loginPage);
router.get('/signup', authController.signupPage);
router.post('/', authController.login);
router.post('/signup', authController.signup);
router.post('/logout', authController.logout);

module.exports = router;