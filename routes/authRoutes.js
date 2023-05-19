const express = require('express');
const passport = require('passport');
const bcrypt = require('bcrypt');
const User = require('../app/models/user');

const router = express.Router();

 // Register route
router.post('/register', (req, res) => {
  const { name, email, password } = req.body;

  // Check if the user already exists
  User.findOne({ where: { email: email } })
    .then((existingUser) => {
      if (existingUser) {
        return res.status(400).json({ message: 'Email is already registered' });
      }

      // Create a new user
      bcrypt.hash(password, 10, (err, hashedPassword) => {
        if (err) {
          return res.status(500).json({ message: 'Error hashing password' });
        }

        User.create({ name, email, password: hashedPassword })
          .then((user) => {
            req.login(user, (err) => {
              if (err) {
                return res.status(500).json({ message: 'Error logging in' });
              }
              res.json({ user });
            });
          })
          .catch((err) => {
            res.status(500).json({ message: 'Error creating user' });
          });
      });
    })
    .catch((err) => {
      res.status(500).json({ message: 'Error finding user' });
    });
});

// Login route
router.post('/login', passport.authenticate('local'), (req, res) => {
  // Authentication successful, handle the response as needed
  res.json({ user: req.user });
});

// Protected route: Logout
router.get('/logout', ensureAuthenticated, (req, res) => {
  req.logout();
  res.json({ message: 'Logout successful' });
});

module.exports = router;
