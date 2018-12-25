const express = require('express');
const router = express.Router();
const bp = require('body-parser');
const BidsModels = require('../../../models/BidsModels');

router.use(bp.json());
router.use(bp.urlencoded({ extended: true }));

//get all
router.get('/', (req, res) => {
  BidsModels.fetchAll({
    withRelated: ['bidder', 'content_id']
  })
    .then(bidsList => {
      res.json(bidsList.serialize());
      console.log('\nServer: List Of Users: \n', bidsList);
    })
    .catch(err => {
      console.log('err', err);
      res.json('err');
    });
});

//get by id
router.get('/:id', (req, res) => {
  const { id } = req.params;

  BidsModels.where('id', id)
    .fetchAll({ withRelated: ['bidder', 'content_id'] })
    .then(bidsId => {
      console.log('\nServer: Display By Bids ID\n', bidsId);
      res.json(bidsId);
    })
    .catch(err => {
      console.log('err', err);
      res.json('err');
    });
});

//post new
router.post('/new_bid', (req, res) => {
  console.log('\nThis is the req.body: \n', req.body);
  BidsModels.forge({
    bid_amount: req.body.bid_amount,
    bidder: req.body.bidder,
    content_id: req.body.content_id
  })
    .save()
    .then(() => {
      return BidsModels.fetchAll({
        withRelated: ['bidder', 'content_id']
      })
        .then(newBid => {
          res.json(newBid.serialize());
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
