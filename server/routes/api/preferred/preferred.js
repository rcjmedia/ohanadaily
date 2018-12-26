const express = require('express');
const router = express.Router();
const bp = require('body-parser');
const PreferredModels = require('../../../models/PreferredModels');

router.use(bp.json());
router.use(bp.urlencoded({ extended: true }));

router.get('/', (req, res) => {
  PreferredModels.fetchAll({ withRelated: ['buyer_id', 'seller_id'] })

    .then(preferredList => {
      res.json(preferredList.serialize());
      console.log('\nServer: List Of Preferred Users/Sellers: \n', preferredList);
    })
    .catch(err => {
      console.log('err', err);
      res.json('err');
    });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  PreferredModels
  .where('id', id)
    .fetchAll({ withRelated: ['buyer_id', 'seller_id'] })
    .then(preferredId => {
      console.log('\nServer: Display By Preferred by ID\n', preferredId);
      res.json(preferredId);
    })
    .catch(err => {
      console.log('err', err);
      res.json('err');
    });
  });

 router.post('/newpreferred', (req, res) => {
  console.log('\nNEW PREFERRED', req.body);

  const inputPreferred = {
    buyer_id: req.body.buyer_id,
    seller_id: req.body.seller_id
  }
    
  return new PreferredModels()
  .save(inputPreferred)
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

  router.put('/editpreferred/:id', (req, res) => {
    const { id } = req.params;

    const updatePreferred = {
      buyer_id: req.body.buyer_id,
    seller_id: req.body.seller_id
    }

    PreferredModels
    .where('id', id)
    .fetch()
    .then(newPreferred => {
      console.log('newPreferred', newPreferred);
      newPreferred.save(updatePreferred);
      res.json(updatePreferred);
      return null;
    })
    .catch(err => {
      console.log("GIVE ME THE err", err);
      res.json(err, 'sanity from put')
    })
  });

  router.delete('/deletepreferred', (req, res) => {
    const id = req.body.id

    PreferredModels
    .where({ id })
    .destroy()
    .then(preferredDetails => {
      res.json(preferredDetails.serialize())
    })
    .catch(err => {
      console.log('err', err)
      res.json('err')
    })
  })

module.exports = router;
