const express = require('express');
const router = express.Router();
const bp = require('body-parser');
const ContentModels = require('../../../models/ContentModels');
const bcrypt = require('bcrypt');

router.use(bp.json());
router.use(bp.urlencoded({ extended: true }));

//get all
router.get('/', (req, res) => {
  ContentModels.fetchAll({ withRelated: ['user_id'] })

    .then(contentList => {
      res.json(contentList.serialize());
      console.log('\nServer: List Of Users: \n', contentList);
    })
    .catch(err => {
      console.log('err', err);
      res.json('err');
    });
});

//get by id
router.get('/:id', (req, res) => {
  const { id } = req.params;
  ContentModels.where('id', id)
    .fetchAll({ withRelated: ['user_id'] })
    .then(contentId => {
      console.log('\nServer: Display By User ID\n');
      res.json(contentId);
    })
    .catch(err => {
      console.log('err', err);
      res.json('err');
    });
});

//post new content
router.post('/add', (req, res) => {
  console.log('\nThis is the req.body for add content', req.body);
  const { password } = req.body;
  bcrypt.hash(password, 10);

  ContentModels.forge({
    type: req.body.type,
    user_id: req.body.user_id,
    title: req.body.title,
    description: req.body.description,
    location: req.body.location,
    bid: req.body.bid,
    status: req.body.status,
    category: req.body.category,
    file_size: req.body.file_size,
    resolution: req.body.resolution,
    thumb_img: req.body.thumb_img,
    download_link: req.body.download_link

  });
});

module.exports = router;
