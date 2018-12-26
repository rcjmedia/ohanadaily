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
  console.log('serializeUser', user)
  done(null, {
    email: user.email
  })
})

passport.deserializeUser((users, done) => {
  console.log('Deserializing Here: \n', users)
  UserModels
    .where({ email: users.email })
    .fetch()
    .then(users => {
      users = users.toJSON();
      console.log('List of deserialized users: \n', users)
      done(null, users)
    })
    .catch(err => {
      console.log('err', err)
    })
})

passport.use(new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
  console.log('This is LocalStrategy')
  UserModels
    .where({ email })
    .fetch()
    .then(users => {
      console.log('LocalStrategy Users', users)
      users = users.toJSON();
      if (users.password === password) {
        done(null, users )
      } else {
        done(null, false)
      }
      console.log('json LocalStrategy', users)

      bcrypt.compare(password, users.password)
        .then(response => {
          console.log('bcrypt LocalStrategy', response)

          if (response) {
            console.log('LocalStrategy login success')
            done(null, response);
          } else {
            console.log('login LocalStrategy failed')
            done(null, false);
          }
        })
        .catch(err => {
          console.log("err", err);
          done(err);
        })
    })
    .catch(err => {
      console.log("err", err);
      done(err);
    })
}))


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
              id: users.id
            });
          }
        });
      }
    })(req, res, next);
  }
});

// Log out users:
app.get('/logout', (req, res) => {
  req.logout();
  res.json({ success: true });
});

app.listen(PORT, () => {
  console.log(`Server Listening on ${PORT}...`);
});
