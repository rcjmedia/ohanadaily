const express = require('express');
const passport = require('passport');
const bcrypt = require('bcrypt');
const router = express.Router();
const bp = require('body-parser');
const UserModels = require('../../../models/UserModels');

const saltedRounds = 12;

router.use(bp.json());
router.use(bp.urlencoded({ extended: true }));

router.use(passport.initialize());

router.post('/register', (req, res) => {
  const { first_name, last_name, email, password } = req.body;

  bcrypt
    .genSalt(saltedRounds)
    .then(salt => {
      return bcrypt.hash(password, salt);
    })
    .then(hash => {
      console.log('hash', hash);
      return new UserModels({
        first_name: first_name,
        last_name: last_name,
        email: email,
        password: hash
      }).save();
    })
    .then(response => {
      return response.refresh();
    })
    .then(newData => {
      return res.json(newData);
    })
    .catch(err => {
      console.log('err', err);
      return res.status(400).json({ error: err.message });
    });
});

router.post('/login', (req, res, next) => {
  if (req.users) {
    res.status(400).json({ message: `${req.users.email}` });
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
              id: users.id
            });
          }
        });
      }
    })(req, res, next);
  }
});

router.get('/login', (req, res) => {
  res.send(`Failed to login. Please log back in.`);
});

router.get('/home', (req, res) => {
  res.send(`Home success!`);
});

router.get('/logout', (req, res) => {
  req.logout();
  res.json({ success: true });
});

module.exports = router;
