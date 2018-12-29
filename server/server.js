const express = require('express');
const app = express();
const session = require('express-session');
const cors = require('cors');
const PORT = process.env.EXPRESS_CONTAINER_PORT || 8080;
const Redis = require('connect-redis')(session);
const routes = require('./routes/api/index');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const bp = require('body-parser');
const UserModels = require('./models/UserModels');

app.use(passport.initialize());
app.use(passport.session());
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

app.use(cors());
app.use(
  session({
    store: new Redis({
      url: 'redis://redis-session-store:6379',
      logErrors: true
    }),
    secret: 'pusheenCat',
    resave: false,
    saveUninitialized: true
  })
);

passport.serializeUser((user, done) => {
  console.log('\nSerialize users\n', user);
  return done(null, {
    id: user.id,
    email: user.email,
    first_name: user.first_name,
    last_name: user.last_name
  });
});

passport.deserializeUser((user, done) => {
  console.log('\nDeserialize users\n', user);
  new UserModels({ email: user.email })
    .where({ email: user.email })
    .fetch()
    .then(user => {
      if (!user) {
        return;
      }
      user = user.toJSON();
      console.log('Sessions here: ', user);
      return done(user, null, {
        // Display data from the database:
        id: user.id,
        email: user.email,
        first_name: user.first_name,
        last_name: user.last_name
      });
    })
    .catch(err => {
      console.log(err);
      return done(err);
    });
});

passport.use(
  new LocalStrategy(function(username, password, done) {
    return new UserModels({ email: username })
      .fetch()
      .then(user => {
        if (!user) {
          return done({ message: 'Invalid Email' });
        } else {
          user = user.toJSON();
          bcrypt.compare(password, user.password).then(thePassword => {
            if (thePassword) {
              return done(null, user);
            } else {
              return done({ message: 'Invalid Password' });
            }
          });
        }
      })
      .catch(err => {
        console.log('error: ', err);
        return done(err);
      });
  })
);

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
              <td><strong>BIDS</strong></td>
              <td><strong>TRANSACTIONS</strong></td>
              <td><strong>PREFERRED</strong></td>
            </tr>
            <tr>
              <td><a href="/api/users">/api/users</a></td>
              <td><a href="/api/content">/api/content</a></td>
              <td><a href="/api/bids">/api/bids</a></td>
              <td><a href="/api/transactions">/api/transactions</a></td>
              <td><a href="/api/preferred">/api/preferred</a></td>
            </tr>
            <tr>
            <td><a href="/api/users/1">/api/users/1</a></td>
            <td><a href="/api/content/1">/api/content/1</a></td>
            <td><a href="/api/bids/1">/api/bids/1</a></td>
            <td><a href="/api/transactions/1">/api/transactions/1</a></td>
            <td><a href="/api/preferred/1">/api/preferred/1</a></td>
            </tr>
          </tbody>
          </table>
    `);
});

app.post('/login', (req, res, next) => {
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
              id: users.id,
              first_name: users.first_name,
              last_name: users.last_name
            });
          }
        });
      }
    })(req, res, next);
  }
});

app.get('/login', (req, res) => {
  res.send(`Failed to login. Please log back in.`);
});

app.get('/home', (req, res) => {
  res.send(`Home success!`);
});

app.get('/logout', (req, res) => {
  req.logout();
  res.json({ success: true });
});

//// !important
//// To properly implement SPA, turn this route on only
//// when the Angular app is built and deployed.
//// Comment this route out if in development mode.
//// If not commented while in dev mode,
//// Angular app will throw warnings and errors.
///////////////////////////////////////////
// app.get('/*', function(req, res) {
//   res.sendFile(__dirname + '/index.html');
// });
///////////////////////////////////////////
///////////////////////////////////////////

app.listen(PORT, () => {
  console.log(`Server Listening on ${PORT}...`);
});
