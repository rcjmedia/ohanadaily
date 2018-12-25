const express = require('express');
const router = express.Router();
const bp = require('body-parser');
const PreferredModels = require('../../../models/PreferredModels');

router.use(bp.json());
router.use(bp.urlencoded({ extended: true }));

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

  PreferredModels
  .where('id', id)
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
  .then(recipient => {
    return res.json(recipient);
  })
  .catch(err => {
    console.log(err.message);
    return res.status(400).json({ error: err.message });
  });
  
  });

  //delete preferred user by ID
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
