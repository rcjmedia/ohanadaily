const express = require('express');
const app = express();
const session = require('express-session');
const cors = require('cors');
const PORT = process.env.EXPRESS_CONTAINER_PORT || 8080;
const Redis = require('connect-redis')(session);
const routes = require('./routes/api/index');

app.use(cors());
app.use(session({
  store: new Redis({url: 'redis://redis-session-store:6379', logErrors: true}),
  secret: 'felixTheBat',
  resave: false,
  saveUninitialized: true
}));

app.use('/api', routes);

app.get('/', (req, res) => {
  console.log('Sanity Check')
  res.json({ 
      username: 'johndoe',
      name: 'John Doe',
      password: 'password1',
      email: 'email@email.com'
 })
});


app.listen(PORT, () => {
  console.log(`Server Listening on ${PORT}...`)
})


