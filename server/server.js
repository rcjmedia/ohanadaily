const express = require('express');
const app = express();
const session = require('express-session');
const cors = require('cors');
const PORT = process.env.EXPRESS_CONTAINER_PORT || 8080;
const Redis = require('connect-redis')(session);
const routes = require('./routes/api/index');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const bcrypt = require('bcrypt');
const UserModels = require('./models/UserModels');

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

app.use('/api', routes);

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => {
  return done(null, {
    id: user.id,
    email: user.email
  });
});

passport.deserializeUser((user, done) => {
  new UserModels({ id: user.id })
    .fetch()
    .then(user => {
      if (!user) {
        return;
      }
      user = user.toJSON();
      return done(user, null, { // Display data from the database:
        id: user.id,
        email: user.email
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
          bcrypt.compare(password, user.password).then(samePassword => {
            if (samePassword) {
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

app.get('/home', (req, res) => {
  res.send(`For authenticated users only.`) // TODO
})

app.listen(PORT, () => {
  console.log(`Server Listening on ${PORT}...`);
});
