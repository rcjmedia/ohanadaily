const express = require('express');
const app = express();
const session = require('express-session');
const cors = require('cors');
const PORT = process.env.EXPRESS_CONTAINER_PORT || 8080;
const Redis = require('connect-redis')(session);
const routes = require('./routes/api/index');
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

app.listen(PORT, () => {
  console.log(`Server Listening on ${PORT}...`);
});
