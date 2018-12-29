const express = require('express');
const router = express.Router();
const bp = require('body-parser');
const TransactionsModels = require('../../../models/TransactionsModels');

router.use(bp.json());
router.use(bp.urlencoded({ extended: true }));

router.get('/', (req, res) => {
  TransactionsModels.fetchAll({
    withRelated: ['buyer_id', 'seller_id', 'content_id']
  })

    .then(transactionList => {
      res.json(transactionList.serialize());
      console.log('\nServer: List Of Transactions: \n', transactionList);
    })
    .catch(err => {
      console.log('err', err);
      res.json('err');
    });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  TransactionsModels.where('id', id)
    .fetchAll({ withRelated: ['buyer_id', 'seller_id', 'content_id'] })
    .then(transactionId => {
      console.log('\nServer: Display By Transaction by ID\n', transactionId);
      res.json(transactionId);
    })
    .catch(err => {
      console.log('err', err);
      res.json('err');
    });
});

router.post('/newpurchase', (req, res) => {
  console.log('\nThis is the req.body: \n', req.body);

  const inputTransaction = {
    buyer_id: req.body.buyer_id,
    seller_id: req.body.seller_id,
    content_id: req.body.content_id
  };

  return new TransactionsModels()
    .save(inputTransaction)
    .then(response => {
      return response.refresh();
    })
    .then(newData => {
      return res.json(newData);
    })
    .catch(err => {
      console.log(err.message);
      return res.status(400).json({ error: err.message });
    });
});

router.put('/edittransaction/:id', (req, res) => {
  const { id } = req.params;

  const updateTransaction = {
    buyer_id: req.body.buyer_id,
    seller_id: req.body.seller_id,
    content_id: req.body.content_id
  };

  TransactionsModels.where('id', id)
    .fetch()
    .then(editedTransaction => {
      console.log('editedTransaction', editedTransaction);
      editedTransaction.save(updateTransaction);
      res.json(updateTransaction);
      return null;
    })
    .catch(err => {
      console.log('GIVE ME THE err', err);
      res.json(err, 'sanity from put');
    });
});

router.delete('/deletetransaction', (req, res) => {
  const id = req.body.id;

  TransactionsModels.where({ id })
    .destroy()
    .then(preferredDetails => {
      res.json(preferredDetails.serialize());
    })
    .catch(err => {
      console.log('err', err);
      res.json('err');
    });
});

module.exports = router;
