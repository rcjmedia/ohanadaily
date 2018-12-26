const express = require('express');
const router = express.Router();
const bp = require('body-parser');
const BidsModels = require('../../../models/BidsModels');

router.use(bp.json());
router.use(bp.urlencoded({ extended: true }));

router.get('/', (req, res) => {
  BidsModels
    .fetchAll({
        withRelated: ['bidder', 'content_id']
  })
    .then(bidsList => {
        res.json(bidsList.serialize());
        console.log('\nServer: List Of Bids: \n', bidsList);
    })
    .catch(err => {
        console.log('err', err);
        res.json('err');
    });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  BidsModels
    .where('id', id)
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

router.post('/new_bid', (req, res) => {
  console.log('\nThis is the req.body: \n', req.body);

  const inputBid = {
    bid_amount: req.body.bid_amount,  
    bidder: req.body.bidder,
    content_id: req.body.content_id
  }

    return new BidsModels()
      .save(inputBid)
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

router.put('/editbids/:id', (req, res) => {
  const { id } = req.params;

  const updateBid = {
    bid_amount: req.body.bid_amount,  
  bidder: req.body.bidder,
  content_id: req.body.content_id
  }

  BidsModels
  .where('id', id)
  .fetch()
  .then(newBid => {
    console.log('newBid', newBid);
    newBid.save(updateBid);
    res.json(updateBid);
    return null;
  })
  .catch(err => {
    console.log("GIVE ME THE err", err);
    res.json(err, 'sanity from put')
  })
});

router.delete('/deletebid', (req, res) => {
  const id = req.body.id

  BidsModels
  .where({ id })
  .destroy()
  .then(bidDetails => {
    res.json(bidDetails.serialize())
  })
  .catch(err => {
    console.log('err', err)
    res.json('err')
  })
})

module.exports = router;
