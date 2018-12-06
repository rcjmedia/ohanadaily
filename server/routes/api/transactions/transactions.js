const express = require('express');
const router = express.Router();
const bp = require('body-parser');
const TransactionsModels = require('../../../models/TransactionsModels');

router.use(bp.json());
router.use(bp.urlencoded({ extended: true}));


//get

router.get('/', (req, res) => {
  TransactionsModels
  .fetchAll ({ withRelated: ["buyer_id", "seller_id", "content_id"]})

  .then(transactionList => {
    res.json(transactionList.serialize())
  console.log('\nServer: List Of Users: \n', transactionList)
  })
  .catch(err => {
    console.log('err', err)
    res.json('err')
    })

  })

router.get('/:id', (req, res) => {
  const { id } = req.params;

  TransactionsModels
  .where('id', id)
  .fetchAll({withRelated: ["user_id", "content_id"]})
  .then(transactionId => {
    console.log("\nServer: Display By Transaction ID\n", transactionId);
    res.json(transactionId);
  })
  .catch(err => {
    console.log('err', err);
    res.json('err')
  })
})

//post new
router.post('/new_purchase', (req, res) => {
  console.log("\nThis is the req.body: \n", req.body);
  TransactionsModels
  .forge({
    user_id: req.body.user_id,
    content_id: req.body.content_id,
  })
  .save()
  .then(() => {
    return TransactionsModels
    .fetchAll({withRelated: ['user_id', 'content_id']})
    .then(newPurchase => {
      res.json(newPurchase.serialize());
    })
    .catch(err => {
      console.log('err',err);
      res.json('err');
    })
  })
  .catch(err => {
    console.log('err', err);
    res.json('res.json ERRROR')
  });
})

//put edit
// router.put('/edit')

//put delete

//


module.exports = router;