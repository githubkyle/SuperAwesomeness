const express = require('express');
const router = express.Router();
const noteRoutes = require('./note');

router.use('/note', require('./note'));
router.use('/', noteRoutes)

module.exports = router;
