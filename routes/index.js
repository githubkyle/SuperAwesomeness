const express = require("express");
const router = express.Router();
const noteRoutes = require("./note");
const userRoutes = require("./user");
// Import routes
const authRoutes = require("./authRoutes");
const homeRoutes = require("./homeroutes");

// Middleware for note routes
router.use("/note", noteRoutes);
router.use("/user", userRoutes);
// Middleware for authentication routes
router.use("/auth", authRoutes);

// Middleware for homepage route
router.use("/", homeRoutes);
module.exports = router;
