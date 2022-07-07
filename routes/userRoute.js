const express = require('express');
const authController = require('../controllers/authController');

const router = express.Router();

//localhost:3000/users/signup
router.route('/signup').post(authController.createUser);
router.route('/login').post(authController.loginUser);

module.exports = router;
