const express = require('express');
const router = express.Router();
const bp = require('body-parser');
const PreferredModels = require('../../../models/PreferredModels');

//get all
router.get('/', (req, res) => {
  PreferredModels.fetchAll({ withRelated: ['buyer_id', 'seller_id'] })

    .then(preferredList => {
      res.json(preferredList.serialize());
      console.log('\nServer: List Of Users: \n', preferredList);
    })
    .catch(err => {
      console.log('err', err);
      res.json('err');
    });
});

//get by id
router.get('/:id', (req, res) => {
  const { id } = req.params;

  PreferredModels.where('id', id)
    .fetchAll({ withRelated: ['buyer_id', 'seller_id'] })
    .then(preferredId => {
      console.log('\nServer: Display By Transaction ID\n', preferredId);
      res.json(preferredId);
    })
    .catch(err => {
      console.log('err', err);
      res.json('err');
    });
});

//post new preferred seller/buyer
router.post('/preferred/new', (req, res) => {
  console.log('\nthis is req.body for register', req.body);

  PreferredModels
  .forge({
    seller_id: req.body.seller_id,
    buyer_id: req.body.buyer_id
  })
  .save()
  .then(() => {
    return PreferredModels
    .fetchAll({withRelated: ["buyer_id", "seller_id"]}) 
    .then(newPreferred => {
      res.json(newPreferred.serialize());
    })
    .catch(err => {
      console.log('err', err);
      res.json('err');
    })
  })
    .catch(err => {
      console.log('err', err);
      res.json('err');
    })
  })

module.exports = router;
