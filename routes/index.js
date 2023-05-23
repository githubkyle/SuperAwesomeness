const express = require("express");
const router = express.Router();
const noteRoutes = require("./note");
const userRoutes = require("./user");
const homeRoutes = require("./dataRoutes");
// Import routes
const authRoutes = require("./authRoutes");

router.use("/note", noteRoutes);
router.use("/", homeRoutes);
router.use("/user", userRoutes);
// Middleware for authentication routes
router.use("/auth", authRoutes);

module.exports = router;
