// This route is reponsible for registration, login, and logout:
const express = require('express');
const passport = require('passport');
const bcrypt = require('bcrypt');
const router = express.Router();
const bp = require('body-parser');
const UserModels = require('../../../models/UserModels');

router.use(bp.json());
router.use(bp.urlencoded({ extended: true }));



// Register new user:
router.post('/register', (req, res) => {
  // Extract relevant data from incoming request:
  
  const {
    first_name,
    last_name,
    email,
    password,
    birthdate,
    address,
    rank,
    avatar
  } = req.body;

  bcrypt.genSalt(12)
  .then(salt => {
    console.log('salt', salt)
    return bcrypt.hash(password, salt)
  })
    .then(hash => {
        console.log('hash', hash)
        return UserModels
        .forge({
            email: email,
            password: hash,
            first_name: first_name,
            last_name: last_name,
            birthdate: birthdate,
            address: address,
            rank: rank,
            avatar: avatar
        })
        .save()
    })
    .then(response => {
        return response.refresh();
    })
    .then(newData => {
        return res.json(newData);
    })
    .catch(err => {
        console.log('err', err)
        return res.status(400).json({ error: err.message });
    })
});

// Log in with a username (i.e., email address) and password:
router.post('/login', (req, res, next) => {
  // If users is logged in, then instruct the users to log out first:
  if (req.users) {
    res.status(400).json({ message: `${req.users.email} is already logged in` });
  } else {
    passport.authenticate('local', (err, users) => {
      if (err) {
        return res.status(400).json({ message: err.message });
      } else {
        req.login(users, err => {
          if (err) {
            return next(err);
          } else {
            res.json({
              email: users.email,
              id: req.users.id
            });
          }
        });
      }
    })(req, res, next);
  }
});

// Log out users:
router.get('/logout', (req, res) => {
  req.logout();
  res.json({ success: true });
});

module.exports = router;