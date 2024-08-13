//   # Authentication routes (signup, login, profile)

const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const { signup, login, getProfile, verifyEmail } = require('../controllers/authController');

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.get('/profile', authMiddleware, getProfile);
router.get('/verify/:id', verifyEmail);

module.exports = router;
