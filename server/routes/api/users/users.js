const express = require('express');
const router = express.Router();
const bp = require('body-parser');
const Users = require('../../../db/models/Users');
const bcrypt = require('bcrypt');

router.use(bp.json());
router.use(bp.urlencoded({ extended: true}));


//get
router.get('/', (req, res) => {
  Users
  .fetchAll()
  .then(userList => {
    res.json(userList.serialize())
  console.log('\nServer: List Of Users: \n', userList)
  })
  .catch(err => {
    console.log('err', err)
    res.json('err')
    })

  })

router.get('/:id', (req, res) => {
  const { id } = req.params;
  Users
  .where("id", id)
  .fetch()
  .then(userId => {
    console.log("\nServer: Display By User ID\n");
    res.json(userId);
  })
  .catch(err => {
    console.log('err', err);
    res.json('err')
  })
})
//post

router.post('/register', (req, res) => {
  console.log("\nThis is the req.body", req.body);
  const {password} = req.body
  bcrypt.hash(password, 10)

  Users
  .forge({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password: req.body.password,
    birthdate: req.body.birthdate,
    address: req.body.address,
    user_type: req.body.user_type,
    rank: req.body.rank
    
  })
})
//put

//delete