const express = require('express');
const app = express();
const PORT = process.env.EXPRESS_CONTAINER_PORT || 8080;
const routes = require('./routes/api/index');

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