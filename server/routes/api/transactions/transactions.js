const express = require('express');
const router = express.Router();
const bp = require('body-parser');
const TransactionsModels = require('../../../models/TransactionsModels');

router.use(bp.json());
router.use(bp.urlencoded({ extended: true }));

//get all
router.get('/', (req, res) => {
  TransactionsModels
  .fetchAll({
    withRelated: ['buyer_id', 'seller_id', 'content_id']
  })

    .then(transactionList => {
      res.json(transactionList.serialize());
      console.log('\nServer: List Of Users: \n', transactionList);
    })
    .catch(err => {
      console.log('err', err);
      res.json('err');
    });
});

//get by id
router.get('/:id', (req, res) => {
  const { id } = req.params;

  TransactionsModels
  .where('id', id)
    .fetchAll({ withRelated: ['buyer_id', 'seller_id', 'content_id'] })
    .then(transactionId => {
      console.log('\nServer: Display By Transaction ID\n', transactionId);
      res.json(transactionId);
    })
    .catch(err => {
      console.log('err', err);
      res.json('err');
    });
});

//post new
router.post('/newpurchase', (req, res) => {
  console.log('\nThis is the req.body: \n', req.body);
  TransactionsModels
  .forge({
    buyer_id: req.body.buyer_id,
    seller_id: req.body.seller_id,
    content_id: req.body.content_id
  })
    .save()
    .then(() => {
      return TransactionsModels
      .fetchAll({
        withRelated: ['buyer_id', 'seller_id', 'content_id']
      })
        .then(newPurchase => {
          res.json(newPurchase.serialize());
        })
        .catch(err => {
          console.log('err', err);
          res.json('err');
        });
    })
    .catch(err => {
      console.log('err', err);
      res.json('res.json ERRROR');
    });
});

//put edit
//no need
//put delete
//no need
//

module.exports = router;
