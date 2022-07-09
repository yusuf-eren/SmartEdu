const express = require('express');
const authController = require('../controllers/authController');
const authMiddleware = require('../midddlewares/authMiddleware');
const router = express.Router();

//localhost:3000/users/
router.route('/signup').post(authController.createUser);
router.route('/login').post(authController.loginUser);
router.route('/logout').get(authController.logoutUser);
router.route('/dashboard').get(authMiddleware, authController.getDashboard);

module.exports = router;
