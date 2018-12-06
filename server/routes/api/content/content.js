const express = require('express');
const router = express.Router();
const bp = require('body-parser');
const ContentModels = require('../../../models/ContentModels');
const bcrypt = require('bcrypt');

router.use(bp.json());
router.use(bp.urlencoded({ extended: true}));


//get
router.get('/', (req, res) => {
  ContentModels
  .fetchAll({withRelated: ["user_id"]})

  .then(contentList => {
    res.json(contentList.serialize())
  console.log('\nServer: List Of Users: \n', contentList)
  })
  .catch(err => {
    console.log('err', err)
    res.json('err')
    })

  })



module.exports = router;