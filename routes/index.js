const express = require('express');
const router = express.Router();
const noteRoutes = require('./note');
// Import routes
const authRoutes = require('./authRoutes');

// Middleware for note routes
router.use('/note', noteRoutes);

// Middleware for authentication routes
router.use('/auth', authRoutes);

module.exports = router;
