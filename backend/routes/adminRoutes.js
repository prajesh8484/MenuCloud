const express = require('express');
const { authAdmin, registerAdmin } = require('../controllers/adminController');

const router = express.Router();

router.post('/login', authAdmin);
router.post('/register', registerAdmin);

module.exports = router;