
const express = require('express');
const router = express.Router();
const bp = require('body-parser');
const PreferredModels = require('../../../models/PreferredModels');


router.get('/', (req, res) => {
    PreferredModels
    .fetchAll({withRelated: ["user_id"]})
  
    .then(preferredList => {
      res.json(preferredList.serialize())
    console.log('\nServer: List Of Users: \n', preferredList)
    })
    .catch(err => {
      console.log('err', err)
      res.json('err')
      })
  
    })
    


module.exports = router;