const express = require('express');
const router = express.Router();
const bp = require('body-parser');
const ContentModels = require('../../../models/ContentModels');

router.use(bp.json());
router.use(bp.urlencoded({ extended: true }));

router.get('/', (req, res) => {
  ContentModels.fetchAll({ withRelated: ['user_id'] })

    .then(contentList => {
      res.json(contentList.serialize());
      console.log('\nServer: List Of Contents: \n', contentList);
    })
    .catch(err => {
      console.log('err', err);
      res.json('err');
    });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  ContentModels
  .where('id', id)
    .fetchAll({ withRelated: ['user_id'] })
    .then(contentId => {
      console.log('\nServer: Display By Content ID\n');
      res.json(contentId);
    })
    .catch(err => {
      console.log('err', err);
      res.json('err');
    });
});

router.post('/add', (req, res) => {
  console.log('\nThis is the req.body for add content\n', req.body);

  const contentInput = {
    content_type: req.body.content_type,
    user_id: req.body.user_id,
    title: req.body.title,
    description: req.body.description,
    location: req.body.location,
    bid: req.body.bid,
    bid_time_duration: req.body.bid_time_duration,
    status: req.body.status,
    category: req.body.category,
    file_size: req.body.file_size,
    resolution: req.body.resolution,
    thumb_img: req.body.thumb_img,
    download_link: req.body.download_link
  };
  return new ContentModels()
      .save(contentInput)
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


router.put('/editstory/:id', (req, res) => {
  const { id } = req.params;

  const updatedStory = {
    content_type: req.body.content_type,
    user_id: req.body.user_id,
    title: req.body.title,
    description: req.body.description,
    location: req.body.location,
    bid: req.body.bid,
    bid_time_duration: req.body.bid_time_duration,
    status: req.body.status,
    category: req.body.category,
    file_size: req.body.file_size,
    resolution: req.body.resolution,
    thumb_img: req.body.thumb_img,
    download_link: req.body.download_link
  }

  ContentModels
  .where('id', id)
  .fetch()
  .then(storyUpdate => {
    console.log('storyUpdate', storyUpdate);
    storyUpdate.save(updatedStory);
    res.json(updatedStory);
    return null;
  })
  .catch(err => {
    console.log("GIVE ME THE err", err);
    res.json(err, 'sanity from put')
  })
});

router.delete('/deletestory', (req, res) => {
  const id = req.body.id

  ContentModels
  .where({ id })
  .destroy()
  .then(contentDetails => {
    res.json(contentDetails.serialize())
  })
  .catch(err => {
    console.log('err', err)
    res.json('err')
  })
})

module.exports = router;
