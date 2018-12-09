const express = require('express');
const router = express.Router();
const bp = require('body-parser');
const UserModels = require('../../../models/UserModels');
const bcrypt = require('bcrypt');

router.use(bp.json());
router.use(bp.urlencoded({ extended: true }));

//get
router.get('/', (req, res) => {
  UserModels.fetchAll()
    .then(userList => {
      res.json(userList.serialize());
      console.log('\nServer: List Of Users: \n', userList);
    })
    .catch(err => {
      console.log('err', err);
      res.json('err');
    });
});

//get by id
router.get('/:id', (req, res) => {
  const { id } = req.params;
  UserModels.where('id', id)
    .fetch()
    .then(userId => {
      console.log('\nServer: Display By User ID\n');
      res.json(userId);
    })
    .catch(err => {
      console.log('err', err);
      res.json('err');
    });
});

//post new
router.post('/register', (req, res) => {
  console.log('\nThis is the req.body for register', req.body);
  const { password } = req.body;
  bcrypt.hash(password, 10);

  UserModels.forge({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password: req.body.password,
    birthdate: req.body.birthdate,
    address: req.body.address,
    user_type: req.body.user_type,
    rank: req.body.rank,
    avatar: req.body.avatar
  });
});

//put edit
router.put('/edit_user/:id', (req, res) => {
  console.log('\nThis is the req.body edit user', req.body);
  const { id } = req.params;
  const updateUser = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password: req.body.password,
    birthdate: req.body.birthdate,
    address: req.body.address,
    user_type: req.body.user_type,
    rank: req.body.rank,
    avatar: req.body.avatar
  };

  UserModels.where('id', id)
    .fetch()
    .then(userUpate => {
      userUpate.save(updateUser);
      res.json(userUpate);
      return null;
    })
    .catch(err => {
      console.log('err'.err);
      res.json('err');
    });
});

//put delete
router.put('/delete_user', (req, res) => {
  const id = req.body.id;

  UserModels.where({ id });
  destroy()
    .then(userDetails => {
      res.json(userDetails.serialize());
    })
    .catch(err => {
      console.log('err:');
    });
});

module.exports = router;
