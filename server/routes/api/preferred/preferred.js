
const express = require('express');
const router = express.Router();
const bp = require('body-parser');
const PreferredModels = require('../../../models/PreferredModels');

//get all
router.get('/', (req, res) => {
    PreferredModels
    .fetchAll({withRelated: ["buyer_id", "seller_id"]})
  
    .then(preferredList => {
      res.json(preferredList.serialize())
    console.log('\nServer: List Of Users: \n', preferredList)
    })
    .catch(err => {
      console.log('err', err)
      res.json('err')
      })
  
    })
  
//get by id
router.get('/:id', (req, res) => {
  const { id } = req.params;

  PreferredModels
  .where('id', id)
  .fetchAll({withRelated: ["buyer_id", "seller_id"]})
  .then(preferredId => {
    console.log("\nServer: Display By Transaction ID\n", preferredId);
    res.json(preferredId);
  })
  .catch(err => {
    console.log('err', err);
    res.json('err')
  })
})

//post new preferred seller/buyer


module.exports = router;