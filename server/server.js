const express = require('express');
const app = express();
const session = require('express-session');
const cors = require('cors');
const PORT = process.env.EXPRESS_CONTAINER_PORT || 8080;
const Redis = require('connect-redis')(session);
const routes = require('./routes/api/index');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const UserModels = require('./models/UserModels');
const bcrypt = require('bcrypt');
const bp = require('body-parser');

app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

app.use(cors());
app.use(
  session({
    store: new Redis({
      url: 'redis://redis-session-store:6379',
      logErrors: true
    }),
    secret: 'felixTheBat',
    resave: false,
    saveUninitialized: true
  })
);

// app.use(passport.initialize());
// app.use(passport.session());

// passport.serializeUser( (users, done) => {
//   console.log('\n00 - Serializing users\n', users)
//   done(null, {
//     full_name: users.full_name,
//     email: users.email,
//     zomg: 'randomData'
//   })
// })

// passport.deserializeUser( (users, done) => {
//   console.log('\n01 - Deserializing User\n', users)
//   UserModels
//     .where({email: users.email})
//     .fetch()
//     .then( users => {
//       users = users.toJSON();
//       done(null, users)
//     })
//     .catch( err => {
//       console.log('err', err)
//     })
// })

// passport.use(
//   new LocalStrategy(function(email, password, done) {
//     UserModels
//     .where({ email: email }, function(err, users) {
//       if (err) {
//         console.log('!!!!!!!!!!!!', err);
//         return done(err);
//       }
//       if (!users) {
//         return done(null, false, { message: 'Incorrect email.' });
//       }
//       if (!users.validPassword(password)) {
//         return done(null, false, { message: 'Incorrect password.' });
//       }
//       return done(null, users);
//     });
//   })
// );

// app.post(
//   '/login',
//   passport.authenticate('local', {
//     successRedirect: '/',
//     failureRedirect: '/login',
//     failureFlash: true
//   })
// );

// app.post('/login', (req, res, next) => {
//   // If user is logged in, then instruct the user to log out first:
//   if (req.users) {
//     res.status(400).json({ message: `${req.users.email} is already logged in` });
//   } else {
//     passport.authenticate('local', (err, users) => {
//       if (err) {
//         return res.status(400).json({ message: err.message });
//       } else {
//         req.login(users, err => {
//           if (err) {
//             return next(err);
//           } else {
//             res.json({
//               email: users.email,
//               id: req.users.id
//             });
//           }
//         });
//       }
//     })(req, res, next);
//   }
// });

// app.get('/logout', (req, res) => {
//   req.logout();
//   res.json({ success: true });
// });

app.use('/api', routes);

app.get('/', (req, res) => {
  console.log('Sanity Check');
  res.send(`
        <h1>Ohana Daily - API GET Routes</h1>
        <br><br>
        <table style="width: 100%;" border="1" cellpadding="2">
          <tbody>
            <tr align="center">
              <td><strong>USERS</strong></td>
              <td><strong>CONTENT</strong></td>
              <td><strong>TRANSACTIONS</strong></td>
              <td><strong>PREFERRED</strong></td>
            </tr>
            <tr>
              <td><a href="/api/users">/api/users</a></td>
              <td><a href="/api/content">/api/content</a></td>
              <td><a href="/api/transactions">/api/transactions</a></td>
              <td><a href="/api/preferred">/api/preferred</a></td>
            </tr>
            <tr>
            <td><a href="/api/users/1">/api/users/1</a></td>
            <td><a href="/api/content/1">/api/content/1</a></td>
            <td><a href="/api/transactions/1">/api/transactions/1</a></td>
            <td><a href="/api/preferred/1">/api/preferred/1</a></td>
            </tr>
          </tbody>
          </table>
    `);
});

app.listen(PORT, () => {
  console.log(`Server Listening on ${PORT}...`);
});
