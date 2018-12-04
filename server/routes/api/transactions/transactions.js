const express = require('express');
const router = express.Router();
const bp = require('body-parser');

const Transactions = require('../../../models/TransactionsModels');
const bcrypt = require('bcrypt');

router.use(bp.json());
router.use(bp.urlencoded({ extended: true}));


//get
router.get('/', (req, res) => {
  Transactions
  .fetchAll ({ withRelated: ["buyer_id", "seller_id", "content_id"]})
  .then(transactionList => {
    res.json(transactionList.serialize())
    console.log('\nServer: List of transactions: \n', transactionList)
  })
  .catch('err', err)
  res.json('err')
})

//post new


//put edit

//put delete

//