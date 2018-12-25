const express = require('express');
const router = express.Router();
const UserModels = require('../../../models/UserModels');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const bcrypt = require('bcrypt');
const saltRounds = 12;
const bodyParser = require('body-parser');
const path = require('path');

router.use(express.static(path.join(__dirname, '..', 'public')));
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));
//Authentication:

passport.serializeUser((users, done) => {
  console.log('serializeUser', users);
  done(null, {
    id: users.id,
    email: users.email
  });
});

passport.deserializeUser((user, done) => {
  console.log('deserializing User', user);
  UserModels.where({ email: 'email' })
    .fetch()
    .then(user => {
      //   user = user.toJSON();
      console.log('users in deserialize users', user);
      done(null, user);
    })
    .catch(err => {
      console.log('err???????????', err);
    });
});

passport.use(
  new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
    console.log('\nlocal is being called');
    UserModels.where({ email })
      .fetch()
      .then(users => {
        console.log('\nuser in local strategy', users);
        users = users.toJSON();
        if (users.password === password) {
          done(null, users);
        } else {
          done(null, false);
        }
        console.log('\nauthRoutes.js passport.use login users.ToJSON', users);

        bcrypt
          .compare(password, users.password)
          .then(res => {
            console.log(
              '\nauthRoutes.js passport.use login after bcrypt!!!\n',
              res
            );

            if (res) {
              console.log(
                '\nauthRoutes.js passport.use login after success!!!!\n'
              );
              done(null, res);
            } else {
              console.log(
                '\nauthRoutes.js passport.use login after failure!!!\n'
              );
              done(null, false);
            }
          })
          .catch(err => {
            console.log('1st error:', err);
            done(null, false);
          });
      })
      .catch(err => {
        console.log('2nd error:', err);
        done(null, false);
      });
  })
);

//authenticated register route
// router.post('/register', (req, res) => {
//   console.log("req.body here:", req.body);
//   const { email, password, first_name, last_name, birthdate, address, rank, avatar } = req.body;

//   bcrypt.genSalt(12)
//     .then(salt => {
//       console.log('salt', salt)
//       return bcrypt.hash(password, salt)
//     })
//     .then(hash => {
//       console.log('hash', hash)
//       return UserModels
//         .forge({
//           first_name: first_name,
//           last_name: last_name,
//           email: email,
//           password: hash,
//           birthdate: birthdate,
//           address: address,
//           rank: rank,
//           avatar: avatar
//         })
//         .save()
//     })
//     .then(users => {
//       users = users.toJSON()
//       res.json(users) // Never send the entire users object back to client! It has their password!
//       // res.sendStatus(200)
//       // res.redirect('/api/auth/secret')
//     })
//     .catch(err => {
//       console.log('!!!!!!!!!!!!', err)
//       res.json(err)
//       // res.sendStatus(500)
//     })
// })

// router.post('/register', (req,res) =>{
//     bcrypt.genSalt(saltRounds, function(err,salt){
//         console.log(err)
//       bcrypt.hash(req.body.password, salt, function(err, hash){
//           console.log('HERE IS THE ERROR!!!!!', err)
//           console.log('GIVE ME SOME HASH BROWN!!!!', hash)
//         UserModels
//         .forge({
//           first_name: req.body.first_name,
//           last_name: req.body.last_name,
//           email: req.body.email,
//           password: hash,
//           birthdate: req.body.birthdate,
//           address: req.body.address,
//           rank: req.body.rank,
//           avatar: req.body.avatar
//         })
//         .save()
//         .then(() => {
//             return UserModels
//             .fetch()
//             .then(newUser => {
//               res.json(newUser.serialize());
//             })
//             .catch(err => {
//               console.log('err', err);
//               res.json('err');
//             })
//           })
//         .catch((err) => {
//             console.log(err)
//           return res.json('Username has been taken');
//         });
//       });
//     });
//   });

router.post('/register', (req, res) => {
  const {
    email,
    password,
    first_name,
    last_name,
    birthdate,
    address,
    rank,
    avatar
  } = req.body;
  console.log('req.body here:', req.body);

  bcrypt
    .genSalt(12)
    .then(salt => {
      console.log('salt', salt);
      return bcrypt.hash(password, salt);
    })
    .then(hash => {
      console.log('hash', hash);
      return UserModels.forge({
        email: email,
        password: hash,
        first_name: first_name,
        last_name: last_name,
        birthdate: birthdate,
        address: address,
        rank: rank,
        avatar: avatar
      }).save();
    })
    .then(user => {
      user = user.toJSON();
      res.json(user); // Never send the entire user object back to client! It has their password!
      // res.sendStatus(200)
      // res.redirect('/api/auth/secret')
    })
    .catch(err => {
      console.log('err', err);
      res.json(err);
      // res.sendStatus(500)
    });
});

//PUT - edit users password by users id
router.put('/edit_password/:id', (req, res) => {
  const { id } = req.params;
  const { password } = req.body;
  bcrypt
    .genSalt(12)
    .then(salt => {
      console.log('salt', salt);
      return bcrypt.hash(password, salt);
    })
    .then(hash => {
      console.log('hash', hash);
      const updatedUserPassword = {
        password: hash
      };
      console.log('hash', hash);
      UserModels.where({ id })
        .fetch()
        .then(currentUserPassword => {
          return currentUserPassword.save(updatedUserPassword);
        })
        .then(result => {
          console.log('Updated users', result);
          res.json(result);
        })
        .catch(err => {
          console.log('\nPUT - edit users password error', err);
          res.json('PUT - edit users password error', err);
        });
    });
});

// PUT - forgot password route
router.put('/login/forgotPassword/request', (req, res) => {
  console.log(req.body);
  const tempPassword = generatePassword();

  bcrypt
    .genSalt(12)
    .then(salt => {
      console.log('salt', salt);
      return bcrypt.hash(tempPassword, salt);
    })
    .then(hash => {
      const updatedUserPassword = {
        password: hash
      };
      console.log('updated Password', tempPassword);
      UserModels.where({ email: req.body.email })
        .fetch()
        .then(currentUserPassword => {
          return currentUserPassword.save(updatedUserPassword);
        })
        .then(result => {
          console.log('Updated users', result);
          res.json(result);
        })
        .catch(err => {
          console.log('\nPUT - edit users password error', err);
          res.json('PUT - edit users password error', err);
        });
    });
});

//https://stackoverflow.com/questions/1497481/javascript-password-generator
function generatePassword() {
  var length = 8,
    charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
    retVal = '';
  for (var i = 0, n = charset.length; i < length; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}

// router.post('/login', function (req, res, next) {
//   passport.authenticate('local', function (err, users, info) {
//     if (err) { return next(err); }
//     if (!users) { return res.json(401); }
//     req.logIn(users, function (err) {
//       if (err) { return next(err); }
//       return res.json(200);
//     });
//   })(req, res, next);
// });

router.post(
  '/login',
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/api/login'
    // failureFlash: true
  }),

  function(req, res) {
    res.redirect('/api/users');
    return done(null, users);
  }
);

router.get('/login', (req, res) => {
  res.send('Wrong credentials, please login.');
});

router.get('/logout', (req, res) => {
  console.log('auth logout!!!');
  req.logout();
  console.log('auth logout, after logout!!');
  res.redirect('/');
  console.log('auth logout, after redirect!!');
});

module.exports = router;
