const express = require('express');
const router = express.Router();

// Import routes
const noteRoutes = require('./note');
const authRoutes = require('./authRoutes');

// Middleware for note routes
router.use('/note', noteRoutes);

// Middleware for authentication routes
router.use('/auth', authRoutes);

module.exports = router;
